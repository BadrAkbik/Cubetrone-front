import { useEffect, useState } from "react";
import BlueBtn from "../buttons/BlueBtn";
import ReactPlayer from 'react-player'

export default function Video(props) {
    const [lessonsIds, setlessonsIds] = useState([])
    const [prevLesson, setPrevLesson] = useState('')
    const [nextLesson, setNextLesson] = useState('')

    useEffect(() => {
        setlessonsIds(
            props.lessons?.map((item) => {
                return item.id
            })
        )
    }, [props.lessons])

    useEffect(() => {

        const index = lessonsIds?.indexOf(props.currentLesson.id);

        if (index >= 0) {
            setNextLesson(lessonsIds[index + 1])
            setPrevLesson(lessonsIds[index - 1])
        }
        console.log(props.currentLesson?.video?.path)

    }, [lessonsIds, props.currentLesson])

    return (
        <>
            <h1 className="text-4xl font-bold text-gray-700 my-10">{props.currentLesson?.title}</h1>
            <div>
                <div className="flex justify-between mb-5">
                    {prevLesson &&
                        <BlueBtn name="Prev video" courseId={props.courseId} lessonId={prevLesson} />
                    }
                    {nextLesson &&
                        <BlueBtn name="Next video" courseId={props.courseId} lessonId={nextLesson} />
                    }
                </div>
                <ReactPlayer width='100%' height='100%' controls url={`${process.env.REACT_APP_BASE_API_URL}/lessons_videos/${props.currentLesson?.video?.path}`} />
            </div>
            <div className="bg-gray-100 shadow-md p-3 rounded-xl md:w-3/4">
                <h3 className="text-2xl mb-3 font-bold text-gray-700">Description</h3>
                <p className="text-gray-700 leading-7">
                    {props.currentLesson?.explanation}
                </p>
            </div>
        </>
    )
}
