import React from 'react';
import { mount, shallow } from 'enzyme';

import Home from '../';
import InvitationPopup from '../../../components/InvitationPopup';

const sleep = (delay) => {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}

describe('<Home/>', () => {

    it('render sandwith', async () => {
        const wrapper = mount(<Home/>, {  });
        await sleep(100);
        wrapper.update();
        expect(wrapper.exists('.page')).toBe(true);
        expect(wrapper.exists('.header')).toBe(true);
        expect(wrapper.exists('.content')).toBe(true);
        expect(wrapper.exists('.footer')).toBe(true);
    })

    it('render content', async () => {
        const wrapper = mount(<Home/>);
        await sleep(100);
        wrapper.update();
        expect(wrapper.exists('.slogan')).toBe(true);
        expect(wrapper.exists('.subSlogan')).toBe(true);
        expect(wrapper.exists('.inviteBtn')).toBe(true);
    })

    it('toggle invite popup', async () => {
        const wrapper = mount(<Home/>);
        await sleep(100);
        wrapper.update();
        expect(wrapper.find(InvitationPopup).prop('hidden')).toBe(true);
        wrapper.find('.inviteBtn').at(0).simulate('click');
        expect(wrapper.find(InvitationPopup).prop('hidden')).toBe(false);
    })

});