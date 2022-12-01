# Project Auth API

This was a pair programming project that required building an API with authentication to implement a registration flow and a frontend with forms to register, sign in and view content once logged in.  

The backend consists of: 
- Registration endpoint to create a new user
- Signin endpoint to authenticate a user
- Enpoint behind authentication to return content only when a user's auth token is provided as a header

The frontend consists of:
- A registration form
- A signin form
- A page to show the authenticated content from the API
- A signout button that removes the saved access token and redirects the user to the login form
