import React from "react";
import "./MainPage.scss";
import {Link} from "react-router-dom";

export function MainPage() {
    return (
            <section className={"page__main-section main-section"}>
                <div className={"main-section__container"}>
                    <h2 className={"main-section__title"}>Название сайта</h2>
                    <div className={"main-section__description"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi in placeat porro praesentium quaerat.</div>
                    <Link to={`login`} className={"main-section__button button"}>Перейти в каталог</Link>
                </div>
            </section>
    );
}