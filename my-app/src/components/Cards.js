import React from "react";
import PropTypes from 'prop-types';

const style = {
    image: {
            maxWidth: '150px',
            margin: 'auto',
            padding: '10',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            // float: 'left'
          
    },
    container: {
        padding: '15px',
        margin: '20px',
        float: 'left',
        // float: 'right',
        alignItems: 'center'
    }
}

const Cards = props => (
    
    <section style={style.container} className="d-flex" id={props.id} value={props.id} onClick={() =>
        props.clicked(props.id)}>
        <img className="flex-fill" style={style.image} src={props.image} alt="emojis"/>

    </section>
    
)

Cards.propTypes = {
    cards: PropTypes.array
}

export default Cards;