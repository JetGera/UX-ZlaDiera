import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Auth.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        login: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="auth-form-container">
            <h2>Prihlasit' sa</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <div className="auth-text-group">
                    <input
                        type="text"
                        name="login"
                        placeholder="Login"
                        value={formData.login}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="auth-text-group">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Heslo"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <i className={`eye-icon ${showPassword ? 'visible' : ''}`}></i>
                    </button>
                </div>
                <Link to="/profil">
                    <button type="submit" className="submit-button">
                        Podtvrdit'
                    </button>
                </Link>

            </form>
            <p className="auth-switch">
                Ak nemate ucet, mozete sa{' '}
                <Link to="/register" className="auth-link">
                    zaregistrovat'
                </Link>
            </p>
        </div>
    );
};

export default Login;

