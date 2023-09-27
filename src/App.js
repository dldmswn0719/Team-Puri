import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Info from "./pages/Info";
import Store from "./pages/Store";
import Support from "./pages/Support";
import Qa_Input from "./pages/Qa_Input";
import Review_Input from "./pages/Review_Input";
import InfoDetail from "./pages/InfoDetail";
import Introduce from "./pages/Introduce";
import SupportPay from "./pages/SupportPay";
import PayComplete from "./pages/PayComplete";
import Review_Page from "./pages/Review_Page";
import Info_Test from "./components/Info_Test";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import Member from "./pages/Member";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { logIn, loggedIn } from "./store";
import { useEffect } from "react";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import Logout from "./components/Logout";
import Findemail from "./pages/Findemail";
import Notpage from "./pages/Notpage";


function App() {
  return (
    <>
        <Provider store={store}>
            <Inner />
        </Provider>
    </>
  );
}

function Inner() {
  const userState = useSelector(state => state.user)
  // console.log(userState);
  const dispatch = useDispatch();
  const uid = sessionStorage.getItem("users");
  // console.log(uid);

  useEffect(() => {
    if (uid) {
      dispatch(logIn(uid));
    }

    const fetchUser = async () => {
        if (!uid) return;

        const userDoc = doc(collection(getFirestore(), "users"), uid);
        // console.log(userDoc);

        try {
            const docSnapshot = await getDoc(userDoc);
            // console.log(docSnapshot);

            if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                // console.log(userData);
                dispatch(loggedIn(userData));
            }
        } catch(error) {
            // console.log(error);
        }
    }
    fetchUser();
}, [dispatch, uid]); 

const theme = useSelector(state => state.dark)
// console.log(theme)
if(theme === "light"){
    localStorage.removeItem(theme);
    document.documentElement.classList.remove("dark")
}else{
    document.documentElement.classList.add("dark");
    localStorage.setItem(theme,"dark");
}

  return (
   <>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/info" element={<Info />}></Route>
      <Route path="/info2" element={<Info_Test />}></Route>
      <Route path="/infodetail/:desertionNo" element={<InfoDetail />}></Route>
      <Route path="/introduce" element={<Introduce />}></Route>
      <Route path="/review_page" element={<Review_Page />}></Route>
      <Route path="/store/:id" element={<Store />}></Route>
      <Route path="/support" element={<Support />}></Route>
      <Route path="/supportpay" element={<SupportPay />}></Route>
      <Route path="/paycomplete" element={<PayComplete />}></Route>
      <Route path="/review_input" element={<Review_Input />}></Route>
      <Route path="/qa_input" element={<Qa_Input />}></Route>
      <Route path="/mypage" element={<Mypage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path="/member" element={<Member />}></Route>
      <Route path="/modify" element={<Member />}></Route>
      <Route path="/findemail" element={<Findemail />}></Route>
      <Route path="/*" element={<Notpage />}></Route>
    </Routes>
   </>
  );
}

export default App;
