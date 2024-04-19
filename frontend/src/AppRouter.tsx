import { Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import Layout from "./layouts/layout";
import AddContacts from "./Components/AddContacts";
import AllContacts from "./Components/AllContacts";
import Test from "./Components/Test";
import { useLocation, useNavigate } from "react-router-dom";
const AppRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  if (location.pathname == "/") {
    navigate("/AllContacts");
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <App />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
      <Route
        path="/AddContacts"
        index
        element={
          <Layout>
            <AddContacts />
          </Layout>
        }
      />
      <Route
        path="/AllContacts"
        element={
          <Layout>
            <AllContacts />
          </Layout>
        }
      />
      <Route
        path="/Test"
        element={
          <Layout>
            <Test />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRouter;
