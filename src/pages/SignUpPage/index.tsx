import "./style.css"
import Layout from "../layout/Layout";
import React from "react";
import {FaUserPlus} from "react-icons/fa";
import type {User} from "../../types/user.ts";
import {useNavigate} from "react-router";
import {saveCurrentUserToken, saveUser} from "../../services/localStorageHelper.ts";


const SignUpPage = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        function isEmpty(str: string) {
            return str === undefined || str === null || str === "";
        }

        const navigate = useNavigate();
        const formData = new FormData(event.currentTarget);
        const fullName = formData.get("full-name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const token = "1"; // todo

        const fullNameRegexp = /^\S+\s+\S+/;
        const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegexp = /^(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

        if (isEmpty(fullName) || !fullNameRegexp.test(fullName)) {
            alert(`${fullName}, please enter your FULL name!`);
            return;
        }
        if (isEmpty(email) || !emailRegexp.test(email)) {
            alert(`Entered "${email}" is not valid. Please enter a valid email address!`);
            return;
        }
        if (isEmpty(password) || !passwordRegexp.test(password)) {
            alert(`Entered password must contain at least 8 characters, one number, and one special character!`);
            return;
        }

        const user: User = {
            id: Date.now(),
            name: fullName,
            email: email,
            password: password,
            token: token,
            createdAt: new Date()
        }
        saveUser(user);
        saveCurrentUserToken(token);
        navigate("/books");
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
                        <input type="text" id="full-name" name="full-name" placeholder="John Doe" required/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="johndoe42@example.com" required/>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter password"
                               pattern="^(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$"
                               title="Password must contain at least 8 characters, one number, and one special character"
                               required/>
                        <input type="submit" value="Create account"/>
                    </form>
                    <h5 className="existing-account">Already have an account? <a href="/sign_in">Sign in</a></h5>
                </div>
            </main>
        </Layout>
    );
};

export default SignUpPage;