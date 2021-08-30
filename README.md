# Knowledge Center
### Carousel coding challenge for Latana

#### -The task-
creating a slider for the marketing team out of a Figma design.
The marketing team provided a mobile and a desktop version.

#### -Features-
A function that runs upon mount/change checks the screen size of the device used, and determines how many cards
should be shown (1-3). 
Starting with the desktop version I implemented logic that uses the id of the current "first" element 
and the number of items shown to determine how much of a translation on the x axis is needed to arrive at the next
or previous item.

The arrow navigation buttons change on hover, and are disabled when the user can't navigate anymore (own addition).
There is optional logic for continuous navigation, upon which the disabled style should be removed, and a more elegant 
transition should be added.

 
=========


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
