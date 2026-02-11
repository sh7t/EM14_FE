import "./style.css"
import Layout from "../layout/Layout";
import {useNavigate} from "react-router";

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <main className="main">
                <div className="not-found">
                    <h2 className="not-found-oops">⠀Oops!⠀</h2>
                    <h3 className="not-found-message">404 - PAGE <span>NOT FOUND</span></h3>
                    <p className="not-found-description">The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                    <button className="not-found-home" onClick={() => {navigate("/")}}>Return home</button>
                </div>
            </main>
        </Layout>
    );
};

export default NotFoundPage;