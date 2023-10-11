import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* Navigation Bar Component */}
        <NavBar />
        {/* Routes is assigned for the components with values passed */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
