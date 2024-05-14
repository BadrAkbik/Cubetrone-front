import { useContext } from "react"
import UserDataContext from "../../context/UserDataContext"


export default function SelectField() {
    const { errors } = useContext(UserDataContext)
    return (
        <div>
            {errors['gender'] && <p
                className="bg-red-600 p-3 mb-3 rounded-lg max-w-fit text-white text-xs"
                aria-live="assertive">{errors['gender']}
            </p>}
            <label htmlFor="gender" className=" block mb-2 text-sm font-medium text-gray-900">Gender</label>
            <select
                name='gender'
                id="gender"
                defaultValue={'DEFAULT'}
                className=" bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 
                            focus:border-orange-500 block w-full p-2.5"
            >
                <option value="DEFAULT">Choose your gender</option>
                <option value="male">Male</option>
                <option value="female">female</option>
            </select>
        </div>
    )
}

