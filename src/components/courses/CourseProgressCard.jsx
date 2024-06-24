import React, { useEffect, useState } from 'react'
import api from "./../../api/Url"
import OrangeBtn from '../buttons/OrangeBtn';
import { Link } from 'react-router-dom';
import coursePicture from "./../../images/default_course_picture.avif"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CourseProgressCard = ({ id, image, first_lesson_id, title, category_name, loading, setLoading }) => {

    const [progress, setprogress] = useState(0)
    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const response = await api.get(`/enrollments/percentageprogress/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access-token')}`
                    }
                })
                setprogress(response.data.data)
            } catch (err) {
            }
        }
        fetchProgress()
    }, [])


    const handleUnenroll = async (e) => {

        e.preventDefault()
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (!userData.email_verified_at) {
            alert('You must verify your email before unenroll the course');
            return
        }
        setLoading(true)

        const data = new FormData()
        data.append('course_id', id)

        try {
            const response = await api.post('/unenroll', data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })

        } catch (err) {

        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/course/${id}/lesson/${first_lesson_id}`}>
                <img className="rounded-t-lg" src={image ? `${process.env.REACT_APP_BASE_API_URL}/course_pictures/${image}` : coursePicture} alt="course picture" />
            </Link>
            <div className="px-2">
                <Link to={`/course/${id}/lesson/${first_lesson_id}`}>
                    <h5 className="text-lg mt-2 text-wrap font-bold tracking-tight text-gray-700">{title}</h5>
                </Link>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">{category_name}</p>
            </div>
            <CircularProgressbar
                className="size-20 mb-3"
                value={progress}
                text={(progress == 100 || progress == 99) ? 'Done' : `${progress}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#3b82f6",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                })}
            />
            <div className="m-2">
                <form onSubmit={handleUnenroll}>
                    <OrangeBtn loading={loading} >
                        Unenroll
                    </OrangeBtn>
                </form>
            </div>
        </div>
    )
}

export default CourseProgressCard