import { useEffect, useState } from "react";
import api from "./../../api/Url"
import CourseProgressCard from "../courses/CourseProgressCard";
const EnrolledCourses = () => {

    const [enrolledCourses, setenrolledCourses] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchEnrollments = async () => {
            try {
                const response = await api.get('/enrollments/courses', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access-token')}`
                    }
                }).then(response => setenrolledCourses(response.data.data))
            } catch (err) {
            }
        }
        if (localStorage.getItem('access-token')) {
            fetchEnrollments()
        }
    }, [loading])

    return (
        <>
            <h4 className="text-xl text-gray-900 font-bold mb-5">Enrolled courses</h4>
            <div className="grid grid-cols-4 gap-4 w-3/4">
                {enrolledCourses.map((item, index) =>
                    <CourseProgressCard
                        key={index}
                        id={item.id}
                        image={item.image}
                        first_lesson_id={item.first_lesson_id}
                        title={item.title}
                        category_name={item.category_name}
                        progress={item.progress}
                        loading={loading}
                        setLoading={setLoading}
                    />
                )}
            </div>

        </>
    )
}

export default EnrolledCourses