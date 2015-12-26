(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["createReducer"] = factory();
	else
		root["createReducer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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
	"use strict";

	exports.__esModule = true;
	exports.createReducer = createReducer;

	function createReducer(initialState, actionHandlers) {
	  return function (state, action) {
	    if (state === undefined) state = initialState;

	    if (actionHandlers.hasOwnProperty(action.type)) {
	      return actionHandlers[action.type](state, action);
	    }
	    return state;
	  };
	}

	;

/***/ }
/******/ ])
});
;