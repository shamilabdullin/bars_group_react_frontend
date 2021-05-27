import React from 'react'

const menuButtons = [
    "купить билет",
    "спортсмены",
    "команды",
    "виды спорта",
    "мероприятия"
]

function Menu(){
    return(
        <div className="menu">
            {menuButtons.map(button =>(<a href={button}>{button}</a>))}
        </div>
    );
}

export default Menu