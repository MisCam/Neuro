import React from 'react';

import Logo from '../../../assets/Logo.png';
import cn from 'clsx';
import Bag from '../../../assets/Bag.png';
import Icon from '../../Icon';
import { ICON_HEIGHT } from '../../Icon/Icon';

import styles from './Header.module.css';

const Header = (): React.ReactElement => (
    <header>
        <ul className={cn(styles.leftMenu, styles.list)}>
            <a>Shop</a>
            <a>About</a>
        </ul>
        <div className={styles.logo}>
            <img src={Logo}/>
        </div>
        <ul className={cn(styles.rightMenu, styles.list)}>
            <a>Subscription</a>
            <a>Sign In</a>
            <Icon width={ICON_HEIGHT.h25} image={Bag}/>
        </ul>
    </header>
)

export default Header;
