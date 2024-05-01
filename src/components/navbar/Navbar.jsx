import { useState } from 'react';
import logo from "./../../images/logo.png"
import { Link, NavLink, Outlet } from 'react-router-dom';
import { LuMenu } from "react-icons/lu";


export default function Navbar() {
    const accountName = { name: "Badr akbik", link: "/profile/12" }

    const [logged, setlogged] = useState(false)


    const navItem = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
    ]

    if (logged) {
        navItem.push(accountName)
    } else {
        navItem.push({ name: "Login", link: "/login" }, { name: "Signup", link: "signup" })
    }

    const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false)

    const [rotate, setRotate] = useState(false);

    const [revRotate, setRevRotate] = useState(false);

    const toggleNavBar = () => {
        setmobileDrawerOpen(!mobileDrawerOpen)
        setRotate(!rotate)
        setRevRotate(!revRotate)
    }

    return (
        <>
            <nav className='mb-7 max-w-[1400px] mx-auto'>
                <div className="flex flex-wrap items-center justify-between mx-auto p-5">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="h-8" alt="Cubtrone Logo" />
                        <span className="self-center text-2xl ml-3 font-semibold whitespace-nowrap">Cubtrone</span>
                    </Link>
                    <button type="button" onClick={toggleNavBar} className={(rotate ? "rotate " : "") + (!revRotate ? "rev-rotate" : "") + " inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"}>
                        <LuMenu />
                    </button>
                    <div className="w-full md:block  md:w-auto">
                        <ul className={(mobileDrawerOpen ? "flex flex-col" : "hidden") + " font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex md:flex-row md:space-x-8 md:mt-0 md:border-0 "}>
                            {navItem.map((item, index) => 
                                <NavLink key={index} to={item.link} className={({ isActive }) => (isActive ? " md:text-orange-500 md:bg-transparent text-white bg-orange-500" : "text-gray-900 hover:text-orange-500") + " block py-2 px-3 rounded md:bg-transparent md:p-0"}>{item.name}</NavLink>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
