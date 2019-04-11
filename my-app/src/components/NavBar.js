import React from "react";

const style = {
    blue: {
        backgroundColor: '#0085B2',
        color: 'white'
    }
}

const NavBar = props => (
    <header style={style.blue} className="container, w-100">
        <nav className="row">
            <h3 className="col-md-3">Clickmoji</h3>
            <h3 className="col-md-3">status..{props.status}</h3>
            <h3 className="col-md-3">Score:{props.score}</h3>
            <h3 className="col-md-3">High Score:{props.highScore}</h3>
        </nav>
    </header>

)

export default NavBar;
