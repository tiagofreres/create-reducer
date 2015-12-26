# create-reducer
Creates a reducer from an ActionHandlers object

`CreateReducer :: State a, ActionHandlers b, Action c => a,b -> (a,c -> a)`

`ActionHandlers :: ActionType a, State b, Action c => {a: (b,c -> b), ...}`

Creates a reducer from an object that each property name is an actionType and
its value is a function that receive a state and an action and return a
new state

Example:

```js
const initialState = 0;
const actionHandlers = {
	'INCREMENT': (state, action) => state + 1,
	'DECREMENT': (state, action) => state - 1
};

const reducer = createReducer(initialState, actionHandlers);
```
