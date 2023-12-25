import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useStateValue } from "./App/StateProvider";
import { useEffect } from "react";
import { auth } from "./lib/Firebase";
import { Layout } from "./comonents/Layout/Layout";
import { Checkout, Home, Login } from "./pages";
function App() {
  const [{ baset, user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // Clean up the subscription to avoid memory leaks
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Layout children={<Login />} />} />
          <Route
            path="/checkout"
            element={<Layout children={<Checkout />} />}
          />
          <Route path="/" element={<Layout children={<Home />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
