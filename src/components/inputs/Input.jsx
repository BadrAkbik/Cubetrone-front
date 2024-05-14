import { useContext } from "react"
import UserDataContext from "../../context/UserDataContext"

export default function Input({ id, type, label, placeholder, required, children, autoFocus }) {

    const { errors, setErrMsg, setErrors } = useContext(UserDataContext)
    const handlechange = (e) => {
        setErrors({})
        setErrMsg('')
    }

    return (
        <div>
            {errors[id] && <p
                className="bg-red-600 p-3 mb-3 rounded-lg max-w-fit text-white text-xs"
                aria-live="assertive">{errors[id]}
            </p>}
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
            <div className="relative">
                {children}
                <input
                    type={type} id={id}
                    name={id}
                    className={(id == "phone_num" ? "ps-10 " : "") + "bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"}
                    placeholder={placeholder} required={required}
                    onChange={handlechange} autoFocus={autoFocus}
                />
            </div>
        </div>
    )
}