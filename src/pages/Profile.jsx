import { FaRegFileAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ProfileCard from "../components/profile/ProfileCard";
import OtherProfilesCard from "../components/profile/OtherProfilesCard";
import About from "../components/profile/About";


export default function Profile() {
    return (
        <div className="max-w-screen-xl mx-auto p-5 md:flex">
            <div className="md:w-1/4 md:mx-2">
                <ProfileCard />
                <OtherProfilesCard />
            </div>
            <div className="w-full md:w-9/12 mt-4 md:mt-0 md:mx-2 h-64 ">
                <About />
                <div className="bg-white p-3 rounded-xl shadow-md mt-4 grid grid-cols-2">
                    <div>
                        <div className="flex items-center space-x-2 font-semibold text-gray-700 leading-8 mb-3">
                            <FaRegFileAlt className="text-orange-500 text-xl" />
                            <span className="tracking-wide">Experience</span>
                        </div>
                        <ul className="list-inside space-y-2">
                            <li>
                                <div className="text-gray-700">Owner at Her Company Inc.</div>
                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                            </li>
                            <li>
                                <div className="text-gray-700">Owner at Her Company Inc.</div>
                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                            </li>
                            <li>
                                <div className="text-gray-700">Owner at Her Company Inc.</div>
                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                            </li>
                            <li>
                                <div className="text-gray-700">Owner at Her Company Inc.</div>
                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2 font-semibold text-gray-700 leading-8 mb-3">
                            <span clas="text-green-500">
                                <LuGraduationCap className="text-orange-500 text-xl" />
                            </span>
                            <span className="tracking-wide">Education</span>
                        </div>
                        <ul className="list-inside space-y-2">
                            <li>
                                <div className="text-gray-700">Masters Degree in Oxford</div>
                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                            </li>
                            <li>
                                <div className="text-gray-700">Bachelors Degreen in LPU</div>
                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
