import { Link, useLocation, useNavigate } from "react-router-dom";
import FieldsColumn from "../../components/inputs/FieldsColumn";
import Input from "../../components/inputs/Input";
import { useEffect, useState } from "react"
import UserDataContext from "../../context/UserDataContext";
import OrangeBtn from "../../components/buttons/OrangeBtn";
import api from "./../../api/Url"
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { validateInputs } from "../../functions/validate"
import ErrMessage from "../../components/ErrMessage";




const EmailVerification = (props) => {
    const location = useLocation();
    const email = location.state;
    const [errors, setErrors] = useState({})

    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [codeSent, setCodeSent] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('access-token')) {
            navigate('/')
        }
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true);

        const data = new FormData(e.target)

        const validationErrors = validateInputs(data, 'emailVerification');

        setErrors(validationErrors.errors)

        if (validationErrors.hasErrors) {
            setLoading(false)
            return
        }

        try {
            const response = await api.post('/verify-email', data,
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('access-token')}` }
                })
            setSuccess(true)

            const userData = await api.get('/user',
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('access-token')}` }
                })


            localStorage.setItem('userData', JSON.stringify(userData.data.data));

            setTimeout(() => {
                navigate('/')
            }, 2000);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else {
                setErrMsg(err.response.data.message)
            }
        } finally {
            setLoading(false);
        }

    }

    const handleResend = async (e) => {

        setLoading(true);

        try {
            setErrors({})
            setErrMsg('')
            const response = await api.post('/email/verification-notification', null,
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('access-token')}` }
                })

            setCodeSent(true)
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else {
                setErrMsg(err.response.data.message)
            }
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        setTimeout(() => {
            setCodeSent(false)
        }, 5000);
    }, [codeSent])

    return (
        <>
            <div className="flex justify-center items-center mt-20">
                <div className=" w-1/3 max-w-sm md:max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <h5 className="text-md font-medium text-gray-700">Please enter the code that has been sent to your email</h5>

                        <ErrMessage errMsg={errMsg} />

                        {success && <p
                            className="bg-blue-600 font-meduim p-3 mb-3 rounded-lg max-w-fit text-white text-sm"
                            aria-live="assertive">You have successfully verified your email, enjoy using our website
                        </p>}
                        {codeSent &&
                            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                                The code has been sent to your email and it is valid for one hour.
                            </Alert>
                        }

                        <UserDataContext.Provider value={{ errors, setErrMsg, setErrors }}>
                            <FieldsColumn>
                                <Input autoFocus type="text" id="code" label="Verification code" placeholder="Enter 6 digit code..." />
                            </FieldsColumn>
                        </UserDataContext.Provider>
                        <div className="text-sm font-medium text-gray-500">
                            Didn't get the code? <button type="button" onClick={handleResend} className="text-orange-500 hover:underline">Resend it</button>
                        </div>
                        <div className="flex justify-center">
                            <OrangeBtn class="w-1/2" loading={loading} >
                                Verify Email
                            </OrangeBtn>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default EmailVerification