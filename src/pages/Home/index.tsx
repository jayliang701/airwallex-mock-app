import React from 'react';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { pageContent } from '../Page';
import InvitationPopup from '../../components/InvitationPopup';

import styles from './index.scss';

const state = observable({
    //your state here
});

const Home: React.StatelessComponent<any> = ({}: any) => {
    return (
        <div className={styles.home}>
            <InvitationPopup hidden={false} />
        </div>
    );
}

export default observer(pageContent(Home));
