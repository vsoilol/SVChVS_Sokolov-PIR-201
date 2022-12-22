import {Link, Outlet, useRouteError} from "react-router-dom";
import "./ErrorPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React from "react";

export default function ErrorPage() {
    let error = useRouteError() as Error;
    return (
        <div className="wrapper">
            <Header/>
            <main className="page">
                <div className={"page__error-route error-route-page"}>
                    <div className={"error-route-page__container"}>
                        <h1 className={"error-route-page__title"}>Такого пути не существует</h1>
                        <Link to={``} className={"error-route-page__link"}>Перейти на главную</Link>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );

    /*    <div>
            <h1>Uh oh, something went terribly wrong 😩</h1>
            <pre>{error.message || JSON.stringify(error)}</pre>
            <button onClick={() => (window.location.href = "/")}>
                Click here to reload the app
            </button>
        </div>*/
}