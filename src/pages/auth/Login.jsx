import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateLoginInputs } from "../../functions/validate";
import api from "./../../api/Url"
import Input from "../../components/inputs/Input";
import UserDataContext from "../../context/UserDataContext"
import OrangeBtn from "../../components/buttons/OrangeBtn";
import CheckBox from "../../components/inputs/CheckBox";




export default function Login() {

    useEffect(() => {
        if (localStorage.getItem('access-token')) {
            navigate('/')
        }
    }, [])


    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true);

        const data = new FormData(e.target)

        const validationErrors = validateLoginInputs(data);

        setErrors(validationErrors.errors)

        if (validationErrors.hasErrors) {
            setErrMsg("Invalid Entry")
            return
        }
        try {
            const response = await api.post('/login', data)
            localStorage.setItem('access-token', response.data);
            const userData = await api.get('/user',
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('access-token')}` }
                })
            localStorage.setItem('userData', JSON.stringify(userData.data.data));
            console.log(userData.data.data)
            if (userData) {
                navigate('/')
            }
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

    return (
        <div id="login">
            <div className="flex justify-center items-center mt-20">
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <h5 className="text-xl font-medium text-gray-700">Sign in to your account</h5>

                        {errMsg && <p
                            className="bg-red-600 font-meduim p-3 mb-3 rounded-lg max-w-fit text-white text-sm"
                            aria-live="assertive">{errMsg}
                        </p>}

                        <UserDataContext.Provider value={{ errors, setErrMsg, setErrors }}>
                            <Input type="email" id="email" label="Your email" placeholder="name@mail.com" required />
                            <Input type="password" id="password" label="Your password" placeholder="••••••••" required />
                        </UserDataContext.Provider>

                        <div className="flex items-start">
                            <CheckBox />
                            <Link to="/forgot-password" className="ms-auto text-sm text-orange-500 hover:underline">Lost Password?</Link>
                        </div>
                        <OrangeBtn class="w-full" loading={loading} >
                            LogIn
                        </OrangeBtn>
                        <div className="text-sm font-medium text-gray-500">
                            Not registered? <Link to="/signup" className="text-orange-500 hover:underline">Create account </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}