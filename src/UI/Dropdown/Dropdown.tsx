import React, { useState } from 'react';
import './dropdown.scss';

import arrow from './../../images/arrow.svg';
import MenuItem from './MenuItem/MenuItem';
import { useActions } from '../../hooks/actions';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Dropdown = (props: { title: string; id: number }) => {
    const { title, id } = props;

    const nodes = useSelector((root: RootState) => root.inboost.nodes);
    const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

    const { addValue, changeValue } = useActions();

    const dropdownHandler = () => {
        setIsDropdownActive(!isDropdownActive);
    };

    const itemHandler = (value: number) => {
        if (nodes.length + 1 == id) {
            addValue(value);
        } else {
            changeValue({ id: id, value: value });
        }
        setIsDropdownActive(false);
    };

    return (
        <div className={`dropdown ${isDropdownActive ? 'open' : ''}`}>
            <div className="dropdown__title" onClick={dropdownHandler}>
                <p>{title}</p>
                <img src={arrow} />
            </div>
            <ul className="dropdown__menu">
                <MenuItem currentActive={title} value={1} handler={itemHandler} />
                <MenuItem currentActive={title} value={2} handler={itemHandler} />
                <MenuItem currentActive={title} value={3} handler={itemHandler} />
                <MenuItem currentActive={title} value={4} handler={itemHandler} />
                <MenuItem currentActive={title} value={5} handler={itemHandler} />
                <MenuItem currentActive={title} value={6} handler={itemHandler} />
            </ul>
        </div>
    );
};

export default Dropdown;
