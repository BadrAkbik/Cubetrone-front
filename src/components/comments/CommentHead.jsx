
import { format } from 'date-fns';
export default function CommentHead(props) {
    return (
        <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                <img className="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt={props.userName} />
                {props.userName}
            </p>
            {props.createAt &&
                <p className="text-sm text-gray-600">{format(props.createdAt, 'dd MMMM yyyy, h:mm a')}</p>
            }
        </div>
    )
}
