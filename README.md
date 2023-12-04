# BilgeAdam Store Project

## Overview

This project is a Next.js/React.js web application that reads product data from a JSON URL, displays a list of products, allows filtering and sorting of products, and provides statistical insights on the products.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Checklist

### Setup and Initial Configuration

- [x] Initialize the project with `create-next-app`.
- [x] Set up a basic folder structure (components, pages, styles, utils, etc.).
- [x] Install necessary dependencies (e.g., React, Next.js, TypeScript, Mantine UI).

### Core Features

- [x] Implement the `fetchData` utility function for data fetching.
- [x] Implement the `React-Query` for server state.
- [x] Develop the `/productList` page to display products.
  - [x] Ensure the product list is responsive and adjusts based on display width.
- [x] Implement product filtering by size.
- [x] Implement product sorting by price.
- [x] Develop the `/statistics` page to display statistical data about the products.
  - [x] Determine the brand with the most products under 40 EUR.
  - [x] Find out which brand offers the largest selection of sizes.
  - [x] Calculate the brand with the lowest average price for size “32”.

### Testing

- [ ] Set up and configure Jest and Testing Library for testing components and hooks.
- [ ] Write unit tests for the `fetchData` utility function.

### Styling

- [x] Apply styling using CSS Modules.
- [x] Ensure UI/UX is user-friendly and accessible.

### Documentation

- [x] Document the project setup and how to run it.
- [x] Add comments and documentation within the code for clarity.

### Deployment

- [x] Set up deployment (e.g., Vercel, Netlify).
- [x] Ensure the application is properly deployed and accessible online.

### Optimization and Refinement

- [x] Optimize performance where necessary.
- [x] Refactor code for better readability and maintainability.
