import Home from "./Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ViewDetails from "./ViewDetails";

function App() {
  return (
   <BrowserRouter>
   
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/summary/:id?" element={<ViewDetails />} />
      
      </Routes>
   </BrowserRouter>
  );
}

export default App;
