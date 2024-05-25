import Slider from "react-slick";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeacherCard from "./TeacherCard";
import { useEffect } from "react";
import api from "./../../api/Url"
import { useState } from "react";

export default function Teachers() {

    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await api.get('/teachers').then(response => setTeachers(response.data.data))
            } catch (err) {
                console.log(err)
            }
        }
        fetchTeachers()
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
        slidesToShow: 4,
        slidesToScroll: 3,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        responsive: [
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
            <h1 className="font-bold max-w-48 text-2xl p-3 text-center text-gray-700 border-b border-orange-500 mx-auto mb-7">Teachers</h1>
            <div className="m-10">
                <Slider {...settings} className="lg:m-10 pb-8">
                    {teachers.slice(0, 9).map((item, index) =>
                        <TeacherCard key={index} id={item.id} first_name={item.first_name} image={item.image} last_name={item.last_name} />
                    )}
                </Slider>

            </div>
        </div >
    )
}
