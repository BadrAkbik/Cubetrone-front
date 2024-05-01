import { MdOutlinePerson } from "react-icons/md";

export default function About() {
    return (
        <div className="bg-white p-3 shadow-md rounded-xl">
            <div className="flex items-center space-x-2 font-semibold text-gray-700 leading-8 mb-3">
                <MdOutlinePerson className="text-orange-500 text-2xl" />
                <span>About</span>
            </div>
            <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">First Name</div>
                        <div className="px-4 py-2">Jane</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Last Name</div>
                        <div className="px-4 py-2">Doe</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Contact No.</div>
                        <div className="px-4 py-2">+11 998001001</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Birthday</div>
                        <div className="px-4 py-2">Feb 06, 1998</div>
                    </div>
                </div>
            </div>
        </div>
    )
}