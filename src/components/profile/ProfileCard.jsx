
export default function ProfileCard() {
    return (
        <div className="bg-white p-3 border-t-4 border-orange-500 shadow-md rounded-md mb-4">
            <div className="overflow-hidden">
                <img className="h-auto w-full mx-auto" src="https://fakeimg.pl/300/" alt="profile pictue" />
            </div>
            <h1 className="text-gray-700 font-bold text-xl mt-3">Jane Doe</h1>
            <h3 className="text-gray-700 font-lg text-semibold mb-3">Owner at Her Company Inc.</h3>
            <p className="text-sm text-gray-700 leading-6">Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto"><span className="bg-orange-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                </li>
                <li className="flex items-center py-3">
                    <span>Member since</span>
                    <span className="ml-auto">Nov 07, 2016</span>
                </li>
            </ul>
        </div>
    )
}

