import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Gift from '@/components/Gift.vue';

describe('Gift.vue', () => {
  it('renders props.gift when passed', () => {
    const image = '/test.png';
    const wrapper = shallowMount(Gift, {
      propsData: {
        gift: {
          id: '999',
          image,
        },
      },
    });
    const img = wrapper.find('img');
    expect(img.attributes().src).to.equal(image);
  });
});
