import React from 'react';

import styles from './Form.scss';

const FormCell: React.FunctionComponent<any> = ({ children }) => {
    const style:any = { };
    if (children && children.length > 1) {
        style.gridTemplateColumns = new Array(children.length + 1).join('auto ');
    }
    return (
        <div className={styles.formCell} style={style}>{children}</div>
    );
}

export default FormCell;
