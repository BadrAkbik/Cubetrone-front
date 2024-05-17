import { FaVideo } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

export default function VideoCard(props) {
    return (
        <li className="bg-gray-100 hover:bg-gray-200 rounded-xl ">
            <NavLink
                to={`/course/${props.courseId}/lesson/${props.lessonId}`}
                className={
                    ({ isActive }) =>
                        (isActive ? " text-orange-500" : "text-gray-700 hover:text-orange-500") + " flex items-center p-5 hover:text-orange-500 rounded-lg"}
            >
                <FaVideo />
                <span className="flex-1 ms-3 whitespace-nowrap">{props.title}</span>
            </NavLink>
        </li>
    )
}

