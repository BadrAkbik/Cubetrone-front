import { NavLink } from 'react-router-dom';


export default function NavItem() {
    return (
        <>
            <li>
                <NavLink key={this.props.index} to={this.props.link} className={({ isActive }) => (isActive ? " md:text-orange-500 md:bg-transparent text-white bg-orange-500" : "text-gray-900 hover:text-orange-500") + " block py-2 px-3 rounded md:bg-transparent md:p-0"}>{this.props.name}</NavLink>
            </li>
        </>
    )
}

