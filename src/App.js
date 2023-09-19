import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Info from "./pages/Info";
import Review from "./pages/Review";
import Store from "./pages/Store";
import Support from "./pages/Support";
import Qa_Input from "./pages/Qa_Input";
import Review_Input from "./pages/Review_Input";


function App() {
  return (
   <>
   <Routes>
     <Route path="/" element={<Main />}></Route>
     <Route path="/info" element={<Info />}></Route>
     <Route path="/review" element={<Review />}></Route>
     <Route path="/store/:id" element={<Store />}></Route>
     <Route path="/support" element={<Support />}></Route>
     <Route path="/review_input" element={<Review_Input />}></Route>
     <Route path="/qa_input" element={<Qa_Input />}></Route>
   </Routes>
   </>
  );
}

export default App;
