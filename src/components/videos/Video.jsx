import { useEffect, useState } from "react";
import BlueBtn from "../buttons/BlueBtn";
import ReactPlayer from 'react-player'
import OrangeBtn from "../buttons/OrangeBtn";
import api from "./../../api/Url"

export default function Video(props) {
    const [lessonsIds, setlessonsIds] = useState([])
    const [prevLesson, setPrevLesson] = useState('')
    const [nextLesson, setNextLesson] = useState('')
    const [loading, setLoading] = useState(false);
    const [watched, setwatched] = useState(false);



    useEffect(() => {
        setlessonsIds(
            props.lessons?.map((item) => {
                return item.id
            })
        )
    }, [props.lessons])

    useEffect(() => {
        setwatched(props.watchedLessons?.includes(props.currentLesson?.id))
    }, [props.watchedLessons, props.currentLesson?.id])

    useEffect(() => {

        const index = lessonsIds?.indexOf(props.currentLesson?.id);

        if (index >= 0) {
            setNextLesson(lessonsIds[index + 1])
            setPrevLesson(lessonsIds[index - 1])
        }

    }, [lessonsIds, props.currentLesson])


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);

        const data = new FormData()
        data.append('lesson_id', props.currentLesson?.id)
        data.append('course_id', props.courseId)

        try {
            const response = await api.post('/togglewatched', data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
            setwatched((prev) => !prev)
        } catch (err) {
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <h1 className="text-4xl font-bold text-gray-700 my-10">{props.currentLesson?.title}</h1>
            <div>
                <div className="flex justify-between mb-5">
                    {prevLesson &&
                        <BlueBtn to={`/course/${props.courseId}/lesson/${prevLesson}`} >
                            Prev video
                        </BlueBtn>
                    }
                    {nextLesson &&
                        <BlueBtn to={`/course/${props.courseId}/lesson/${nextLesson}`} >
                            Next video
                        </BlueBtn>
                    }
                </div>
                <ReactPlayer width='100%' height='100%' controls url={`${process.env.REACT_APP_BASE_API_URL}/lessons_videos/${props.currentLesson?.video?.path}`} />
            </div>
            <div className="bg-gray-100 shadow-md p-3 rounded-xl md:w-3/4">
                <div className="flex justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-700">Description</h3>
                    <form onSubmit={handleSubmit}>
                        {watched ?
                            <OrangeBtn loading={loading}>
                                Mark as unwatched
                            </OrangeBtn>
                            :
                            <OrangeBtn loading={loading}>
                                Mark as watched
                            </OrangeBtn>
                        }
                    </form>
                </div>
                <p className="text-gray-700 leading-7">
                    {props.currentLesson?.explanation}
                </p>
            </div>
        </>
    )
}
