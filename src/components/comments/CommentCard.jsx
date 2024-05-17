import CommentHead from './CommentHead'
import CommentAction from './CommentAction'
import { FaReply } from "react-icons/fa";
import { useEffect, useState } from 'react';
import CommentForm from './CommentForm';



export default function CommentCard(props) {
    const [type, settype] = useState("comment")
    const [activeComment, setActiveComment] = useState({})
    const isReplying = activeComment.type === "replying"


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
                    <CommentAction />
                </footer>
                <p className="text-gray-700">
                    {props.body}
                </p>
                <div className="flex items-center mt-4 space-x-4">
                    {type === 'comment' &&
                        <button type="button" onClick={handleReply} className="flex items-center text-sm text-gray-500 hover:underline font-medium">
                            <FaReply className="mr-2" />
                            Reply
                        </button>
                    }
                </div>
            </article>
            {isReplying &&
                <CommentForm type="post" />
            }
        </>
    )
}