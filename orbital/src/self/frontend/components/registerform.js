import React, { useState } from 'react';
import "../componentscss/formcss/registerform.css";

function RegisterForm() {
    const [formData, setFormData] = useState(
        { username: "", email: "", password: "", confirmPassword: "" }
    );
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents empty submission of form
        console.log('Register Details:', formData); //to replace with actual register logic
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
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required />

            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required />    
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;