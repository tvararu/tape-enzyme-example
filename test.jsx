import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import Foo from './foo'

test('<Foo />', (assert) => {
  const wrapper = shallow(<Foo a={ 2 } b={ 2 } />)
  assert.equal(wrapper.text(), '4')

  assert.end()
})
