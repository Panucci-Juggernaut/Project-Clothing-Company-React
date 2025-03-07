# Panucci Clothing Company

A React-based e-commerce website built with React Router v6 showcasing clothing products and company information.

## Features

- Responsive navigation with React Router
- Product catalog with grid layout
- Individual product detail pages
- Nested routes for special offers
- Dynamic routing with URL parameters
- Protected checkout route
- Conditional navigation

## Tech Stack

- React 19
- React Router DOM 6.29
- Vite 6.2
- CSS3 with Grid/Flexbox

## Project Structure

```
src/
  ├── pages/
  │   ├── Home.jsx          # Landing page
  │   ├── About.jsx         # Company information
  │   ├── Products.jsx      # Product catalog
  │   ├── ProductDetails.jsx # Individual product view
  │   └── Offers.jsx        # Special offers component
  ├── App.jsx              # Main app component with routing
  ├── main.jsx            # Entry point
  └── index.css           # Global styles
```

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Routes

- `/` - Home page
- `/about` - About page with nested offers route
- `/products` - Product catalog
- `/products/:id` - Individual product details
- `/checkout` - Protected checkout route
- `/about/offers` - Special offers (nested route)

## Development

- Use `npm run dev` to start development server
- Use `npm run lint` to run ESLint
- Use `npm run preview` to preview production build


