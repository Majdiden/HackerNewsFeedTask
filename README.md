# HackerNews Feed App

Preview the app here: [https://hacker-news-feed-task.vercel.app/](https://hacker-news-feed-task.vercel.app/)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Majdiden/HackerNewsFeedTask
cd HackerNewsFeedTask
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

## 🔍 Implementation Details

### Main Feed Page
- Uses React Query for data fetching with pagination support.
- Implements two key queries:
  1. Fetches paginated list of article IDs.
  2. Fetches detailed article data for each ID.
- Shows skeleton loading state while fetching.

### API Integration
- `getPaginatedArticles`: Fetches and paginates top stories from HackerNews API.
- Client-side pagination implementation (pagination happens to the response data to simulate a pre-paginated api response).
- `getArticle`: Fetches individual article details.

### Article Detail Page
- Uses React Query for fetching individual article data.
- Implements loading states with skeleton component.
- Displays article metadata (title, author, score).
- Includes toast notifications for user interactions.

### Article Card Component
- Reusable component for article previews.
- Handles navigation to article detail page.
- Displays article metadata in a grid layout.
- Implements hover states for better UX.

### PaginationControls
- A wrapper around the `Pagination` component to extract the core functionality into a simpler reusable component.
- Provides a simpler API with just 3 props.
- Handles pagination logic internally without leaking the functionality into other components.

## 🛠 Development Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## 🚀 Deployment
The project includes Vercel configuration for deployment.




## 🔧 Additional Questions

### 1. Load time is critical for front-end applications. What techniques would you use to optimize load time for a news feed with a large number of articles? Provide a detailed written response.
To optimize load time for a large news feed:
- **Lazy Loading and Infinite Scrolling:** We can use React Query or custom hooks to implement infinite scrolling, fetching data only as the user scrolls down. This avoids loading all articles at once.
- **Data Caching:** By utilizing caching with tools like React Query or SWR we can prevent redundant network requests for already fetched articles.
- **Server-Side Pagination:** We can apply pagination in the backend to fetch only the required number of articles per page instead of the entire list.
- **CDN Usage:** Serve static assets, such as images and JavaScript bundles, from a Content Delivery Network (CDN) to reduce latency.
- **Image Optimization:** Using modern formats like WebP, and implementing lazy loading for images, we can optimize images sizes and load them only when visible.
- **Code Splitting:** Use Webpack or Vite to split the code into smaller chunks, loading only the required JavaScript for the current view.
- **Prefetching:** We can preload data for the next page while the user is viewing the current page.

### 2. AWS Cognito is often used for user authentication and management. How would you integrate AWS Cognito into a React front-end application to manage user login and authentication? Briefly explain your approach.
To implement Authentication and Authorization using AWS Cognito:
- **Setup Cognito User Pool:** We first create a user pool in the AWS Cognito console to manage user authentication.
- **Install AWS Amplify:** Then we use AWS Amplify which is an AWS library that provides an abstraction layer for interacting with AWS services.
- **User Authentication:** Use Amplify’s `Auth` module to implement signup, login, logout, and session management using AWS Congito.
- **Protect Routes:** Use higher-order components (HOCs) or context providers to manage authentication state and protect routes based on user auth states and roles.

### 3. Describe how you would implement a user commenting, liking, and sharing feature under every article. What tools, libraries, or frameworks would you use, and how would you structure your components?
To implement these features:
- **Commenting:**
  - **Frontend:** Ww can create a `CommentSection` component with a form for adding new comments and a list for displaying existing ones.
  - **Backend:** Implementing endpoints to fetch, add, and delete comments.
  - **Libraries:** Use `React Query` for fetching/updating comment data, and invalidate cache periodically to simulate real time data.

- **Liking:**
  - **Frontend:** We can create a `LikeButton` component with state management to toggle likes and update the count.
  - **Backend:** Implement an API endpoint to update the like count and store user interactions to prevent duplicate likes.
  - **Libraries:** Use state management libraries like `Redux` for state managemet and UI updates.

- **Sharing:**
  - **Frontend:** We can create a `ShareButton` component that integrates with the Web Share API for mobile devices and generates sharable URLs for desktop users.
  - **Libraries:** Use libraries like `react-share` to simplify sharing to platforms like Twitter or Facebook.
 
  These components will then be used in the ArticleCard and ArticlePage components.
