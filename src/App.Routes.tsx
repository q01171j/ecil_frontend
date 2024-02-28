import { Routes, Route } from "react-router-dom";
import { Home, About } from "@routes";
import { Layout } from "@layouts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { scrollSlice } from "@features/scroll/scrollSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      dispatch(scrollSlice.actions.setScrollY(scrollY));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/nosotros"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
