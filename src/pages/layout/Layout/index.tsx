import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

type LayoutProps = {
    children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
    return (
        <div className="page">
            <Header />

            <main className="main">
                <div className="container">
                    { props.children }
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Layout;
