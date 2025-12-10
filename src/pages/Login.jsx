import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/loginForm.jsx";

const Login = () => {
    const navigate = useNavigate();
    const hrEmails = ["hradmin@admin.com"];
    const hrPasswords = ["hradmin123"];
    const employeeEmails = ["test@company.com"];
    const employeePasswords = ["test123"];

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value

        });
        console.log(loginData)
            ;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (hrEmails.includes(loginData.email)) {
            const passIndex = hrEmails.indexOf(loginData.email)
            if (loginData.password === hrPasswords[passIndex]) {
                localStorage.setItem('role', 'hr');
                navigate('/HR-Portal');
            }
        }
        else
        if (employeeEmails.includes(loginData.email)) {
            const passIndex = employeeEmails.indexOf(loginData.email);
            if (loginData.password === employeePasswords[passIndex]) {
                localStorage.setItem('role', 'employee');
                navigate('/Employee-Portal');
            }
        }
        else {
            alert("Invalid email or password");
        }

    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
            <LoginForm loginData={loginData} handleChange={handleChange} handleLogin={handleLogin} />
        </div>
    );
}
export default Login;