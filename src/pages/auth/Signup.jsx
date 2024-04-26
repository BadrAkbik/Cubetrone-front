export default function Signup() {
        return (
            <div id="signup">
                <div className="flex justify-center items-center mt-20">
                    <div className=" w-full max-w-sm md:max-w-3xl  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                        <form className="space-y-6" action="#">
                            <h5 className="text-xl font-medium text-gray-700">Create your account</h5>
                            <div className="md:flex md:w-full md:space-x-4 space-y-4 md:space-y-0">
                                <div className="md:w-full flex flex-col space-y-4">
                                    <div>
                                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-700">First name</label>
                                        <input type="text" name="first_name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="First name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-700">Last name</label>
                                        <input type="text" name="last_name" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="Last name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="name@mail.com" required />
                                    </div>
                                </div>
                                <div className="md:w-full flex flex-col space-y-4">
                                    <div>
                                        <label htmlFor="phone_num" className="block mb-2 text-sm font-medium text-gray-900">Phone number: <span className="opacity-70">(optional)</span></label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 19 18">
                                                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                                </svg>
                                            </div>
                                            <input type="text" id="phone_num" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " pattern="[0-9]{10}" placeholder="09XXXXXXXX" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="gender" className=" block mb-2 text-sm font-medium text-gray-900">Gender</label>
                                        <select id="gender" defaultValue={'DEFAULT'} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
                                            <option value="DEFAULT">Choose your gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">female</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Your password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" required />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300" required />
                                    </div>
                                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-700 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="w-1/2 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create new account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
