import expect from 'expect'
import { createReducer } from '../src/index'

var state = 0, reducer;
const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};
const actionHandlers = {
  [actionTypes.INCREMENT]: (state, action) => state + 1,
  [actionTypes.DECREMENT]: (state, action) => state - 1
};
const actions = {
  increment: {
    type: actionTypes.INCREMENT
  },
  decrement: {
    type: actionTypes.DECREMENT
  }
};

describe('createReducer', () => {
  before(() => { reducer = createReducer(state, actionHandlers); });
  it('should increment the state', () => {
    let _state = state;
    state = reducer(state, actions.increment);
    expect(state).toEqual(_state + 1);
  })
  it('should decrement the state', () => {
    let _state = state;
    state = reducer(state, actions.decrement);
    expect(state).toEqual(_state - 1);
  })
});
