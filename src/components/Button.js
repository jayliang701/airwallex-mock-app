import React from 'react';
import classNames from 'classnames';

import styles from './Button.scss';

export default ({ children }) => {
    return (
        <div className={classNames(styles.btnDefault, styles.btnIcon)}>{children}</div>
    );
}
