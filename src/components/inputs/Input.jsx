import { useContext, useState } from "react"
import UserDataContext from "../../context/UserDataContext"
import ErrMessage from "../ErrMessage"

export default function Input({ id, type, label, placeholder, required, children, autoFocus, value }) {

    const [Value, setValue] = useState(value)
    const { errors, setErrMsg, setErrors } = useContext(UserDataContext)
    const handlechange = (e) => {
        setErrors({})
        setErrMsg('')
        setValue(e.target.value)
    }

    return (
        <div>
            <ErrMessage errMsg={errors[id]} />
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
            <div className="relative">
                {children}
                {type === 'textarea' ?
                    <textarea
                        id={id}
                        value={Value}
                        onChange={handlechange}
                        name={id}
                        rows={7}
                        className=" w-full text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-700 p-2.5 focus:ring-0 focus:outline-none"
                        placeholder={placeholder}
                        required
                    />
                    :
                    <input
                        type={type}
                        id={id}
                        name={id}
                        className={(id == "phone_num" ? "ps-10 " : "") + "bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"}
                        placeholder={placeholder} required={required}
                        onChange={handlechange} autoFocus={autoFocus}
                        value={Value}
                    />}
            </div>
        </div>
    )
}