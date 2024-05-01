import CommentCard from "./CommentCard";
import OrangeBtn from "../buttons/OrangeBtn";

export default function CommentSection() {
    return (
        <section className="py-8 lg:py-16 border shadow-lg rounded-xl">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-700">Discussion (20)</h2>
                </div>
                <form className="mb-6">
                    <div className="py-2 px-4 mb-4 rounded-lg rounded-t-lg border border-gray-200">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" rows={6} className="px-0 w-full text-sm bg-gray-50 text-gray-900 border-0 focus:ring-0 focus:outline-none" placeholder="Write a comment..." required defaultValue={""} />
                    </div>
                    <OrangeBtn >
                        Post comment
                    </OrangeBtn>
                </form>
                <CommentCard type="comment" />
                <CommentCard type="reply" />
            </div>
        </section>
    )
}