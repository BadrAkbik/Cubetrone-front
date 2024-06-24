import React, { useEffect, useState } from 'react'
import api from "./../../api/Url"

const CoursesFilterBox = (props) => {
    const [teachers, setTeachers] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedTeacher, setSelectedTeacher] = useState('all');
    const [inputValue, setInputValue] = useState("");


    const handleCategorySearch = (data) => {
        if (data === "all") {
            props.setQuery('')
        } else {
            props.setQuery(data)
        }
        setSelectedCategory(data);
        setSelectedTeacher('all');
        setInputValue('')
    }

    const handleTeacherSearch = (data) => {
        if (data === "all") {
            props.setQuery('')
        } else {
            props.setQuery(data)
        }
        setSelectedTeacher(data);
        setSelectedCategory('all');
        setInputValue('')

    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        props.setQuery(e.target.value)
        setSelectedTeacher('all');
        setSelectedCategory('all');
    }



    useEffect(() => {
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
        fetchTeachers()
        fetchCategories()
    }, [])

    return (
        <div className="container mx-auto py-6 border border-gray-200 p-5 rounded-xl mb-5 max-w-[1400px] bg-white shadow-lg">
            <div className="flex items-center mb-6">
                <input value={inputValue} type="text" placeholder="Course title..." className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleInputChange} />
            </div>
            <div className="mb-4">
                <div className="flex flex-col space-x-4 mb-2">
                    <span className="text-gray-600 font-semibold mb-2">Categories:</span>
                    <div className="flex flex-wrap">
                        <button
                            onClick={() => handleCategorySearch('all')}
                            className={`px-4 m-1 py-2 border rounded-md focus:outline-none focus:ring-2 ${selectedCategory === "all"
                                ? 'bg-blue-500 text-white border-blue-500'
                                : 'border-blue-500 text-blue-500'
                                }`}>All</button>
                        {categories.map((item, index) => (
                            <button key={index} onClick={() => handleCategorySearch(item.name)}
                                className={`px-4 m-1 py-2 border rounded-md focus:outline-none focus:ring-2 ${selectedCategory === item.name
                                    ? 'bg-blue-500 text-white border-blue-500'
                                    : 'border-blue-500 text-blue-500'
                                    }`}>{item.name}</button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-x-4 mb-2">
                <span className="text-gray-600 font-semibold mb-2">Teachers:</span>
                <div className="flex flex-wrap">
                    <button onClick={() => handleTeacherSearch('all')}
                        className={`px-2 m-1 py-1 text-gray-600 ${selectedTeacher === 'all' ? ' bg-orange-500 text-white rounded-md' : ''
                            }`}>All</button>
                    {teachers.slice(0, 9).map((item, index) =>
                        <button key={index} onClick={() => handleTeacherSearch(item.username)}
                            className={`px-2 m-1 py-1 text-gray-600 ${selectedTeacher === item.username ? ' bg-orange-500 text-white rounded-md' : ''
                                }`}>{item.first_name} {item.last_name}</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CoursesFilterBox