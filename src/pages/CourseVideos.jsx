import CommentSection from "../components/comments/CommentSection";
import SidePanel from "../components/videos/SidePanel";
import Video from "../components/videos/Video";

export default function CourseVideos() {

  return (
    <div id="courseVid" className="flex flex-col md:flex-row max-w-[1400px] mx-auto">
      <SidePanel />
      <div className="w-full m-3 px-10 pb-10 border shadow-lg rounded-lg space-y-10">
        <Video />
        <CommentSection />
      </div >
    </div >
  )
}


