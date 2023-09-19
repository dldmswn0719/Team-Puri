import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Info from "./pages/Info";
import Review from "./pages/Review";
import Store from "./pages/Store";
import Support from "./pages/Support";


function App() {
  return (
   <>
   <Routes>
     <Route path="/" element={<Main />}></Route>
     <Route path="/info" element={<Info />}></Route>
     <Route path="/review" element={<Review />}></Route>
     <Route path="/store" element={<Store />}></Route>
     <Route path="/support" element={<Support />}></Route>
   </Routes>
   </>
  );
}

export default App;
