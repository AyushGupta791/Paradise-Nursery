# Paradise-Nursery
Paradise Nursery React and Redux shopping cart application

# Paradise Nursery 🌿

A responsive plant-shopping application built with React, Redux Toolkit, and React Router.

## Features

- Landing page with a nursery background image and Get Started button
- About Us page with company information
- 18 unique plants across three categories
- Plant images, names, descriptions, and prices
- Add-to-cart buttons disable after a plant is added
- Redux-managed cart state and live cart count
- Increase or decrease product quantities
- Remove individual products or clear the cart
- Automatic line subtotal and overall total calculation
- Continue Shopping navigation
- Checkout placeholder displaying "Coming Soon"
- Responsive layout for desktop and mobile

## Technologies Used

- React
- Vite
- Redux Toolkit
- React Redux
- React Router
- Lucide React
- CSS

## Installation and Setup

1. Install Node.js LTS from https://nodejs.org/
2. Open this project folder in VS Code.
3. Open a terminal in the project directory.
4. Install the dependencies:

   npm install

5. Start the development server:

   npm run dev

6. Open the local URL displayed in the terminal, usually
   http://localhost:5173/

## Production Build

Run the following command:

npm run build

## Project Structure

- src/App.jsx — application routes and landing page
- src/App.css — landing page styling
- src/index.css — shared application styling
- src/main.jsx — React entry point and Redux provider
- src/data/plants.js — plant catalogue
- src/components/Navbar.jsx — navigation bar and cart count
- src/components/AboutUs.jsx — company information
- src/components/ProductList.jsx — plant catalogue and Add to Cart
- src/components/CartItem.jsx — cart management and totals
- src/redux/CartSlice.jsx — Redux cart state and actions

Plant photographs are loaded from Unsplash and require an internet connection. Checkout is a demo placeholder; no payments are processed.
