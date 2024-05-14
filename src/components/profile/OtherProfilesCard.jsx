
export default function OtherProfilesCard() {
    return (
        <div className="bg-white p-3 shadow-md rounded-xl">
            <div className="flex items-center space-x-3 font-semibold text-gray-700 text-xl leading-8 mb-3">
                <span className="text-orange-500">
                    <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </span>
                <span>Similar Profiles</span>
            </div>
            <div className="grid grid-cols-3">
                <div className="text-center my-2">
                    <img className="h-16 w-16 rounded-full mx-auto" src="https://fakeimg.pl/300/" />
                    <a href="#" className="text-main-color">Kojstantin</a>
                </div>
                <div className="text-center my-2">
                    <img className="h-16 w-16 rounded-full mx-auto" src="https://fakeimg.pl/300/" />
                    <a href="#" className="text-main-color">James</a>
                </div>
                <div className="text-center my-2">
                    <img className="h-16 w-16 rounded-full mx-auto" src="https://fakeimg.pl/300/" />
                    <a href="#" className="text-main-color">Natie</a>
                </div>
                <div className="text-center my-2">
                    <img className="h-16 w-16 rounded-full mx-auto" src="https://fakeimg.pl/300/" />
                    <a href="#" className="text-main-color">Casey</a>
                </div>
            </div>
        </div>
    )
}