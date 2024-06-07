import coursePicture from "./../../images/default_course_picture.avif"
import { Link } from "react-router-dom";
import OrangeBtn from "../buttons/OrangeBtn";
import api from "./../../api/Url"
import { useEffect, useState } from "react";

export default function CourseCard(props) {

    const [loading, setLoading] = useState(false);
    const [enrolled, setenrolled] = useState(false);

    useEffect(() => {
        setenrolled(props.enrolledCourses?.includes(props.id))
    }, [props.enrolledCourses])

    const handleEnroll = async (e) => {

        e.preventDefault()
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (!userData) {
            alert('You must be logged in before you enroll to a course');
            e.preventDefault()
            return
        }
        if (!userData.email_verified_at) {
            alert('You must verify your email before enroll to the course');
            return
        }
        setLoading(true);

        const data = new FormData()
        data.append('course_id', props.id)

        try {
            const response = await api.post('/enroll', data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })

            setenrolled(true)
        } catch (err) {

        } finally {
            setLoading(false);
        }
    }
    const handleUnenroll = async (e) => {

        e.preventDefault()
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (!userData.email_verified_at) {
            alert('You must verify your email before unenroll the course');
            return
        }
        setLoading(true)

        const data = new FormData()
        data.append('course_id', props.id)

        try {
            const response = await api.post('/unenroll', data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
            setenrolled(false)

        } catch (err) {

        } finally {
            setLoading(false);
        }
    }

    const handleClick = (e) => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (!userData) {
            alert('You must be logged in before you enroll to a course');
            e.preventDefault()
            return
        }
        if (!userData.email_verified_at) {
            alert('You must verify your email before you attend the course');
            e.preventDefault()
            return
        }
    }
    return (
        <div className={props.class + " max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-md"}>
            {enrolled ?
                <Link to={`/course/${props.id}/lesson/${props.firstLessonId}`} onClick={handleClick}>
                    <img className="rounded-t-lg h-52 w-full" src={props.image ? `${process.env.REACT_APP_BASE_API_URL}/course_pictures/${props.image}` : coursePicture} alt="course picture" />
                </Link>
                :
                <img className="rounded-t-lg h-52 w-full" src={props.image ? `${process.env.REACT_APP_BASE_API_URL}/course_pictures/${props.image}` : coursePicture} alt="course picture" />
            }
            <div className="p-5 flex flex-col justify-between">
                {enrolled ?
                    <Link to={`/course/${props.id}/lesson/${props.firstLessonId}`} onClick={handleClick}>
                        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-700 ">{props.title}</h5>
                    </Link>
                    :
                    <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-700 ">{props.title}</h5>
                }
                <h5 className="mb-2 text-sm font-medium tracking-tight text-gray-500 ">{props.categoryName}</h5>
                <p className="mb-3 font-normal text-gray-700 h-40 overflow-hidden ">{props.brief}</p>
                <div className="w-1/2">
                    {enrolled ?
                        <form onSubmit={handleUnenroll}>
                            <OrangeBtn loading={loading} >
                                Unenroll
                            </OrangeBtn>
                        </form>
                        :
                        <form onSubmit={handleEnroll}>
                            <OrangeBtn loading={loading} >
                                Enroll
                            </OrangeBtn>
                        </form>
                    }

                </div>

            </div>
        </div>
    )
}

