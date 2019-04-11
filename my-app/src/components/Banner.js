import React from "react";

const style = {
    banner: {
        backgroundColor: '#EEE774',
        color: 'white'
    }
}

const Banner = props => (
    <div style={style.banner} className="container, w-100">
    <h1 className="text-center">Clicky Game!</h1>
    <h2 className="text-center">Click on an image to earn points, but don't click the same photo twice!</h2>
    </div>
)

export default Banner;