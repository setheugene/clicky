import React from "react";

const style = {
    banner: {
        backgroundColor: '#EEE774',
        color: '#464745',
        fontFamily: 'Pacifico, cursive',
        height: '70px',
        
    },
    bannertext: {
        padding: '15px'
    }
    
}

const Banner = props => (
    <div style={style.banner} className="container, w-100">
    {/* <h1 className="text-center">Clicky Game!</h1> */}
    <h2 style={style.bannertext} className="text-center">Click on an image to earn points, but don't click the same photo twice!</h2>
    </div>
)

export default Banner;