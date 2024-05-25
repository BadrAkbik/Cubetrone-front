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
    }, [loading])

    useEffect(() => {
        if (user.image) {
            setProfileImage(user.image)
        }
        setUserInfo([
            { label: 'First name', info: user.first_name, name: 'first_name' },
            { label: 'Last name', info: user.last_name, name: 'last_name' },
            { label: 'Email', info: user.email, name: 'email' },
            { label: 'Mobile', info: user.phone_num, name: 'phone_num' },
            { label: 'Joined', info: user.created_at && format(user.created_at, 'dd MMMM yyyy'), name: 'createdAt' },
        ])
    }, [user, userId])


    const handleEdit = () => {
        console.log('edit')
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
                console.log(response.data)
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
                        {(user.role == "teacher" || user.role == "admin") &&
                            <div className="flex flex-col w-full mb-4">
                                <div className="flex-1 bg-white rounded-lg shadow-xl p-8 space-y-3">
                                    {(loggedUserId != userId && user?.about) || (loggedUserId == userId) &&
                                        <>
                                            <h4 className="text-xl text-gray-900 font-bold">About</h4>
                                            {activeLabel.type !== "editing" ?
                                                <p className="mt-2 text-gray-700 overflow-hidden">{user.about}</p>
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
                                {userInfo.map((item, index) =>
                                    <UserDataContext.Provider key={index} value={{ errors, setErrMsg, setErrors }}>
                                        <UserInfo
                                            handleSubmit={handleSubmit}
                                            loading={loading}
                                            setLoading={setLoading}
                                            label={item.label}
                                            info={item.info}
                                            name={item.name}
                                            userId={userId}
                                            loggedUserId={loggedUserId}
                                        />
                                    </UserDataContext.Provider>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

{/* <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
                            <h4 className="text-xl text-gray-900 font-bold">Activity log</h4>
                            <div className="relative px-4">
                                <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                                <div className="flex items-center w-full my-6 -ml-1.5">
                                    <div className="w-1/12 z-10">
                                        <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="w-11/12">
                                        <p className="text-sm">Profile informations changed.</p>
                                        <p className="text-xs text-gray-500">3 min ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-full my-6 -ml-1.5">
                                    <div className="w-1/12 z-10">
                                        <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="w-11/12">
                                        <p className="text-sm">
                                            Connected with <a href="#" className="text-blue-600 font-bold">Colby Covington</a>.</p>
                                        <p className="text-xs text-gray-500">15 min ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-full my-6 -ml-1.5">
                                    <div className="w-1/12 z-10">
                                        <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="w-11/12">
                                        <p className="text-sm">Invoice <a href="#" className="text-blue-600 font-bold">#4563</a> was created.</p>
                                        <p className="text-xs text-gray-500">57 min ago</p>
                                    </div>
                                </div>


                                <div className="flex items-center w-full my-6 -ml-1.5">
                                    <div className="w-1/12 z-10">
                                        <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="w-11/12">
                                        <p className="text-sm">
                                            Message received from <a href="#" className="text-blue-600 font-bold">Cecilia Hendric</a>.</p>
                                        <p className="text-xs text-gray-500">1 hour ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-full my-6 -ml-1.5">
                                    <div className="w-1/12 z-10">
                                        <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="w-11/12">
                                        <p className="text-sm">New order received <a href="#" className="text-blue-600 font-bold">#OR9653</a>.</p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-full my-6 -ml-1.5">
                                    <div className="w-1/12 z-10">
                                        <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="w-11/12">
                                        <p className="text-sm">
                                            Message received from <a href="#" className="text-blue-600 font-bold">Jane Stillman</a>.</p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}