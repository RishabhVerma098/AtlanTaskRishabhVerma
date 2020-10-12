# Atlan Frontend Task

> Task: Use the IPL data ([given](https://www.kaggle.com/saurav9786/indian-premier-league-match-analysis))  to create a web app (a dashboard using data visualizations/graphs) with interesting, out-of-the-box stats or trivia.
> **Live [link](https://rishabhverma098.github.io/AtlanTaskRishabhVerma/)** 


## Web Framework
React.js is used to create the required dashboard. Redux is used for state management.

## Data
Data is provided in .cvs format. Used Python to filter the required the data and convert into JSON which was later stored in frontend as a static data.
Code repo of python where data is filtered - [REPO](https://github.com/RishabhVerma098/pythonDataFilterAtlanTask)

## Important library Used
* [Redux](https://www.npmjs.com/package/redux)
   * Used for state management.
* [React-vis](https://www.npmjs.com/package/react-vis)
   * React-vis is a lightweight React visualization library made & used by Uber.
     It is lightweight , High-level & customizable.
* [React-responsive](https://www.npmjs.com/package/react-responsive)
   * To use Media queries in react for responsive design.

## Bonus points
* **Fully responsive**
  * Support for all type of device , works with all Desktop, tablets, Mobile.
* **PWA**
  * It is Progressive web app that can added to homescreen of all the supported 
    devices. Service worker is used to achive this feature.Impportant request are 
    cached.
* **Offline support**
  * It has the ability to work offline, all the functionality will work in offline 
    mode. All the pages are picked from cache.



