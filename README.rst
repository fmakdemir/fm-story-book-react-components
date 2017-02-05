Fma's React Components with Storybook
#####################################

A live Storybook is here:
https://fmakdemir.github.io/fm-story-book-react-components

This is a collection of React Components that are showcased with
`Storybook <https://github.com/storybooks/react-storybook>`_.

Setup
-----

:code:`npm i` or :code:`yarn install` (suggested) to install dependencies.

Adding New Components
---------------------

* Add your component(s) under :code:`/components` folder (along with their css files).
* Add a :code:`.story.js` to :code:`/stories` using :code:`/stories/hover-img.story.js` as an example.

From shell run :code:`npm start` to start storybook.

You can add less files like in :code:`/componenets/hover-img.js` example.

Deploying to Github Pages
-------------------------

You can deploy your storybook to Github Pages using: :code:`npm run deploy-ghpages`

*Note:* do not rename build-storybook because deploy script uses it.

For more info go to `storybook docs <https://getstorybook.io/docs/react-storybook>`_.
