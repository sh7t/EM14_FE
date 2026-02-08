import "./style.css"
import Layout from "../layout/Layout";
import React from "react";
import logo from "../../assets/UI/book-haven.svg"



const SignInPage = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    };
    return (
        <Layout>
            <main className="main">
                <div className="sign-in-card">
                    <div className="sign-in-card-logo">
                        <img src={logo} alt="Book Haven" />
                    </div>
                    <h2>Sign in to Book Haven</h2>
                    <h3>Log in existing account</h3>
                    <form onSubmit={handleSubmit} className="sign-in-form">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="johndoe42@example.com" required/>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter password" pattern="^(?=.*\d)(?=.*[!@#$%^&*(),.?&quot;:{}|<>]).{8,}$" minLength={8} />
                        <input type="submit" value="Sign in"/>
                    </form>
                    <h5 className="no-account">Don't have an account yet? <a href="/sign_up">Register now</a></h5>
                </div>
            </main>
        </Layout>
    );
};

export default SignInPage;