import { useEffect, useState } from 'react'
import VideoCard from './VideoCard'

export default function SidePanel(props) {
    return (
        <aside className="md:w-[370px] h-fit border rounded-lg m-3 p-4 shadow-lg">
            <div className="">
                <ul className="space-y-2 font-medium text-gray-700">
                    {props.lessons && props.lessons.map((item, index) =>
                        <VideoCard key={index} title={item.title} course_id={item.course_id} id={item.id}/>
                    )}
                </ul>
            </div>
        </aside>
    )
}

