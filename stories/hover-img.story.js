import React from 'react';
import HoverImg from 'components/hover-img';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('HoverImg', module)
  .add('Test', () => (
    <HoverImg onMouseOver={action('hover')} onMouseLeave={action('out')} name="Goku Kid" main="https://fmakdemir.com/img/sketches/cs_goku_kid2.png" hover="https://fmakdemir.com/img/sketches/co_goku_kid2.png"/>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));
