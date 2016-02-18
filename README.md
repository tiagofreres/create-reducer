# create-reducer
Creates a [Redux](http://rackt.github.io/redux) reducer from an ActionHandlers object

[![build status](https://img.shields.io/travis/tiagofreres/create-reducer/master.svg?style=flat-square)](https://travis-ci.org/tiagofreres/create-reducer)
[![npm version](https://img.shields.io/npm/v/redux-createreducer.svg?style=flat-square)](https://www.npmjs.com/package/redux-createreducer)
[![npm downloads](https://img.shields.io/npm/dm/redux-createreducer.svg?style=flat-square)](https://www.npmjs.com/package/redux-createreducer)

`CreateReducer :: State a, ActionHandlers b, Action c => a,b -> (a,c -> a)`

`ActionHandlers :: ActionType a, State b, Action c => {a: (b,c -> b), ...}`

Creates a reducer from an object that each property name is an actionType and
its value is a function that receive a state and an action and return a
new state

## How to install

```bash
$ npm install redux-createreducer --save
```

## Example:

```js
import createReducer from 'redux-createreducer';

const initialState = 0;
const actionHandlers = {
	'INCREMENT': (state, action) => state + 1,
	'DECREMENT': (state, action) => state - 1
};

const reducer = createReducer(initialState, actionHandlers);
```
