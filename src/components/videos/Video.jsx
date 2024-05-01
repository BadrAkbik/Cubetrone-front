import BlueBtn from "../buttons/BlueBtn";

export default function Video() {
    const videoInfo = {
        title: "Video title",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

    return (
        <>
            <h1 className="text-4xl font-bold text-gray-700 my-10">{videoInfo.title}</h1>
            <div>
                <div className="flex justify-between mb-5">
                    <BlueBtn name="Prev video" />
                    <BlueBtn name="Next video" />
                </div>
                <video className="w-full h-auto max-w-full rounded-xl" controls>
                    <source src={require("../../mp4/hello.mp4")} type="video/mp4" />
                </video>
            </div>
            <div className="bg-gray-100 shadow-md p-3 rounded-xl md:w-3/4">
                <h3 className="text-2xl mb-3 font-bold text-gray-700">Description</h3>
                <p className="text-gray-700 leading-7">
                    {videoInfo.desc}
                </p>
            </div>
        </>
    )
}
