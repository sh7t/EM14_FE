import "./style.css";
import logo from "../../assets/UI/book-haven.svg";


const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-container">
                    <div className="logo">
                        <a href="/" className="logo-link">
                            <img src={logo} alt="Book Haven" width="45px" height="45px"/>
                            <span id="logo-text">Book Haven</span>
                        </a>
                    </div>

                    <div className="routes">
                        <a className="route" href="/">Home</a>
                        <a className="route" href="/about">About us</a>
                        <a className="route" href="/books">Books</a>
                        <a className="route" href="https://tinyurl.com/thinking-gif" target="_blank">Contact us</a>
                    </div>

                    <div className="auth">
                        <button className="auth-button" id="log-in">Log in</button>
                        <button className="auth-button" id="sign-in">Join us</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
