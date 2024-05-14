import profile from "../../images/profile.png";


export default function TeacherCard(props) {

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex justify-end px-4 pt-4">
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={profile} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">{props.first_name} {props.last_name}</h5>
                <span className="text-sm text-gray-500">Visual Designer</span>
            </div>
        </div>
    )
}

