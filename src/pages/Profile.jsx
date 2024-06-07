import api from "./../api/Url"
import { useEffect, useRef, useState } from 'react';
import { MdVerified } from "react-icons/md";
import { useParams } from "react-router-dom";
import { format } from 'date-fns';
import UserInfo from "../components/profile/UserInfo";
import backgroundImage from "./../images/profile_background.png"
import defaultProfilePic from "./../images/default_profile_pic.jpg"
import OrangeBtn from "./../components/buttons/OrangeBtn"
import Input from './../components/inputs/Input'
import UserDataContext from "../context/UserDataContext";
import ErrMessage from "../components/ErrMessage";
import { validateInputs } from "./../functions/validate";
import EnrolledCourses from "../components/profile/EnrolledCourses";

export default function Profile() {

    const [user, setUser] = useState({})
    const { userId } = useParams();
    const [userInfo, setUserInfo] = useState([])
    const [profileImage, setProfileImage] = useState(defaultProfilePic);
    const [loading, setLoading] = useState(false);
    const loggedUserId = JSON.parse(localStorage.getItem('userData'))?.id
    const [activeLabel, setActiveLabel] = useState({})
    const [errMsg, setErrMsg] = useState('');
    const [errors, setErrors] = useState({})
    const formRef = useRef(null);



    useEffect(() => {
        const fetchUser = async () => {
            try {
                await api.get(`/user/${userId}`).then(response => setUser(response.data.data))
            } catch (err) {
                if (!err?.response) {
                    console.log('No Server Response')
                } else {
                    console.log(err.response.data.message)
                }
            }
        }
        fetchUser()
    }, [loading, userId])

    useEffect(() => {
        if (user.image) {
            setProfileImage(user.image)
        }
        setUserInfo([
            { label: 'First name', info: user.first_name, name: 'first_name' },
            { label: 'Last name', info: user.last_name, name: 'last_name' },
            { label: 'User name', info: user.username, name: 'username' },
            { label: 'Email', info: user.email, name: 'email' },
            { label: 'Mobile', info: user.phone_num, name: 'phone_num' },
            { label: 'Joined', info: user.created_at && format(user.created_at, 'dd MMMM yyyy'), name: 'createdAt' },
        ])
    }, [user])


    const handleEdit = () => {
        setActiveLabel({
            type: 'editing'
        })
    }

    const handleCancel = () => {
        setActiveLabel({})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        const data = new FormData(e.target)

        const validationErrors = validateInputs(data, 'updateUser');

        setErrors(validationErrors.errors)
        if (validationErrors.hasErrors) {
            setErrMsg("Invalid Entry")
            setLoading(false)
            return
        }
        try {
            const response = await api.post(`/user/${userId}`, data,
                {
                    headers: {
                        'X-HTTP-Method-Override': 'PATCH',
                        'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            localStorage.setItem('userData', JSON.stringify(response.data.data));
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
            setActiveLabel({})
        }
    }

    const handleEditImage = async (event) => {
        setLoading(true);
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            try {
                const response = await api.post(`/user/${user.id}`, formData,
                    {
                        headers: {
                            'X-HTTP-Method-Override': 'PATCH',
                            'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
                            'Content-Type': 'multipart/form-data'
                        },
                    });
                if (response.status === 200) {
                    setProfileImage(response.data.url);
                } else {
                    alert('Image upload failed');
                }
            } catch (error) {
                console.error('Error uploading image:', error);
                alert('Error uploading image');
            } finally {
                setLoading(false);
            }
        }
    };
    return (
        <div className="h-full p-8">
            <div className="bg-white rounded-lg shadow-xl pb-8">
                <div className="w-full h-[250px]">
                    <img src={backgroundImage} className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg" />
                </div>
                <div className="flex flex-col items-center -mt-20">
                    <div className="relative">
                        <img src={user.image ? `${process.env.REACT_APP_BASE_API_URL}/profile_pictures/${profileImage}` : profileImage}
                            className="w-40 h-40 border-4 border-white rounded-full object-cover"
                        />
                        {!loading && loggedUserId == userId &&
                            <div>
                                <label
                                    htmlFor="profile-image-input"
                                    className="absolute inset-0 w-full h-full 
                            bg-black bg-opacity-50 
                            rounded-full 
                            flex items-center 
                            justify-center 
                            text-white 
                            opacity-0 
                            hover:opacity-100 
                            transition-opacity 
                            border-4 
                            border-white"
                                >
                                    Edit
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    id="profile-image-input"
                                    onChange={handleEditImage}
                                />
                            </div>
                        }
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                        <p className="text-2xl">{user.first_name} {user.last_name}</p>
                        <MdVerified />
                    </div>
                    <p className="text-gray-700 mt-1">{user.role}</p>
                </div>
                <div className="my-4 flex flex-col space-y-4">
                    <div className="w-full flex flex-col">
                        {user.role != "student" &&
                            <div className="flex flex-col w-full mb-4">
                                <div className="flex-1 bg-white rounded-lg shadow-xl p-8 space-y-3">
                                    {(loggedUserId != userId && user?.about) || (loggedUserId == userId) &&
                                        <>
                                            <h4 className="text-xl text-gray-900 font-bold">About</h4>
                                            {activeLabel.type !== "editing" ?
                                                <p className="mt-2 text-gray-700 overflow-hidden whitespace-pre-line">{user.about}</p>
                                                :
                                                <UserDataContext.Provider value={{ errors, setErrMsg, setErrors }}>
                                                    <form ref={formRef} onSubmit={handleSubmit}>
                                                        <Input type="textarea" id='about' value={user.about} placeholder='Talk about your self' />
                                                    </form>
                                                </UserDataContext.Provider>

                                            }
                                        </>
                                    }
                                    {loggedUserId == userId &&
                                        (activeLabel.type !== "editing" ?
                                            <OrangeBtn onClick={handleEdit}>
                                                Edit
                                            </OrangeBtn>
                                            :
                                            <div className="flex justify-center space-x-10">
                                                <OrangeBtn onClick={handleCancel}>
                                                    Cancel
                                                </OrangeBtn>
                                                <OrangeBtn
                                                    loading={loading}
                                                    onClick={() => formRef.current && formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}>
                                                    Submit
                                                </OrangeBtn>
                                            </div>)

                                    }
                                </div>
                            </div>
                        }
                        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                            <ErrMessage errMsg={errMsg} />
                            <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
                            <ul className="mt-2 text-gray-700">
                                {userInfo.map((item, index) => {
                                    const { label, info, name } = item;
                                    return (
                                        <UserDataContext.Provider key={index}
                                            value={{ setErrMsg, setErrors, handleSubmit, loading, label, info, name, userId, loggedUserId }}
                                        >
                                            <UserInfo />
                                        </UserDataContext.Provider>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {loggedUserId == userId &&
                <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
                    <EnrolledCourses />
                </div>
            }
        </div>
    )
}
