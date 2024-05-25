import React, { useContext, useRef, useState } from 'react'
import OrangeBtn from './../buttons/OrangeBtn'
import Input from './../inputs/Input'
import UserDataContext from '../../context/UserDataContext'


const UserInfo = (props) => {

    const { errors } = useContext(UserDataContext)

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

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSubmit(e)
        setActiveLabel({})
    }


    return (
        <li className="flex justify-between items-center border-y py-2">
            <div className='flex items-center space-x-2'>
                <span className="font-bold w-24">{props.label}:</span>
                {activeLabel.type !== "editing" ?
                    <span className="text-gray-700">{props.info}</span>
                    :
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <Input type="text" id={props.name} value={props.info} placeholder={`Type your ${props.label}`} />
                    </form>
                }
            </div>
            {props.name !== 'createdAt' && props.loggedUserId == props.userId &&
                (activeLabel.type !== "editing" ?
                    <OrangeBtn onClick={handleEdit}>
                        Edit
                    </OrangeBtn>
                    :
                    <div className="flex justify-between space-x-10">
                        <OrangeBtn
                            loading={props.loading}
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