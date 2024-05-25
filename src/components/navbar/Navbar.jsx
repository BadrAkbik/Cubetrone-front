import { useEffect, useState } from 'react';
import logo from "./../../images/logo.png"
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LuMenu } from "react-icons/lu";
import api from "./../../api/Url"
import { Dropdown } from "flowbite-react";




export default function Navbar() {

    const [navItem, setNavItem] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {

        if (localStorage.getItem('access-token') && localStorage.getItem('userData')) {
            
            const userData = JSON.parse(localStorage.getItem('userData'))

            setNavItem([
                { name: "Home", link: "/" },
                { name: "Courses", link: "/courses" },
                {
                    name: `${userData.first_name} ${userData.last_name}`,
                    profile: true,
                    link: `profile/${userData.id}`,
                    role: userData.role,
                    verified: userData.email_verified_at,
                    email: userData.email
                },
            ]);

        } else {
            setNavItem([
                { name: "Home", link: "/" },
                { name: "Courses", link: "/courses" },
                { name: "Login", link: "/login" },
                { name: "Signup", link: "/signup" },
            ]);
        }

    }, [localStorage.getItem('userData'), localStorage.getItem('access-token')])

    const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false)

    const [rotate, setRotate] = useState(false);

    const [revRotate, setRevRotate] = useState(false);

    const toggleNavBar = () => {
        setmobileDrawerOpen(!mobileDrawerOpen)
        setRotate(!rotate)
        setRevRotate(!revRotate)
    }

    const handleLogout = async () => {
        try {
            const response = await api.delete('/logout', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access-token')}`
                }
            })
            localStorage.removeItem('access-token')
            localStorage.removeItem('userData')
            navigate(0)
        } catch (err) {

        }
    }

    return (
        <>
            <nav className='mb-7 max-w-[1400px] mx-auto'>
                <div className="flex flex-wrap items-center justify-between mx-auto p-5">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="h-8" alt="Cubetrone Logo" />
                        <span className="self-center text-gray-700 text-2xl ml-3 font-semibold whitespace-nowrap">Cubetrone</span>
                    </Link>
                    <button type="button" onClick={toggleNavBar} className={(rotate ? "rotate " : "") + (!revRotate ? "rev-rotate" : "") + " inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"}>
                        <LuMenu />
                    </button>
                    <div className="w-full md:block  md:w-auto">

                        <ul className={(mobileDrawerOpen ? "flex flex-col" : "hidden") + " font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex md:flex-row md:space-x-8 md:mt-0 md:border-0 "}>

                            {navItem.map((item, index) =>

                                item.profile ?
                                    <div key={index} className='text-gray-700 hover:text-orange-500 block py-2 px-3 rounded md:bg-transparent md:p-0'>
                                        <Dropdown label={item.name} inline>

                                            <Dropdown.Header className='border-b border-gray-200 text-blue-500'>
                                                <span className="block truncate font-semibold capitalize">{item.role}</span>
                                            </Dropdown.Header>

                                            {(item.role === 'teacher' || item.role === 'admin') &&
                                                <Dropdown.Item className='hover:text-orange-500' as={NavLink} to='http://127.0.0.1:8000/admin' >Dashboard</Dropdown.Item>
                                            }

                                            {!item.verified &&
                                                <Dropdown.Item>
                                                    <NavLink
                                                        to={{ pathname: '/email-verification', state: item.email }}
                                                        className={
                                                            ({ isActive }) =>
                                                                (isActive ? " text-orange-500" : "text-gray-700 hover:text-orange-500") + " block rounded bg-transparent md:p-0"
                                                        }
                                                    >
                                                        Verify your email
                                                    </NavLink>

                                                </Dropdown.Item>
                                            }

                                            <Dropdown.Item>
                                                <NavLink
                                                    to={item.link}
                                                    className={
                                                        ({ isActive }) =>
                                                            (isActive ? " text-orange-500" : "text-gray-700 hover:text-orange-500") + " block rounded bg-transparent md:p-0"
                                                    }
                                                >
                                                    My Profile
                                                </NavLink>
                                            </Dropdown.Item>
                                            
                                            <Dropdown.Item className='hover:text-orange-500' as="button" onClick={handleLogout}>Sign out</Dropdown.Item>
                                        </Dropdown>
                                    </div>
                                    :
                                    <NavLink
                                        key={index}
                                        to={item.link}
                                        className={({ isActive }) => (isActive ? " md:text-orange-500 md:bg-transparent text-white bg-orange-500" : "text-gray-700 hover:text-orange-500") + " block py-2 px-3 rounded md:bg-transparent md:p-0"}
                                    >
                                        {item.name}
                                    </NavLink>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />


        </>
    )
}
