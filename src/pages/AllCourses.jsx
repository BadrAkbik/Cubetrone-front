import { useEffect, useState } from "react"
import api from "./../api/Url"
import CourseCard from "../components/courses/CourseCard"


const AllCourses = () => {

    const [courses, setCourses] = useState([])

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
        fetchCourse()
    }, [])

    return (
        <div className="min-h-screen max-w-screen-xl mx-auto">
            <main className="container mx-auto px-4 py-6">
                <section className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                    <div className="flex">
                        <div className="w-1/2">
                            <img src="https://via.placeholder.com/600x400" alt="Hero" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-1/2 p-6 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4">Robot Creations</h2>
                            <p className="text-gray-700 mb-4">Creative, Educational, Engaging</p>
                            <p className="text-gray-700 mb-6">Exciting robot programming course for kids, featuring hands-on projects with electronic cubes. Join the adventure and learn to code while building your own robots!</p>
                            <div>
                                <button className="bg-orange-500 text-white py-2 px-4 rounded mr-4">Join now</button>
                                <button className="bg-gray-500 text-white py-2 px-4 rounded">Preview</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h3 className="text-2xl font-bold mb-4">Courses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {courses.map((item, index) => (
                            <CourseCard
                                key={index}
                                title={item.title}
                                img={item.img}
                                brief={item.brief}
                                id={item.id}
                                firstLessonId={item.first_lesson_id}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AllCourses