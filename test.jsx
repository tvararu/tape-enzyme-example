import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import Foo from './components/Foo'

test('<Foo /> adds two numbers', (assert) => {
  const wrapper = shallow(<Foo a={ 2 } b={ 2 } />)
  assert.equal(wrapper.text(), '4')

  assert.end()
})
