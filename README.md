## Flowcode/React Version 2.0

A color flow code which can generate fifty random colors with the click of a button, as well as functionality to select a specific color. Unlike our previous version which was implemented by basing rendering on dynamic information in the form of props or state. Instead, we manipulated child component instances from a parent component using React.createrefs.

## Functionalities

  - display a list of 50 randomc colors which are passed down to presentational components from a container component which stores the all 50 colors and a selected color in it's state.
  - users can pick a color from the list which will then become the active color.
  - the element displaying the active color will highlight with a border upon being designated by the user.
  - Display a 'Reset' button. When this button is clicked, state and therefore the color list is updated, with 50 new colors and any select element will no longer be selected.
  