import "../pagecss/common.css";
import "../pagecss/registerpage.css";
import LoginSideBar from "../sidebar/loginsidebar.js";
import RegisterForm from "../components/registerform.js";
import { Link } from "react-router-dom";

function RegisterPage() {
    return (
        <div className="register-page">
            <div><LoginSideBar/></div>
            
            <div className="register-container">
                <div className="register-form">
                    <h1 id="register-text">Register</h1>
                    <div><RegisterForm/></div>
                    <p id="register">Already have an account? <Link to="/loginpage">Login here</Link> </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;