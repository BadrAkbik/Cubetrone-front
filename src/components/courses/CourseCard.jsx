import card_1 from "../../images/card_1.jpg";
import BlueBtn from "../buttons/BlueBtn";


export default function CourseCard() {
    return (
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img className="rounded-t-lg" src={card_1} alt="ca" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <BlueBtn name="Read more">
                    <svg className="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </BlueBtn>

            </div>
        </div>
    )
}

