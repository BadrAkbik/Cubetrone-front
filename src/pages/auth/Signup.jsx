import { useEffect, useState } from "react"
import OrangeBtn from "../../components/buttons/OrangeBtn"
import CheckBox from "../../components/inputs/CheckBox"
import SignupFields from "../../components/inputs/SignupFields"
import api from "./../../api/Url"
import { validateInputs } from "../../functions/validate"
import { useNavigate } from 'react-router-dom';
import UserDataContext from "../../context/UserDataContext"
import ErrMessage from "../../components/ErrMessage"


export default function Signup() {

    useEffect(() => {
        if (localStorage.getItem('access-token')) {
            navigate('/')
        }
    }, [])

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true);

        const data = new FormData(e.target)

        const validationErrors = validateInputs(data, 'signup');

        setErrors(validationErrors.errors)


        try {
            if (validationErrors.hasErrors) {
                setErrMsg("Invalid Entry")
                setLoading(false)
                return
            }
            const response = await api.post('/register', data)

            setSuccess(true)
            localStorage.setItem('access-token', response.data);

            const userData = await api.get('/user',
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('access-token')}` }
                })


            localStorage.setItem('userData', JSON.stringify(userData.data.data));
            setTimeout(() => {
                navigate('/email-verification', { state: data.get('email') })
            }, 2000);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else {
                console.log(err.response.data)
                setErrMsg(err.response.data.message)
            }
        } finally {
            setLoading(false);
        }

    }

    return (
        <>
            <div className="flex justify-center items-center mt-20">
                <div className=" w-full max-w-sm md:max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <h5 className="text-xl font-medium text-gray-700">Create your account</h5>
                        <ErrMessage errMsg={errMsg} />
                        {success && <p
                            className="bg-blue-600 font-meduim p-3 mb-3 rounded-lg max-w-fit text-white text-sm"
                            aria-live="assertive">You have successfully registered to our site, please verify your email
                        </p>}

                        <UserDataContext.Provider value={{ errors, setErrMsg, setErrors, errMsg }}>
                            <SignupFields />
                        </UserDataContext.Provider>
                        {/*                         <div className="flex items-start">
                            <CheckBox />
                        </div> */}
                        <div className="flex justify-center">
                            <OrangeBtn class="w-1/2" loading={loading} >
                                Create new account
                            </OrangeBtn>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}