/* 
In "config.js" we will basically put all the variable that shold be constant 
& should be reused across the project. We will not want to put all the variables 
here in this file. The only variables that we do want here are the ones that 
are responsible for kind of defining some important data about the application
itself. As example we put API here that is used across the project for multiple
module for multiple task.
*/

// For constant variable we use variable name in capital letter
export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
export const TIMEOUT_SEC = 10;
export const RES_PER_PAGE = 10;
export const KEY = '8f9fb1cc-75d3-4e8c-a95f-ad9d581e975d';
export const MODAL_CLOSE_SEC = 2.5;
