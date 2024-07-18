import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from 'react-dom'; // Import ReactDOM

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
