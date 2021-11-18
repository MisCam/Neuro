import React from 'react';
import cn from 'clsx';

import styles from './PageLayout.module.css';

type PageLayoutProps = {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}

const PageLayout = (props: PageLayoutProps): React.ReactElement => {
    const { children, className } = props;

    return <div className={cn(styles.container, className)}>{children}</div>;
}

export default PageLayout;
