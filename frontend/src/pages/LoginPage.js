import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await AuthService.login(email, password);
            navigate('/dashboard'); // Redirect to employees page
        } catch (error) {
            alert('Invalid credentials.');
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                background: 'linear-gradient(135deg, #0077b6, #0096c7)',
            }}
        >
            <div
                className="card p-5 shadow-lg"
                style={{
                    width: '400px',
                    borderRadius: '12px',
                    border: 'none',
                    backgroundColor: '#ffffff',
                }}
            >
                <h2
                    className="text-center mb-4"
                    style={{
                        fontWeight: '700',
                        color: '#023e8a',
                    }}
                >
                    Login
                </h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label
                            className="form-label"
                            style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#495057',
                            }}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            style={{
                                border: '1px solid #adb5bd',
                                borderRadius: '10px',
                                padding: '12px 15px',
                                fontSize: '15px',
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="form-label"
                            style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#495057',
                            }}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            style={{
                                border: '1px solid #adb5bd',
                                borderRadius: '10px',
                                padding: '12px 15px',
                                fontSize: '15px',
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn w-100"
                        style={{
                            backgroundColor: '#0077b6',
                            color: '#ffffff',
                            fontWeight: '600',
                            border: 'none',
                            borderRadius: '10px',
                            fontSize: '16px',
                            padding: '10px',
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
