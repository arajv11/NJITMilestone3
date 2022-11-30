# Note: Not for real purchases, just to practice MERN stack

# Mock sales site for wrist watches(CatchWatch)

# About the app: I built this to practice making a full stack application to showcase online shopping experience

# App is available at https://catchwatch.herokuapp.com

# To run locally:

1. Download the source code and create a .env file in the backend folder with two variables:

   JWT_SECRET, which is a string
   MONGODB_URI, which is for a local connection to MongoDB on your computer

2. Run npm install in the frontend and backend folders to install dependencies

# How to use CatchWatch:

Navigation links are at the top of the page.

1. Open up the site
2. You need to log in to make a purchase(top right). Create account if you don't have one.
3. Home page displays all offerings.
4. Each time you click "Buy this item", the item is added to the cart(link on the top).
5. Go to cart link to make adjustments and proceed to checkout.
6. If you are logged in you can proceed to checkout. First, enter name and address. Submit info to see order preview.
7. On the order preview page, click "edit" button if you want to change the shipping info.
8. Click "Place Order" when ready. All orders are available in "My orders"(link on the top)

Sign out is in the top right.

# Technologies used:

MongoDB, Express, React, Node, React-Bootstrap, Fontawesome, axios, react-router-dom, bcryptjs, dotenv, jsonwebtoken, mongoose

# Functionalities I didn't add yet:

-Updating the item quantity and adding new items to the shop
-Password reset
-Payment processing
-Canceling order
-Adding new reviews/ratings

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. If port 3000 is not available on your computer, go to another port.

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
