import React from "react";
import "./AboutUsPage.scss";
import {Link} from "react-router-dom";

export function AboutUsPage() {
    return (
        <section className={"page__about-us about-us"}>
            <div className={"about-us__container"}>
                <div className={"about-us__title"}>О нас</div>
                <div className={"about-us__text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
                    accusantium ad consectetur, deleniti dolorum eaque earum eius et exercitationem expedita facilis
                    fugit illum ipsam iure laudantium magnam maiores, nesciunt odio pariatur quaerat quas quia ratione
                    unde voluptatem! Amet architecto, eligendi fuga nihil odit possimus! Ab accusamus animi cumque
                    dolorem ea eaque, et explicabo hic illum in itaque iusto maxime, modi mollitia nobis omnis porro
                    quas quasi quia recusandae repellat sapiente sunt? Adipisci animi atque corporis earum error, fugiat
                    hic in inventore labore magnam nam, nisi officia porro provident quam quo recusandae, sapiente sunt
                    voluptate voluptatum. Accusantium distinctio laboriosam omnis?
                </div>
            </div>
        </section>
    );
}