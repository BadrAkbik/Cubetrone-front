import CommentSection from "../components/comments/CommentSection";
import SidePanel from "../components/videos/SidePanel";
import Video from "../components/videos/Video";
import { useEffect, useState } from "react";
import api from "./../api/Url"
import { useLocation, useNavigate, useParams } from "react-router-dom";


export default function CourseVideos() {

  const { courseId, lessonId } = useParams();
  const [course, setCourse] = useState({})
  const [errMsg, setErrMsg] = useState('')
  const [currentLesson, setCurrentLesson] = useState({})
  const [enrolledCourses, setenrolledCourses] = useState([])
  const navigate = useNavigate();


  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {

    if (!localStorage.getItem('access-token')) {
      navigate('/unauthorized')
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
    fetchEnrollments()
  }, [])



  useEffect(() => {
    const fetchCourseVideo = async () => {
      try {
        const response = await api.get(`/courses/${courseId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`
          }
        })
        setCourse(response.data.data)
      } catch (err) {
        if (!err?.response) {
          setErrMsg('No Server Response')
        } else {
          setErrMsg(err.response.data.message)
        }
      }
    }

    fetchCourseVideo()
  }, [])

  useEffect(() => {
    setCurrentLesson(
      course.lessons?.data.find(lesson => lesson.id == lessonId)
    )
  }, [course, lessonId])


  return (
    <div id="courseVid" className="flex flex-col md:flex-row max-w-[1400px] mx-auto">
      <SidePanel lessons={course.lessons?.data} />
      <div className="w-full m-3 px-10 pb-10 border shadow-lg rounded-lg space-y-10">
        <Video lessons={course.lessons?.data} currentLesson={currentLesson} courseId={courseId} />
        <CommentSection lessonId={lessonId} />
      </div >
    </div >
  )
}


