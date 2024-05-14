import React, { useState } from 'react'
import { useContext } from "react"
import UserDataContext from "../../context/UserDataContext"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DateInput = () => {

    const { errors } = useContext(UserDataContext)

    const [date, setDate] = useState(new Date("12-31-2019"));

    return (
        <>
            {errors['date_of_birth'] && <p
                className="bg-red-600 p-3 mb-3 rounded-lg max-w-fit text-white text-xs"
                aria-live="assertive">{errors['date_of_birth']}
            </p>}
            <label htmlFor="date_of_birth" className="block mb-2 text-sm font-medium text-gray-700">Your birthday</label>
            <DatePicker name='date_of_birth' id='date_of_birth' className='block p-2 -mt-2 bg-gray-50 border border-gray-300 rounded-lg w-full text-gray-500'
                selected={date} onChange={() => setDate(date)} dateFormat="yyyy/MM/dd" maxDate={new Date("12-31-2019")} autoComplete='off'
            />
        </>
    )
}

export default DateInput