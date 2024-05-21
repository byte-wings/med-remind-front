// React Router Dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import { RootLayout } from "./layouts/rootLayout";

// Pages
import { Home } from "./pages/Home/home";

// Styles
import { GlobalStyle } from "./styles/globalStyles";
import { Register } from "./pages/register/register";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <div>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
