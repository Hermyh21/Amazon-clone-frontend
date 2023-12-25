import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./assets/lib/StateProvider";
import { useEffect } from "react";
import { auth } from "./assets/lib/Firebase";
import { Login } from "./pages/Login/Login";
import { Checkout } from "./pages/Checkout/Checkout";
import { Home } from "./pages/Home/Home";
import Header from "./pages/Header/Header";
function App() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
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
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
