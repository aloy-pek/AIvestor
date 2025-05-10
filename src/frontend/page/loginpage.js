import "../pagecss/common.css";
import "../pagecss/loginpage.css";
import LoginSideBar from "../sidebar/loginsidebar.js";
import LoginForm from "../components/loginform.js";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="login-page">
            <div><LoginSideBar /></div>

            <div className="login-container">
                <div className="login-form">
                    <h1 id="login-text">Login</h1>
                    <div><LoginForm /></div>
                    <p id="register">Don't have an account? <Link to="/registerpage">Register here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
