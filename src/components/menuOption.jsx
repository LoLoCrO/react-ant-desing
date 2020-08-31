import React from 'react';
import { Link } from "react-router-dom";

const MenuOption = (props) => {

    const { name, closeMenu } = props;

    return (
        <Link
            to={`/${name}`}
            onClick={() => closeMenu()}
        >
            <div
                style={{
                    color: 'black',
                    padding: '2rem',
                    borderBottom: '1px solid lightgray',
                    background: 'linear-gradient(to bottom right, #fff 50%, #fff 10%, rgba(55,63,81, 1) 170%, rgba(55,63,81, 1) 10%)'
                }}
            >
                {name}
            </div>
        </Link>
    );

}

export default MenuOption;