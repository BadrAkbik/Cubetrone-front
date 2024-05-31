import React, { useState } from 'react'
import { useContext } from "react"
import UserDataContext from "../../context/UserDataContext"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ErrMessage from '../ErrMessage';


const DateInput = () => {

    const { errors } = useContext(UserDataContext)

    const [date, setDate] = useState(new Date("12-31-2019"));

    return (
        <>
            <ErrMessage errMsg={errors['date_of_birth']} />
            <div >
                <label htmlFor="date_of_birth" className="block text-sm mb-2 font-medium text-gray-700">Your birthday</label>
                <input
                    type="date"
                    name="date_of_birth"
                    id='date_of_birth'
                    onChange={(e) => setDate(e)}
                    className='block p-[7px] bg-gray-50 border border-gray-300 rounded-lg w-full text-gray-500'
                    max="2017-01-01"
                    min="1940-01-01"
                />
            </div>

        </>
    )
}

export default DateInput