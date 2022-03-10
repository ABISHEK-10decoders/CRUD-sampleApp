import './App.css';
import Header from "./compounds/Header"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./compounds/HomePage"
import AddPage from "./compounds/AddPage"
import EditPage from "./compounds/EditPage"

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
