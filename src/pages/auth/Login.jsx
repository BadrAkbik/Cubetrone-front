import { Link } from "react-router-dom";



export default function Login() {
        return (
            <div id="login">
                <div className="flex justify-center items-center mt-20">
                    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                        <form className="space-y-6" action="#">
                            <h5 className="text-xl font-medium text-gray-700">Sign in to your account</h5>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" required />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300" required />
                                    </div>
                                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-700 dark:text-gray-300">Remember me</label>
                                </div>
                                <Link to="/forgot-password" className="ms-auto text-sm text-orange-500 hover:underline">Lost Password?</Link>
                            </div>
                            <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                            <div className="text-sm font-medium text-gray-500">
                                Not registered? <Link to="/signup" className="text-orange-500 hover:underline">Create account </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }