import "./style.css"
import Layout from "../layout/Layout";
import React from "react";
import { FaUserPlus } from "react-icons/fa";



const SignUpPage = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    };
    return (
        <Layout>
            <main className="main">
                <div className="sign-up-card">
                    <div className="user-plus">
                        <FaUserPlus size={40} color="#FFFFFF"/>
                    </div>
                    <h2>Create an account</h2>
                    <h3>Enter your information to get started</h3>
                    <form onSubmit={handleSubmit} className="sign-up-form">
                        <label htmlFor="full-name">Full name:</label>
                        <input type="text" id="full-name" name="full-name" placeholder="John Doe" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="johndoe42@example.com" required/>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter password" pattern="^(?=.*\d)(?=.*[!@#$%^&*(),.?&quot;:{}|<>]).{8,}$" required />
                        <input type="submit" value="Create account"/>
                    </form>
                    <h5 className="existing-account">Already have an account? <a href="/signin">Sign in</a></h5>
                </div>
            </main>
        </Layout>
    );
};

export default SignUpPage;