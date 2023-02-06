# Apple E-Commerce Store

![tutorial thumbnail](./client/src/assets/_thumbnail.jpg)

<<<<<<< HEAD
Modern Apple Store built with React, TypeScript, Stripe payments, and Strapi backend for stored data. Styling with SASS.
=======
Modern Apple store created with React, TypeScript, Stripe payments and Strapi backend.
>>>>>>> 1fbfd789d9eaba60e86f44b4793340fc8a0e849d

https://apple-store-sd.vercel.app

## Main technologies

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white)

## Stack

- [Strapi](https://strapi.io) - the next-gen headless CMS, open-source, javascript, enabling content-rich experiences to be created, managed and exposed to any digital device
- [Stripe](https://stripe.com) - a suite of APIs powering online payment processing and commerce solutions for internet businesses of all sizes
- [Axios](https://axios-http.com) - a simple promise based HTTP client for the browser and node.js
- [React Icons](https://react-icons.github.io/react-icons) - popular icons in your React projects which utilizes ES6 imports that allows you to include only the icons that your project is using.
- [React Router](https://reactrouter.com/en/main) - a standard library for routing in React
- [React Query](https://tanstack.com/query/v4) - powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte
- [Vite](https://vitejs.dev) - a new breed of frontend build tooling that significantly improves the frontend development experience

## Details

- client created with React (Vite) with TypeScript
- payments provided by Stripe
- CMS with Strapi
- server deployment on Railway with PostgreSQL
- local data stored on SQLite
- media stored on Cloudinary
- environment variables to switch between locale and production
- data fetching and caching with Tanstack React Query
- Axios and REST API is used to fetch data
- context and reducer for managing shopping cart items
- routing with React Router
- styling with SASS
- responsive website design
- inspired by Apple

## Tutorial and project structure

Inside the project you'll see the following folders and files:

```
PROJECT_ROOT
├── client                      # client files
│   ├── public                  # static assets
│   └── src
│       ├── assets              # images and files
│       ├── components          # React components
│       ├── lib
│       │    ├── api            # fetching functions
│       │    ├── config         # SASS mixins
│       │    ├── context        # React context and reducer files
│       │    ├── hooks          # custom hooks
│       │    └── interfaces     # TypeScript interfaces
│       └── pages               # page files
│
└── server                      # server files
```

Go to the `client` and `server` directory and download all missing dependencies as well:

```
yarn install
```

After that you can run this project with:

```
yarn dev (client) / develop (server)
```

**To deploy and manage server content, you need to create an account with Railway (for servers with database, free hosting for 20 days), Cloudinary (for media) and Stripe (for payments).**

After that, just create the `.env` file with the following data in the `server` directory and restart your application:

```
ADMIN_JWT_SECRET = GENERATE_RANDOM_CODE
API_TOKEN_SALT = GENERATE_RANDOM_CODE
APP_KEYS = GENERATE_RANDOM_CODE
JWT_SECRET = GENERATE_RANDOM_CODE
CLOUDINARY_KEY = YOUR_CLOUDINARY_KEY
CLOUDINARY_NAME = YOUR_CLOUDINARY_NAME
CLOUDINARY_SECRET = YOUR_CLOUDINARY_SECRET
STRIPE_KEY = YOUR_STRIPE_KEY
CLIENT_URL = YOUR_CLIENT_URL
NODE_ENV = development (for development) / production (for production)
```

However, you must create an `.env` file for the `client` directory with the following data:

```
VITE_STRAPI_USER_TOKEN = YOUT_STRAPI_TOKEN_FOR_READING_DATA (created on strapi)
VITE_STRIPE_PUBLISHABLE_KEY = YOUR_STRAPI_PUBLISHABLE_KEY
VITE_STRAPI_SERVER_URL = YOUR_STRAPI_SERVER_URL
```

**Don't forget to add the environment variables to your deployment services!**
