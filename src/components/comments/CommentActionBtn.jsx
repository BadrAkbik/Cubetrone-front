
export default function CommentActionBtn(props) {
    return (
        <li className='hover:bg-gray-100 hover:text-orange-500'>
            <button type="submit" className="block py-2 px-4 ">
                {props.children}
            </button>
        </li>
    )
}
