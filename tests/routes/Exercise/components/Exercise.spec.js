import React from 'react'
import { bindActionCreators } from 'redux'
import { Exercise } from 'routes/Exercise/components/Exercise'
import { Nemo } from 'routes/Exercise/components/Nemo'
import { Dori } from 'routes/Exercise/components/Dori'
import { shallow } from 'enzyme'

describe('(Component) Exercise', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      counter : {
        x: 0,
        y: 0,
        hasCollided: false
      },
      ...bindActionCreators({
        moveNemo: (_spies.moveNemo = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<Exercise {..._props} />)
  })

  it('renders as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  it('renders with an <h2> that includes Exercise label.', () => {
    expect(_wrapper.find('h2').text()).to.match(/Exercise:/)
  })

  it('contains two img avatars:  Nemo & Dori.', () => {
    expect(_wrapper.find('.waterContainer').html()).to.contain('img class="nemo"')
    expect(_wrapper.find('.waterContainer').html()).to.contain('img class="dori"')
  })

})
