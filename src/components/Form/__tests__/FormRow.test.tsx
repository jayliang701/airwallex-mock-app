import React from 'react';
import { mount } from 'enzyme';

import {
    FormRow,
} from '..';

describe('<FormRow/>', () => {

    it('render 1 column', () => {
        const wrapper = mount((
            <FormRow cols={1}>
                <div>1</div>
            </FormRow>
        ))
        const style = window.getComputedStyle(wrapper.getDOMNode()).getPropertyValue('grid-template-columns');
        expect(style).toBe('');
    })

    it('render multiple columns', () => {
        const wrapper = mount((
            <FormRow cols={3}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </FormRow>
        ))
        const style = window.getComputedStyle(wrapper.getDOMNode()).getPropertyValue('grid-template-columns');
        expect(style).toBe('1fr 1fr 1fr');
    })

});