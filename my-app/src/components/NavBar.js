import React from "react";

const style = {
    blue: {
        backgroundColor: '#0085B2',
        color: 'white',
        height: '220px',
        fontFamily: 'Pacifico, cursive'
    },
    logo: {
        padding: '20px'
    }
}

const NavBar = props => (
    <header style={style.blue} className="container, w-100">
        <nav className="nav-fill">
            <h1 style={style.logo} className="nav-item">Clickmoji</h1>
            <h4 className="nav-item">{props.status}</h4>
            <div><h4 className="nav-item">Score:{props.currentScore}</h4></div>
            
            <div><h4 className="nav-item">High Score:{props.highScore}</h4></div>
        </nav>
    </header>

)

export default NavBar;
