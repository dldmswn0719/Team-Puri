import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import Main from "./pages/Main";
import Info from "./pages/Info";
import StorePage from "./pages/StorePage";
import Support from "./pages/Support";
import InfoDetail from "./pages/InfoDetail";
import Introduce from "./pages/Introduce";
import SupportPay from "./pages/SupportPay";
import PayComplete from "./pages/PayComplete";
import Review_Page from "./pages/Review_Page";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import Member from "./pages/Member";
import Findemail from "./pages/Findemail";
import Notpage from "./pages/Notpage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { SuccessPage } from "./pages/SuccessPage";
import { FailPage } from "./pages/FailPage";
import store, { logIn, loggedIn, toggleTheme } from "./store";


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

  const dispatch = useDispatch();
  const uid = sessionStorage.getItem("users");

  useEffect(() => {
    if (uid) {
      dispatch(logIn(uid));
    }

    const fetchUser = async () => {
        if (!uid) return;

        const userDoc = doc(collection(getFirestore(), "users"), uid);

        try {
            const docSnapshot = await getDoc(userDoc);

            if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                dispatch(loggedIn(userData));
            }
        } catch(error) {
            // console.log(error);
        }
    }
    fetchUser();
}, [dispatch, uid]); 

  const darkMode  = useSelector(state => state.dark)

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme && savedTheme !== darkMode) {
      dispatch(toggleTheme());
    }

  }, [dispatch]);

  useEffect(() => {

    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [darkMode]);

  const language = useSelector(state => state.language);
  
  useEffect(() => {

    if (localStorage.getItem("language") !== language) {
      localStorage.setItem("language", language);
    }

  }, [language]);
   
  return (
   <>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/info" element={<Info />}></Route>
      <Route path="/infodetail/:desertionNo" element={<InfoDetail />}></Route>   
      <Route path="/introduce" element={<Introduce />}></Route>
      <Route path="/review_page" element={<Review_Page />}></Route>
      <Route path="/store/:id" element={<StorePage />}></Route>
      <Route path="/support" element={<Support />}></Route>
      <Route path="/supportpay" element={<SupportPay />}></Route>
      <Route path="/paycomplete" element={<PayComplete />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path="/member" element={<Member />}></Route>
      <Route path="/modify" element={<Member />}></Route>
      <Route path="/findemail" element={<Findemail />}></Route>
      <Route path="/checkout" element={<CheckoutPage />}></Route>
      <Route path="/success" element={<SuccessPage />}></Route>
      <Route path="/fail" element={<FailPage />}></Route>
      <Route path="/*" element={<Notpage />}></Route>
    </Routes>
   </>
  );
}

export default App;
