import React from "react";
import Button from "../Button/Button";


const Header = (props) => {
    return (
        <header className="header">
            {props.text}
            <Button text='Кнопка' />
            <Button />
        </header>
    )
}


export default Header