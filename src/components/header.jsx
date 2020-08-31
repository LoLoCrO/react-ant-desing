import React from "react";
import { PageHeader } from 'antd';
import MenuButton from './menuButton';

const Header = ({ showMenu, closeMenu }) => {

    return (
        <PageHeader
            style={{
                background: 'linear-gradient(to bottom right, #fff 50%, #fff 10%, rgba(55,63,81, 1) 170%, rgba(55,63,81, 1) 10%)',
                height: '55px',
                padding: '0',
                paddingLeft: '0.4rem',
                borderBottom: '1px solid lightgray',
                display: 'flex'
            }}
        >
            <MenuButton
                showMenu={showMenu}
                closeMenu={closeMenu}
            />
            <h2
                style={{
                    width: '12rem',
                    position: 'absolute',
                    textAlign: 'center',
                    top: '13px',
                    left: 'calc(50% - 6rem)'
                }}
            >
                Ant App Title
            </h2>
        </PageHeader>
    );
};

export default Header;
