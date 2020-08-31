import React from 'react';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const MenuButton = (props) => {

    const { showMenu } = props;

    return (
        <Button
            type="text"
            onClick={() => showMenu()}
        >
            <MenuOutlined />
        </Button>
    );

}

export default MenuButton;