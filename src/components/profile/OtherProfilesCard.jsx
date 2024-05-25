
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


{/* <div class="bg-white rounded-lg shadow-xl p-8">
                    <div class="flex items-center justify-between">
                        <h4 class="text-xl text-gray-900 font-bold">Connections (532)</h4>
                        <a href="#" title="View All">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection1.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Diane Aguilar</p>
                                <p class="text-xs text-gray-500 text-center">UI/UX Design at Upwork</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection2.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Frances Mather</p>
                                <p class="text-xs text-gray-500 text-center">Software Engineer at Facebook</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Carlos Friedrich</p>
                                <p class="text-xs text-gray-500 text-center">Front-End Developer at Tailwind CSS</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection4.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Donna Serrano</p>
                                <p class="text-xs text-gray-500 text-center">System Engineer at Tesla</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection5.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Randall Tabron</p>
                                <p class="text-xs text-gray-500 text-center">Software Developer at Upwork</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection6.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">John McCleary</p>
                                <p class="text-xs text-gray-500 text-center">Software Engineer at Laravel</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection7.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Amanda Noble</p>
                                <p class="text-xs text-gray-500 text-center">Graphic Designer at Tailwind CSS</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection8.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Christine Drew</p>
                                <p class="text-xs text-gray-500 text-center">Senior Android Developer at Google</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection9.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Lucas Bell</p>
                                <p class="text-xs text-gray-500 text-center">Creative Writer at Upwork</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection10.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Debra Herring</p>
                                <p class="text-xs text-gray-500 text-center">Co-Founder at Alpine.js</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection11.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Benjamin Farrior</p>
                                <p class="text-xs text-gray-500 text-center">Software Engineer Lead at Microsoft</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection12.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Maria Heal</p>
                                <p class="text-xs text-gray-500 text-center">Linux System Administrator at Twitter</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection13.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Edward Ice</p>
                                <p class="text-xs text-gray-500 text-center">Customer Support at Instagram</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection14.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Jeffery Silver</p>
                                <p class="text-xs text-gray-500 text-center">Software Engineer at Twitter</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection15.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Jennifer Schultz</p>
                                <p class="text-xs text-gray-500 text-center">Project Manager at Google</p>
                        </a>
                        <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg" class="w-16 rounded-full">
                                <p class="text-center font-bold text-sm mt-1">Joseph Marlatt</p>
                                <p class="text-xs text-gray-500 text-center">Team Lead at Facebook</p>
                        </a>
                    </div>
                </div> */}