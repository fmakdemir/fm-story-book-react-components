import React from 'react';
import ColorPalette from 'components/color-palette';
import { storiesOf, action } from '@kadira/storybook';

// add showcases with .add
storiesOf('ColorPalette', module)
  .add('blue color palette', () => (
    <ColorPalette color="blue" />
  ))
  .add('red color palette no dropdown', () => (
    <ColorPalette color="red" hideDropdown={true}/>
  ))
  .add('green color palette 400px width', () => (
    <ColorPalette color="green" width='400px'/>
  ));
