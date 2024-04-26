import landing_1 from "./../../images/landing_1.png"
import landing_2 from "./../../images/landing_2.jpg"
import landing_3 from "./../../images/landing_3.jpg"
import landing_4 from "./../../images/landing_4.jpg"
import landing_7 from "./../../images/landing_7.jpg"
import landing_8 from "./../../images/landing_8.png"
import Courses from "../courses/Courses";
import Teachers from "./Teachers";



export default function Main() {

        return (
            <div className="mx-5">
                <div className="flex flex-col-reverse mx-6 mb-20 md:mx-12 justify-between md:flex-row">
                    <div className="md:mt-20 mt-10 md:w-1/2">
                        <h1 className="font-bold text-4xl lg:text-6xl mb-6 text-gray-800"><span className="block">Learn</span> Programming <span className="text-orange-500">easily</span></h1>
                        <p className="text-gray-500 font-medium text-xl ">Cubetrone's unique e-learning platform offers a fun and engaging way for children to dive into the world of programming</p>
                    </div>
                    <img src={landing_1} alt="welcome" className="p-3 md:size-1/2" />
                </div>

                <div className="flex flex-col md:flex-row items-center md:justify-between my-10">
                    <img src={landing_2} className="p-3 md:size-1/3" alt="landing_2" />
                    <img src={landing_3} className="p-3  md:size-1/3" alt="landing_3" />
                    <img src={landing_4} className="p-3  md:size-1/3" alt="landing_4" />
                </div>

                <Courses />

                <Teachers />

                <div className="flex flex-col-reverse md:flex-row justify-between mx-auto">
                    <img src={landing_8} className="md:size-1/3 p-3" alt="landing_8" />
                    <div className="relative">
                        <div className="absolute p-2 w-3/4 ml-10 mt-7 md:mt-10 lg:top-1/4 lg:ml-20">
                            <h1 className="font-bold text-3xl text-gray-200 lg:text-5xl md:mb-5 mb-3">Family learning </h1>
                            <p className="text-gray-200 font-medium lg:text-lg text-sm">The joy of learning to code is multiplied when shared.
                                Cubetrone encourages family member to explore the basics of programming together... </p>
                        </div>
                        <img src={landing_7} className=" p-3" alt="landing_7" />
                    </div>
                </div>
            </div>

        )

    }
