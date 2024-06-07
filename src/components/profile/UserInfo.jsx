import React, { useContext, useRef, useState } from 'react'
import OrangeBtn from './../buttons/OrangeBtn'
import Input from './../inputs/Input'
import UserDataContext from '../../context/UserDataContext'


const UserInfo = () => {

    const { handleSubmit, loading, label, info, name, userId, loggedUserId } = useContext(UserDataContext)

    const [activeLabel, setActiveLabel] = useState({})
    const formRef = useRef(null);

    const handleEdit = () => {
        setActiveLabel({
            type: 'editing'
        })
    }

    const handleCancel = () => {
        setActiveLabel({})
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        handleSubmit(e)
        setActiveLabel({})
    }


    return (
        <li className="flex justify-between items-center border-y py-2">
            <div className='flex items-center space-x-2 py-2'>
                <span className="font-bold w-24">{label}:</span>
                {activeLabel.type !== "editing" ?
                    <span className="text-gray-700">{info}</span>
                    :
                    <form ref={formRef} onSubmit={handlesubmit}>
                        <Input type="text" id={name} value={info} placeholder={`Type your ${label}`} />
                    </form>
                }
            </div>
            {name !== 'createdAt' && loggedUserId == userId &&
                (activeLabel.type !== "editing" ?
                    <OrangeBtn onClick={handleEdit}>
                        Edit
                    </OrangeBtn>
                    :
                    <div className="flex justify-between space-x-10">
                        <OrangeBtn
                            loading={loading}
                            onClick={() => formRef.current && formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
                        >
                            Submit
                        </OrangeBtn>
                        <OrangeBtn onClick={handleCancel}>
                            Cancel
                        </OrangeBtn>
                    </div>)
            }
        </li>
    )
}

export default UserInfo