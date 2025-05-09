import React, { useState } from 'react';
import "../componentscss/formcss/loginform.css";

function LoginForm() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents empty submission of form
        console.log('Login Details:', formData); //to replace with actual login logic
    };

    return (
        <form className="entryfields" onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;