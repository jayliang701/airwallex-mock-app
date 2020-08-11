import React from 'react';

import styles from './index.scss';

export type HeaderProps = {
    
}

const Header: React.StatelessComponent<HeaderProps> = ({ 
    children 
}: React.PropsWithChildren<HeaderProps>) => {
    
    return (
        <div className={styles.header}>
            Header
        </div>
    );
}

export default Header;