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

- [ ] Initialize the project with `create-next-app`.
- [ ] Set up a basic folder structure (components, pages, styles, utils, etc.).
- [ ] Install necessary dependencies (e.g., React, Next.js, TypeScript, Tailwind CSS).
- [ ] Set up linting and formatting tools (ESLint, Prettier).

### Core Features

- [ ] Implement the `fetchData` utility function for data fetching.
- [ ] Create a custom `useData` hook for handling fetched data.
- [ ] Develop the `/productList` page to display products.
  - [ ] Ensure the product list is responsive and adjusts based on display width.
- [ ] Implement product filtering by size.
- [ ] Implement product sorting by price.
- [ ] Develop the `/statistics` page to display statistical data about the products.
  - [ ] Determine the brand with the most products under 40 EUR.
  - [ ] Find out which brand offers the largest selection of sizes.
  - [ ] Calculate the brand with the lowest average price for size “32”.

### Testing

- [ ] Set up and configure Jest and Testing Library for testing components and hooks.
- [ ] Write unit tests for the `fetchData` utility function.

### Styling

- [ ] Apply styling using Tailwind CSS.
- [ ] Ensure UI/UX is user-friendly and accessible.

### Documentation

- [ ] Document the project setup and how to run it.
- [ ] Add comments and documentation within the code for clarity.

### Deployment

- [ ] Set up deployment (e.g., Vercel, Netlify).
- [ ] Ensure the application is properly deployed and accessible online.

### Optimization and Refinement

- [ ] Optimize performance where necessary.
- [ ] Refactor code for better readability and maintainability.

## Running the Project

- Detailed instructions on how to run the project locally.

## Contributing

- Guidelines for how to contribute to the project.
