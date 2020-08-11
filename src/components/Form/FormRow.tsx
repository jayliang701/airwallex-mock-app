import React from 'react';

import styles from './Form.scss';

const FormRow: React.FunctionComponent<{ cols?:number }> = ({ children, cols }) => {
    const style:any = {};
    if (cols && cols > 1) {
        style.gridTemplateColumns = new Array(cols + 1).join('1fr ');
    }
    return (
        <div className={styles.formRow} style={style}>{children}</div>
    );
}

export default FormRow;
