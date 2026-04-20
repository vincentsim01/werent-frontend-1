Werent Frontend

🔗 Live Demo: https://werent-frontend-1.vercel.app/

Overview

Werent is a frontend project focused on building a dynamic and user-friendly product review experience. The application allows users to explore products, view detailed information, and interact with reviews—from featured top reviews to a full review listing with smooth infinite scrolling.

Features
🏠 All Products Page
- Browse a list of products
- Navigate to individual product detail pages

📦 Product Detail Page
- View product information:
    - Brand
    - Size
    - Price
    - Description
    - Ratings & reviews
- Interactive image carousel
- Click to open Product Modal
- View Top Review
- See total number of reviews
- Navigate to All Reviews Page

⭐ Reviews System
- Highlighted Top Review on product page
- Dedicated All Reviews Page
- Cursor-based pagination
- Infinite scrolling (lazy loading)
- Click on a review or image to open Review Modal

🔍 Modals
- Product Modal (from carousel images)
- Review Modal (from review or image click)

⭐ Loading Screen
⭐ Not Found

Tech Stack
- Framework: Next.js
- Library: React
- Language: TypeScript
- Styling: Tailwind CSS
- Lazy Loading / Infinite Scroll: Sentinel (Intersection Observer)
- Version Control: GitHub
- Deployment: Vercel

Project Structure (Simplified)

/app
  /products     # All Products page
    /[id]
      page.tsx        # Product detail page
        /reviews
            page.tsx          # All reviews page

/components
  ReviewCard.tsx
  ReviewModal.tsx
  ProductModal.tsx
  Carousel.tsx
  ReviewsInfiniteList
  Stars
  ReviewSummary
  ReviewCard
  SizeSelector
  Header
  Footer

/services
  index.ts   
  
User Flow
- User lands on Home Page
- Clicks on a product → navigates to Product Detail Page
- Views:
    - Product details
    - Image carousel (with modal)
    - Top review
- Clicks "View All Reviews"
- Redirected to All Reviews Page
- Scrolls to load more reviews (infinite scroll)
- Clicks a review → opens Review Modal      


Key Concepts Implemented
- Cursor-based pagination
- Infinite scrolling using Intersection Observer (Sentinel)
- Component-based architecture
- Modal state management
- Dynamic routing with Next.js     # Fetch product & review data


Getting Started
Installation

- git clone https://github.com/your-repo/werent-frontend-1.git
- cd werent-frontend-1
- npm install

Run Development Server

- npm run dev

Open http://localhost:3000
 to view it in your browser.


Deployment

The project is deployed on Vercel:

👉 https://werent-frontend-1.vercel.app/

Future Improvements
- Improve accessibility (ARIA, keyboard navigation)
- Add filtering & sorting for reviews
= Optimize performance with caching strategies