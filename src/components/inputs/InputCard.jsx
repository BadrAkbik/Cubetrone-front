import React from 'react'

const InputCard = (props) => {
    return (
        <div className="flex justify-center items-center mt-20">
            <div className=" w-full max-w-sm md:max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-700">Create your account</h5>
                    {props.children}
                    {errMsg && <p
                        className="bg-red-600 font-meduim p-3 mb-3 rounded-lg max-w-fit text-white text-sm"
                        aria-live="assertive">{errMsg}
                    </p>}
                </form>
            </div>
        </div>
    )
}

export default InputCard