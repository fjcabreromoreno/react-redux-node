import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./modules/Home";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
}

export default App;
