import { useState } from "react";
import CommentActionBtn from "./CommentActionBtn";
import { HiDotsHorizontal } from "react-icons/hi";

export default function CommentAction() {
    const [drpoDown, setdrpoDown] = useState(false)


    return (
        <div className="relative">
            <button onClick={() => { setdrpoDown(!drpoDown) }} className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50" type="button">
                <HiDotsHorizontal className="text-lg" />
                <span className="sr-only">Comment settings</span>
            </button>
            <div className={(drpoDown ? "absolute" : "hidden") + " z-10 top-9 right-0 w-36 rounded-lg bg-gray-50 shadow-lg"}>
                <ul className="py-1 text-sm text-gray-700">
                    <CommentActionBtn >Edit</CommentActionBtn>
                    <CommentActionBtn >Remove</CommentActionBtn>
                </ul>
            </div>
        </div>
    )
}
