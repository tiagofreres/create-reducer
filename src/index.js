/**
 * CreateReducer :: State a, ActionHandlers b, Action c => a,b -> (a,c -> a)
 * ActionHandlers :: ActionType a, State b, Action c => {a: (b,c -> b), ...}
 *
 * Creates a reducer from an object that each property name is an actionType and
 * its value is a function that receive a state and an action and return a
 * new state
 *
 * Example:
 *
 * const initialState = 0;
 * const actionHandlers = {
 * 	'INCREMENT': (state, action) => state + 1,
 * 	'DECREMENT': (state, action) => state - 1
 * };
 *
 * const reducer = createReducer(initialState, actionHandlers);
 *
 * @param  {Object} initialState        State
 * @param  {Object} actionHandlers      ActionHandlers
 * @return {Function}                   Reducer
 */
export default function createReducer(initialState, actionHandlers) {
  return (state = initialState, action) => {
    if (typeof actionHandlers[action.type] === 'function') {
      return actionHandlers[action.type](state, action)
    }
    return state
  }
}
