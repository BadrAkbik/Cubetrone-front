import VideoCard from './VideoCard'

export default function SidePanel() {
    const videoCard = [
        { name: "First video" },
        { name: "Second Vid" },
        { name: "Second Vid" },
    ]
    
    return (
        <aside className="md:w-[370px] h-fit border rounded-lg m-3 p-4 shadow-lg">
            <div className="">
                <ul className="space-y-2 font-medium text-gray-700">
                    {videoCard.map((item, index) =>
                        <VideoCard key={index} name={item.name} />
                    )}
                </ul>
            </div>
        </aside>
    )
}

