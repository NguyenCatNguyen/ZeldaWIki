<h1 align="center">🗡️ ZeldaWiki Compendium</h1>

<div align="center">
     This project is a comprehensive interactive compendium for the Legend of Zelda series, built with React and Tailwind CSS. It allows users to explore various items, weapons, and creatures from the game universe, complete with filtering options and a favorites system.
</div>

## ⚙️ Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## 🖥️ Live Demo
<a href="https://nguyencatnguyen.github.io/ZeldaWIki/" target="_blank">
  Visit ZeldaWiki Compendium
</a>


## 🌟 Features
- Modal system for detailed item view
- Filter with category and search bar
- Responsive design for mobile and desktop
- Favorites system with local storage

## 🛠️ Implementation Details

### 🗃️ ZeldaWiki Compendium
The core component featuring game data from the Zelda universe.

#### API Integration
- Fetched data from [BotW Compendium API](https://botw-compendium.herokuapp.com/)
- Implemented React Query for data management:
  - Automatic caching and background updates
  - Loading and error states handling
  - Optimized performance with stale-while-revalidate

#### UI Components
- **Search & Filter System**:
  - Dynamic search functionality
  - Category/type filters
- **Card Components**:
  - Responsive grid layout
  - Interactive hover effects
- **Modal System**:
  - Detailed item view
  - Favorite toggle functionality

#### Favorites System
- Local storage persistence
- Add/remove individual items
- Clear all favorites option
- Visual indicators for favorited items


### II. 🌸 Tailwind CSS 🌸 
  #### Custom scrollbar area
  - `overflow-y-scroll`: This class enables vertical scrolling on the element.
  - `scrollbar-thin`: This class applies a thin scrollbar style to the element.
  - `scrollbar-thumb-gray-500`: This class sets the color of the scrollbar thumb (the draggable part of the scrollbar) to a gray shade.
  - `scrollbar-track-gray-200`: This class sets the color of the scrollbar track (the area where the thumb moves) to a light gray shade.
  ```jsx
  <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
  </div>
  ```

### III. 🌸  API Function using React Query 🌸 
- `React Query` (also known as TanStack Query): is a library that provides hooks and utilities for managing, caching, and syncing asynchronous and remote data in React applications.

  #### 1. Setup React Query ⭐️
    - Install React Query
      ```bash
      npm i @tanstack/react-query
      ```
    - Setup React Query in the `main.jsx` file
  
      ```jsx
      import { StrictMode } from 'react'
      import { createRoot } from 'react-dom/client'
      import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
      import './index.css'
      import App from './App.jsx'

      // 'QueryClient' like a manager that keep track of all the queries in the app
      // 'QueryClientProvider' is a wrapper component that makes the 'QueryClient' available to the rest of the app
      const queryClient = new QueryClient()

      createRoot(document.getElementById('root')).render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
        </StrictMode>,
      )
      ```

  #### 2. Fetch Data ⭐️
    - Public API
  
      ```jsx
        import { useQuery } from '@tanstack/react-query';

        // Fetch data from API
        const fetchData = async () => {
          const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/all');
          if (!response.ok) throw new Error("API fetch failed");
          const res = await response.json();
          return res.data;
        }
        
        // Use React Query hook directly in the component
        const { data, isLoading, isError } = useQuery({
          queryKey: ['compendium'],
          queryFn: fetchData,
        });
        
        if (isLoading) return <div>Loading...</div>;
        if (isError) return <div>Error fetching data: {isError.message}</div>;
      ```

### 🌸 🌸 Function Setup 🌸 🌸
```jsx
function myComponent(){
  const data = (text) =>{
    console.log(text);
  }
  return(
    <button onClick={() => data("Hello")}>Click me</button>
  )
}
```


