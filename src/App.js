import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Info from "./pages/Info";
import Review from "./pages/Review";
import Store from "./pages/Store";
import Support from "./pages/Support";
import Qa_Input from "./pages/Qa_Input";
import Review_Input from "./pages/Review_Input";
import InfoDetail from "./pages/InfoDetail";
import Introduce from "./pages/Introduce";
import SupportPay from "./pages/SupportPay";
import PayComplete from "./pages/PayComplete";

function App() {
  return (
   <>
   <Routes>
     <Route path="/" element={<Main />}></Route>
     <Route path="/info" element={<Info />}></Route>
     <Route path="/introduce" element={<Introduce />}></Route>
     <Route path="/infodetail/:desertionNo" element={<InfoDetail />}></Route>
     <Route path="/review" element={<Review />}></Route>
     <Route path="/store/:id" element={<Store />}></Route>
     <Route path="/support" element={<Support />}></Route>
     <Route path="/supportpay" element={<SupportPay />}></Route>
     <Route path="/paycomplete" element={<PayComplete />}></Route>
     <Route path="/review_input" element={<Review_Input />}></Route>
     <Route path="/qa_input" element={<Qa_Input />}></Route>
   </Routes>
   </>
  );
}

export default App;
