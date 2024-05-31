import SelectField from './SelectField'
import FieldsColumn from './FieldsColumn'
import { FaPhoneAlt } from "react-icons/fa";
import Input from './Input';
import DateInput from './DateInput';




export default function SignupFields() {
    return (
        <div className="md:flex md:w-full md:space-x-4 space-y-4 md:space-y-0">

            <FieldsColumn>
                <Input autoFocus type="text" id="first_name" label="First name" placeholder="Type your first name" required />
                <Input type="text" id="last_name" label="Last name" placeholder="Type your last name" required />
                <Input type="text" id="username" label="User name" placeholder="Type your user name" required />
                <Input type="email" id="email" label="Your email" placeholder="name@mail.com" required />
                <DateInput />
            </FieldsColumn>

            <FieldsColumn>
                <Input
                    type="text" id="phone_num"
                    label={<>Phone number: <span className='opacity-70'>(Optional)</span></>}
                    placeholder="09XXXXXXXX"
                    required={false}
                >
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                        <FaPhoneAlt className="w-4 h-4 text-gray-600" />
                    </div>
                </Input>
                <SelectField />
                <Input
                    type="password"
                    id="password"
                    label="Your password"
                    placeholder="••••••••"
                    required
                />
                <Input
                    type="password"
                    id="password_confirmation"
                    label="Retype your password"
                    placeholder="••••••••"
                    required
                />
            </FieldsColumn>
        </div>
    )
}
