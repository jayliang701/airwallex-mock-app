import React from 'react';

import styles from './Form.scss';

export type FormRowProps = {
    cols?:number;
    style?:React.CSSProperties;
};

const FormRow: React.StatelessComponent<FormRowProps> = ({ children, cols, style }) => {
    const mergedStyle:any = {};
    if (cols && cols > 1) {
        mergedStyle.gridTemplateColumns = new Array(cols + 1).join('1fr ');
    }
    return (
        <div className={styles.formRow} style={{ ...mergedStyle, ...style }}>{children}</div>
    );
}

export default FormRow;
