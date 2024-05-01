import CommentHead from './CommentHead'
import CommentAction from './CommentAction'
import { FaReply } from "react-icons/fa";
import { useEffect, useState } from 'react';



export default function CommentCard(props) {
    const [type, settype] = useState("comment")

    useEffect(
        () => {
            if (props.type == "reply") {
                settype("reply")
            }
        },)

    return (
        <>
            <article className={(type == "comment" ? "border shadow-md" : "mb-3 ml-6 lg:ml-12") + " p-6 text-base rounded-lg"}>
                <footer className="flex justify-between items-center mb-2">
                    <CommentHead />
                    <CommentAction />
                </footer>
                <p className="text-gray-700">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                    instruments for the UX designers. The knowledge of the design tools are as important as the
                    creation of the design strategy.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                    <button type="button" className="flex items-center text-sm text-gray-500 hover:underline font-medium">
                        <FaReply className="mr-2" />
                        Reply
                    </button>
                </div>
            </article>
        </>
    )
}