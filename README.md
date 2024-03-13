# React Coding Challenge

Create an SPA using React for updating a user’s profile. All data should be stored and loaded from local storage. There are no API endpoints to retrieve data.

NOTE: Security is not a concern with this challenge. It is suggested to make the application functional before trying to make it pretty. A good looking UI that does not function properly, is not useful. However, achieving both is a bonus.

## Profile Data:

- Email (required) - please validate email syntax. There is no need to validate if it
  actually exists.
- Password (required) - between 10 - 32 letters, numbers, special characters (not a
  letter or number). There must be at least 2 uppercase, 2 numbers and 1 special
  character.
- Full name (required) - min of 3 characters
- Phone number (optional) - stored in E.164 International Format: ex.
  +15615128712. Other input formats are allowed, but it must be stored in E.164. It
  should be displayed as +1 (555) 888-2231.
- Favorite color: one of blue, red, green, yellow, purple, black, orange (required)

You need the ability to login and create, view, edit and delete a profile.

## Screens:

- Login - email and password. Please ensure to display an error if the wrong
  credentials are entered. Also include a “create profile” button/link since the first time running it, there won’t be any profiles. A login should timeout after 60 seconds, taking them back to this screen with a message stating “Session timed out”.
- Create Profile - a form to collect all profile data points and store them in local storage. Note that emails must be unique across all profiles, a message that the email is already in use should be displayed. Any number of profiles can be created. This page has no login session, thus it should not be timed out.
- View Profile – after a successful login, display a profile overview page which displays all the data within a user’s profile. This page should have an edit and delete button. The title of the page should be `${fullName} Profile` in the user’s favorite color.
- Edit Profile - allow the user to edit any data point within their profile. They should be allowed to change multiple fields at once and then click a save button. Data should be saved to local storage. There should also be a cancel button, which discards all changes and navigates back to the view profile screen. The title of the page should be `Edit ${fullName} Profile` in the user’s favorite color.
- Delete Profile - prompts user for confirmation (this can be a popup vs its own screen). If they confirm, the profile should be deleted from local storage. After deleting, you should navigate back to the login screen.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
