import { useEffect, useState } from "react"
import api from "./../api/Url"
import CourseCard from "../components/courses/CourseCard"


const AllCourses = () => {

    const [courses, setCourses] = useState([])
    const [categories, setCategories] = useState([])
    const [teachers, setTeachers] = useState([])
    const [enrolledCourses, setenrolledCourses] = useState([])

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
        const fetchCategories = async () => {
            try {
                await api.get('/categories').then(response => setCategories(response.data.data))

            } catch (err) {
                if (!err?.response) {
                    console.log('No Server Response')
                } else {
                    console.log(err.response.data.message)
                }
            }
        }
        const fetchTeachers = async () => {
            try {
                const response = await api.get('/teachers').then(response => setTeachers(response.data.data))
            } catch (err) {
                console.log(err)
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
        fetchTeachers()
        fetchCourse()
        fetchCategories()
    }, [])

    return (
        <main className="min-h-screen container mx-auto px-4 py-6">
            <div className="container mx-auto py-6 border border-gray-200 p-5 rounded-xl mb-5 max-w-[1400px] bg-white shadow-lg">
                <div className="flex items-center mb-6">
                    <input type="text" placeholder="buttons, blog, grid..." className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">Search</button>
                </div>
                <div className="mb-4">
                    <div className="flex flex-col space-x-4 mb-2">
                        <span className="text-gray-600 font-semibold mb-2">Categories:</span>
                        <div className="flex flex-wrap">
                            <button className="px-4 m-1 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">All</button>
                            {categories.map((item, index) => (
                                <button key={index} className="px-4 m-1 py-2 border border-blue-500 text-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">{item.name}</button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-x-4 mb-2">
                    <span className="text-gray-600 font-semibold mb-2">Teachers:</span>
                    <div className="flex flex-wrap">
                        <span className="px-2 m-1 py-1 bg-orange-500 text-white rounded-md">All</span>
                        {teachers.slice(0, 9).map((item, index) =>
                            <button key={index} className="px-2 m-1 py-1 text-gray-600">{item.first_name} {item.last_name}</button>
                        )}
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <h3 className="text-2xl font-bold mb-6">Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((item, index) =>
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
        </main>
    )
}

export default AllCourses