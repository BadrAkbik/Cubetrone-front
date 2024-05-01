import { FaVideo } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function VideoCard(props) {
    return (   
            <li className="bg-gray-100 hover:bg-gray-200 rounded-xl ">
                <Link href="#" className="flex items-center p-5 hover:text-orange-500 rounded-lg ">
                    <FaVideo />
                    <span className="flex-1 ms-3 whitespace-nowrap">{props.name}</span>
                </Link>
            </li>
    )
}

