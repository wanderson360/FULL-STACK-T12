import React from 'react';
import { enzima } from 'enzyme';

import Pagamento from './Pagamento';

describe('Pagamento', () => {
  let component = null;
  let props = {};

  beforeEach(() => {
    props = {
      money: 10000
    };

    component = enzima(<Pagamento {...props} />);
  });

  it('Formato da Moeda', () => {
    expect(component.find('p').at(2).text()).toEqual('10.000 BRL');
  });

  it('Moeda definida', () => {
    component.setProps({ money: undefined })
    expect(component.find('p').at(2).text()).toEqual('0 BRL');
  });

});