import expect from 'expect'
import createReducer from '../src/index'

var state = 0,
  reducer
const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}
const actionHandlers = {
  [actionTypes.INCREMENT]: (state) => state + 1,
  [actionTypes.DECREMENT]: (state) => state - 1
}
const actions = {
  increment: {
    type: actionTypes.INCREMENT
  },
  decrement: {
    type: actionTypes.DECREMENT
  }
}

describe('createReducer', () => {
  before(() => { reducer = createReducer(state, actionHandlers) })
  it('should increment the state', () => {
    let _state = state
    state = reducer(state, actions.increment)
    expect(state).toEqual(_state + 1)
  })
  it('should decrement the state', () => {
    let _state = state
    state = reducer(state, actions.decrement)
    expect(state).toEqual(_state - 1)
  })
  it('should return the current state when no action handler type is defined', () => {
    let _state = state
    state = reducer(state, { type: 'noHandler' })
    expect(state).toEqual(_state)
  })
})
