import "./style.css"
import Layout from "../layout/Layout";
import React from "react";
import logo from "../../assets/UI/book-haven.svg"
import {isEmpty, loginUser} from "../../services/localStorageHelper.ts";
import {useNavigate} from "react-router";


const SignInPage = () => {
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegexp = /^(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

        if (isEmpty(email) || !emailRegexp.test(email)) {
            alert(`Entered "${email}" is not valid. Please enter a valid email address!`);
            return;
        }
        if (isEmpty(password) || !passwordRegexp.test(password)) {
            alert(`Entered password must contain at least 8 characters, one number, and one special character!`);
            return;
        }

        const isLogIn = loginUser(email, password);
        console.log(isLogIn);
        if (!isLogIn) {
            alert("Invalid email or password!");
            return;
        }

        navigate("/books");
    };
    return (
        <Layout>
            <main className="main">
                <div className="sign-in-card">
                    <div className="sign-in-card-logo">
                        <img src={logo} alt="Book Haven"/>
                    </div>
                    <h2>Sign in to Book Haven</h2>
                    <h3>Log in existing account</h3>
                    <form onSubmit={handleSubmit} className="sign-in-form">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="johndoe42@example.com" required/>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter password"
                               pattern="^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$" minLength={8}/>
                        <input type="submit" value="Sign in"/>
                    </form>
                    <h5 className="no-account">Don't have an account yet? <a href="/sign_up">Register now</a></h5>
                </div>
            </main>
        </Layout>
    );
};

export default SignInPage;