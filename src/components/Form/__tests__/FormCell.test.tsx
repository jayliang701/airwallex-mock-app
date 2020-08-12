import React from 'react';
import { mount } from 'enzyme';

import {
    FormCell,
} from '..';

describe('<FormCell/>', () => {

    it('render single child', () => {
        const wrapper = mount((
            <FormCell>
                <div>1</div>
            </FormCell>
        ))
        const style = window.getComputedStyle(wrapper.getDOMNode()).getPropertyValue('grid-template-columns');
        expect(style).toBe('');
    })

    it('render multiple children', () => {
        const wrapper = mount((
            <FormCell>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </FormCell>
        ))
        const style = window.getComputedStyle(wrapper.getDOMNode()).getPropertyValue('grid-template-columns');
        expect(style).toBe('auto auto auto');
    })

});