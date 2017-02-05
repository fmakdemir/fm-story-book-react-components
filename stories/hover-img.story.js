import React from 'react';
import HoverImg from 'components/hover-img';
import { storiesOf, action } from '@kadira/storybook';
// import { createStore } from 'react-redux';

import { createStore } from 'redux'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ]);
    default:
      return state;
  }
}

var mouseover = () => {
	console.log('over');
	store.dispatch({
		type: 'ADD_TODO',
		text: 'Mouse Over'
	});
}
var mouseleave = () => {
	store.dispatch({
		type: 'ADD_TODO',
		text: 'Mouse Leave'
	});
}
const store = createStore(todos, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// add showcases with .add
storiesOf('HoverImg', module)
  .add('image with hover', () => (
    <HoverImg onMouseOver={mouseover} onMouseLeave={mouseleave} name="Goku Kid" main="imgs/kid-goku-main.png" hover="imgs/kid-goku-hover.png"/>
  ))
  .add('with some emoji', () => (
    <HoverImg name='Only main' main='imgs/kid-goku-main.png' />
  ));
