import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

const CloseIcon = ({ closeMenu }) =>

    <CloseOutlined onClick={() => closeMenu()} />

export default CloseIcon;