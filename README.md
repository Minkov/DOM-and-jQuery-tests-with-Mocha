# Running DOM tests with Mocha on Node.js
JavaScript OOP Course Repository

## Preparing the local machine for Unit testing with Mocha and Chai 

*   Install [Node.js](https://nodejs.org/ "Node.js")
    *   Try if it is working by typing in CMD/Terminal `$ node -v` (should produce result)
*   Install [Python 2.7](https://www.python.org/downloads/ "Python 2.7")
 
## Preparing for the tests for each homework

*   Checkout the repository for the particular homework 
*   Open CMD/Terminal and navigate to the checked out repository with the homework
*   **If you are running on windows**, run `$ npm install jsdom@3 --msvs_version=2012` or `$ npm install jsdom@3 --msvs_version=2013`
*   Run `npm install` in CMD/Terminal
    *   A folder `node_modules` should appear
*   You are ready to run the tests

## Running the tests

*   Navigate to the folder of the particular homework in CMD/Terminal
*   Requirements:
    *   JavaScript files must be called task-1.js, task-2.js etc..
    *   Each .js file must contain `module.exports=[name of the object/function]`
*   Run `npm test`
    *   Test results should appear on the CMD/Terminal   