import Slider from "react-slick";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCard from "./CourseCard";
import { useEffect } from "react";
import api from "./../../api/Url"
import { useState } from "react";


export default function Courses() {

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


    const PreviousBtn = (props) => {
        const { className, style, onClick } = props;
        return (
            <NavigateBeforeIcon onClick={onClick} className={className} style={{ color: 'black', fontSize: '30px' }} />
        );

    };
    const NextBtn = (props) => {
        const { className, style, onClick } = props;
        return (
            <NavigateNextIcon onClick={onClick} className={className} style={{ color: 'black', fontSize: '30px' }} />
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div>
            <h1 className="font-bold max-w-60 text-2xl p-3 text-center text-gray-700 border-b border-orange-500 mx-auto mb-7">Feature courses</h1>
            <div className="m-10">
                <Slider {...settings} className="lg:m-10 pb-8">
                    {courses.slice(0, 9).map((item, index) =>
                        <CourseCard
                            key={index}
                            title={item.title}
                            img={item.img}
                            description={item.description}
                            id={item.id}
                            firstLessonId={item.first_lesson_id} 
                            />
                    )}
                </Slider>
            </div>
        </div >
    )
}

