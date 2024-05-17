import CommentCard from "./CommentCard";
import OrangeBtn from "../buttons/OrangeBtn";
import { useEffect, useState } from "react";
import api from "./../../api/Url"
import CommentForm from "./CommentForm";


export default function CommentSection(props) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchLessonComments = async () => {
            try {
                await api.get(`/comments/lesson/${props.lessonId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access-token')}`
                    }
                }).then(response => {
                    setComments(response.data.data)
                }
                )

            } catch (err) {
                /*             if (!err?.response) {
                              setErrMsg('No Server Response')
                            } else {
                              setErrMsg(err.response.data.message)
                            } */
            }
        }
        fetchLessonComments()

    }, [props.lessonId])



    return (
        <section className="py-8 lg:py-16 border shadow-lg rounded-xl">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-700">Discussion ({comments.length})</h2>
                </div>
                <CommentForm type="post"/>

                {comments.map((item, index) =>
                    <div key={index}>
                        <CommentCard
                            type={"comment"}
                            id={item.id}
                            userName={`${item.user_first_name} ${item.user_last_name}`}
                            createdAt={item.created_at}
                            body={item.body}
                        />
                        {item.children && item.children.map((child, index) =>
                            <CommentCard
                                key={index}
                                id={child.id}
                                type={"reply"}
                                userName={`${child.user_first_name} ${child.user_last_name}`}
                                createdAt={child.created_at}
                                body={child.body}
                            />
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}