import React from "react";

const Cards = props => (
    <section id={props.id} value={props.id}>
        <div className="container">
        <div className="row">
        <img src={props.image} alt="emojis"/>
        </div>
        </div>
    </section>
)

export default Cards;