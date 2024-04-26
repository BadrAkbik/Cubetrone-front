export default function forgotPassword() {
    return (
        <div id="forgot-password">
            <div className="flex justify-center items-center mt-20">
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <form className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-700">Enter your email to reset password</h5>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="name@company.com" required />
                        </div>
                        <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
