import CommentHead from './CommentHead'
import { FaReply } from "react-icons/fa";
import { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import api from "./../../api/Url"
import { Dropdown } from "flowbite-react";

export default function CommentCard(props) {

    const [type, settype] = useState("comment")
    const [activeComment, setActiveComment] = useState({})
    const loggedUserId = JSON.parse(localStorage.getItem('userData')).id
    const loggedUserRole = JSON.parse(localStorage.getItem('userData')).role


    const handleEdit = () => {
        setActiveComment({
            id: props.id,
            type: 'editing'
        })
    }

    const handleRemove = async (e) => {
        props.setLoading(true)
        try {
            const response = await api.delete(`/comments/${props.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access-token')}`
                }
            })
        } catch (err) {

        } finally {
            props.setLoading(false)
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setActiveComment({})
    }

    const handleReply = () => {
        if (!activeComment.type) {
            setActiveComment({
                id: props.id,
                type: 'replying'
            })
        } else {
            setActiveComment({})
        }
    }

    useEffect(
        () => {
            if (props.type == "reply") {
                settype("reply")
            }
        }, [])

    return (
        <>
            <article className={(type == "comment" ? "border shadow-md" : "mb-3 ml-6 lg:ml-12") + " mb-3 p-6 text-base rounded-lg"}>
                <footer className="flex justify-between items-center mb-2">
                    <CommentHead userName={props.userName} createdAt={props.createdAt} />
                    {(loggedUserId === props.userId || loggedUserRole === 'admin') &&
                        <Dropdown inline>
                            {loggedUserId === props.userId &&
                                <Dropdown.Item className='hover:text-orange-500' onClick={handleEdit}>Edit</Dropdown.Item>
                            }
                            <Dropdown.Item className='hover:text-orange-500' onClick={handleRemove}>Remove</Dropdown.Item>
                        </Dropdown>
                    }
                </footer>
                {activeComment.type !== "editing" ?
                    <p className="text-gray-700">
                        {props.body}
                    </p>
                    :
                    <CommentForm
                        type='edit'
                        loading={props.loading}
                        setLoading={props.setLoading}
                        setActiveComment={setActiveComment}
                        lessonId={props.lessonId}
                        id={props.id}
                        value={props.body}
                        handleCancel={handleCancel}
                        hasCancelButton
                    />
                }

                <div className="flex items-center mt-4 space-x-4">
                    {type === 'comment' &&
                        <button type="button" onClick={handleReply} className="flex items-center text-sm text-gray-500 hover:underline font-medium">
                            <FaReply className="mr-2" />
                            Reply
                        </button>
                    }
                </div>
            </article>
            {activeComment.type === "replying" &&
                <CommentForm
                    type="reply"
                    setActiveComment={setActiveComment}
                    loading={props.loading}
                    setLoading={props.setLoading}
                    lessonId={props.lessonId}
                    id={props.id}
                />
            }
        </>
    )
}