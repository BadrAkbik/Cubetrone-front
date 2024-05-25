
import { useEffect, useState } from "react";
import defaultProfilePic from "./../../images/default_profile_pic.jpg"
import { Link } from "react-router-dom";

export default function TeacherCard(props) {

    const [profileImage, setProfileImage] = useState(defaultProfilePic);

    useEffect(() => {
        if (props.image) {
            setProfileImage(props.image)
        }
        console.log(profileImage);
    }, [props])


    return (
        <div className="w-full h-52 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
     
            <div className="flex flex-col items-center pb-10 mt-6">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={props.image ? `${process.env.REACT_APP_BASE_API_URL}/profile_pictures/${profileImage}` : profileImage}  />
                <Link to={`profile/${props.id}`} className="mb-1 hover:text-orange-500 text-lg font-medium text-gray-700 px-5 text-center">{props.first_name} {props.last_name}</Link>
                {/* <span className="text-sm text-gray-500">Visual Designer</span> */}
            </div>
        </div>
    )
}

