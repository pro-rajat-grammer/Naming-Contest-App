# Naming Contest Application

## Description
The Naming Contest Application is a JavaScript web application built using React. It is designed to help people find ideas for naming various things such as startups, books, websites, and more.

## Features
- Users can input keywords or descriptions related to their project.
- Anyone can create the Naming Contest.
- Users can see the already proposed names as well as they can suggest new names


## Technologies Used
- **MongoDB**: NoSQL database for storing and managing application data.
- **Node.js**: JavaScript runtime environment for server-side development.
- **Express.js**: Web application framework for Node.js, used for building APIs and handling HTTP requests.
- **React**: Frontend JavaScript library for building user interfaces.
- **React Router**: Library for routing in a React application.
- **Styled Components**: Library for styling React components with CSS.
- **Axios**: Promise-based HTTP client for making AJAX requests.


## Setup Instructions
1. Clone the repository: `git clone git@github.com:pro-rajat-grammer/Naming-Contest-App.git`
2. Navigate to the project directory: `cd naming-contest-app`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`
5. Open your browser and visit `http://localhost:3000`


#### package.json dependencies

```
  "dependencies": {
    "axios": "^0.27.2",
    "cors": "^2.8.5",
    "ejs": "^3.1.8",
    "express": "^4.18.1",
    "mongodb": "^4.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "ts-loader": "^9.3.1",
    "typescript": "^4.7.4",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
  },
  "devDependencies": {
    "@typescript-eslint/parser": "^5.33.0",
    "eslint": "^8.22.0",
    "eslint-plugin-react": "^7.30.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "^2.7.1",
    "ts-node-dev": "^2.0.0"
  }
```

#### Mock Data

```json
{
  "contests": [
    {
      "id": "cognitive-building-bricks",
      "categoryName": "Business/Company",
      "contestName": "Cognitive Building Bricks"
    },
    {
      "id": "educating-people-about-sustainable-food-production",
      "categoryName": "Magazine/Newsletter",
      "contestName": "Educating people about sustainable food production"
    },
    {
      "id": "big-data-analytics-for-cash-circulation",
      "categoryName": "Software Component",
      "contestName": "Big Data Analytics for Cash Circulation"
    },
    {
      "id": "free-programming-books",
      "categoryName": "Website",
      "contestName": "Free programming books"
    }
  ]
}
```



## Contributing
Contributions are welcome! If you'd like to contribute to the project, please fork the repository, make your changes, and submit a pull request.
