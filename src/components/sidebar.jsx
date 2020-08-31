import React from 'react';
import { Drawer } from 'antd';
import MenuOption from './menuOption';

const Sidebar = (props) => {

    const { placement, visible, closeMenu } = props;

    const options = ['home', 'about', 'contact'];

    const listOptions = () =>
        options.map((option, index) =>
            <MenuOption
                key={index}
                name={option}
                closeMenu={closeMenu}
            />
        );

    return (
        <Drawer
            key={placement}
            onClose={closeMenu}
            title={'Ant App'}
            placement={placement}
            visible={visible}
            headerStyle={{
                background: 'linear-gradient(to bottom right, #fff 50%, #fff 10%, rgba(55,63,81, 1) 170%, rgba(55,63,81, 1) 10%)'
            }}
            bodyStyle={{
                paddingTop: 0
            }}
        >
            {listOptions()}
        </Drawer>
    );

}

export default Sidebar;