import { useEffect, useState } from "react"
import api from "./../api/Url"
import CourseCard from "../components/courses/CourseCard"
import CoursesFilterBox from "../components/courses/CoursesFilterBox"



const AllCourses = () => {

    const [courses, setCourses] = useState([])
    const [enrolledCourses, setenrolledCourses] = useState([])
    const [query, setQuery] = useState("")

    const searchKeys = ['title', 'teacher_username', 'category_name']
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                await api.get('/courses').then(response => setCourses(response.data.data))

            } catch (err) {
                if (!err?.response) {
                    console.log('No Server Response')
                } else {
                    console.log(err.response.data.message)
                }
            }
        }
        const fetchEnrollments = async () => {
            try {
                const response = await api.get('/enrollments', {
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
        fetchCourse()
    }, [])

    const search = (data) => {
        return data.filter(
            item => searchKeys.some((key) => item[key]?.toLowerCase().includes(query))
        )
    }

    return (
        <main className="min-h-screen container mx-auto px-4 py-6">
            <CoursesFilterBox query={query} setQuery={setQuery} />
            <div className="max-w-screen-xl mx-auto">
                <h3 className="text-2xl font-bold mb-6">Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {search(courses).map((item, index) =>
                        <CourseCard
                            enrolledCourses={enrolledCourses}
                            key={index}
                            categoryName={item.category_name}
                            title={item.title}
                            image={item.image}
                            brief={item.brief}
                            id={item.id}
                            firstLessonId={item.first_lesson_id}
                            class="h-[520px]"
                        />
                    )}
                </div>
            </div>
        </main >
    )
}

export default AllCourses