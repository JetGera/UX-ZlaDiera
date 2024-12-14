import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Auth.css';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        birthDate: '',
        phone: '',
        address: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Registration attempt:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="reg-form-container">
            <h2>Registracia</h2>
            <form onSubmit={handleSubmit} className="reg-form">
                <div className="auth-text-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Meno, Priezvisko*"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="auth-text-group">
                    <input
                        type="date"
                        name="birthDate"
                        placeholder="Datum narodenia"
                        value={formData.birthDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="auth-text-group">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Tel. Cislo*"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="auth-text-group password-group">
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
                <div className="auth-text-group">
                    <input
                        type="text"
                        name="address"
                        placeholder="Adresa"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="auth-text-group password-group">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Podtvrdit' heslo"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        <i className={`eye-icon ${showConfirmPassword ? 'visible' : ''}`}></i>
                    </button>
                </div>
            </form>
            <Link to="/profil">
                <button type="submit" className="submit-button">
                    Podtvrdit'
                </button>
            </Link>
            <p className="auth-switch">
                Ak mate ucet, mozete sa{' '}
                <Link to="/login" className="auth-link">
                    prihlasit'
                </Link>
            </p>
        </div>
    );
};

export default Register;

