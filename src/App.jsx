// React Router Dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import { RootLayout } from "./layouts/rootLayout";

// Pages
import { Home } from "./pages/Home/home";
import { Register } from "./pages/register/register";

// Styles
import { GlobalStyle } from "./styles/globalStyles";


// Context
import { GlobalContext } from "./context/globalContext";

// Hooks
import { useContext } from "react";

function App() {
  const { accessToken } = useContext(GlobalContext);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: accessToken ? <Home /> : <Register />,
        },
        {
          path: "/home",
          element: <Home />,
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
