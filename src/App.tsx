import "./App.css";
import HomePage from "./Pages/Homepage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header/Header";
import BrowsShoesPage from "./Pages/BrowseShoesPage/BrowsShoesPage";
import ShoePage from "./Pages/ShoePage/ShoePage";
import { QueryClient, QueryClientProvider } from "react-query";
import AddShoePage from "./Pages/AddShoePage/AddShoePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Shoes",
        element: <BrowsShoesPage />,
      },
      {
        path: "/ShoePage/:id",
        element: <ShoePage />,
      },
      {
        path: "/addItem",
        element: <AddShoePage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
