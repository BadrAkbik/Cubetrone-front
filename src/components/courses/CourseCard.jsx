import card_1 from "../../images/card_1.jpg";
import BlueBtn from "../buttons/BlueBtn";
import { FaLongArrowAltRight } from "react-icons/fa";



export default function CourseCard(props) {
    return (
        <div className={props.class + " max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow"}>
            <a href="#">
                <img className="rounded-t-lg" src={card_1} alt="teacher picture" />
            </a>
            <div className="p-5 flex flex-col justify-between">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">{props.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 h-40">{props.brief}</p>
                <div className="w-1/2">
                    {props.hasButton &&

                        <BlueBtn name="Read more" courseId={props.id} lessonId={props.firstLessonId}>
                            <FaLongArrowAltRight className="w-3.5 h-3.5 ms-2" />
                        </BlueBtn>
                    }
                </div>

            </div>
        </div>
    )
}

