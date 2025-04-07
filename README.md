### I. 🌸 ZeldaWiki section 🌸
  #### Compendium section
  - This is the most important section in the website.
    ##### Task list
      1. Setup API to fetch data:
         - Fetch data from the API
         - Use React Query to manage the data
         - Handle sorting and filtering locally  
      2. Create CSS for:
         - Search bar
         - Filter icon
         - Card component
         - Card hover effect
         - 404 display
         - Modal component
      3. Create functions to handle data sorting 
      4. Favorite section
         - Create a favorite section to store the user's favorite items
         - Use local storage to persist the data
         - Create a function (button) to handle adding and removing items from favorites  
         - Button to clear all favorites
         - In the Modal component add a button to add the item to favorites list 

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