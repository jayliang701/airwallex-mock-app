import React from 'react';
import { mount } from 'enzyme';

import Home from '../';
import InvitationPopup from '../../../components/InvitationPopup';

describe('<Home/>', () => {

    it('render sandwith', () => {
        const wrapper = mount(<Home/>)
        expect(wrapper.exists('.page')).toBe(true);
        expect(wrapper.exists('.header')).toBe(true);
        expect(wrapper.exists('.content')).toBe(true);
        expect(wrapper.exists('.footer')).toBe(true);
    })

    it('render content', () => {
        const wrapper = mount(<Home/>)
        expect(wrapper.exists('.slogan')).toBe(true);
        expect(wrapper.exists('.subSlogan')).toBe(true);
        expect(wrapper.exists('.inviteBtn')).toBe(true);
    })

    it('toggle invite popup', () => {
        const wrapper = mount(<Home/>)
        expect(wrapper.find(InvitationPopup).prop('hidden')).toBe(true);
        wrapper.find('.inviteBtn').at(0).simulate('click');
        expect(wrapper.find(InvitationPopup).prop('hidden')).toBe(false);
    })

});