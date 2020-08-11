import React from 'react';

import styles from './index.scss';

export type FooterProps = {
    
}

const Footer: React.StatelessComponent<FooterProps> = ({ 
    children 
}: React.PropsWithChildren<FooterProps>) => {
    
    return (
        <div className={styles.footer}>
            <div className={styles.copyright}>
                <div>Made with <span className={styles.love}>❤</span> by Jay Liang</div>
                <div>© 2020 Broccoli & Co. All rights reserved.</div>
            </div>
        </div>
    );
}

export default Footer;