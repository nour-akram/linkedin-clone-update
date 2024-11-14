import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomPage from "./Components/WelcomePage";
import {  useDispatch } from "react-redux";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { getUserAuth } from "./redux/actions";
import { useEffect } from "react";
import RequirAuth from "./Components/RequirAuth";
import StayLogin from "./Components/StayLogin";
// import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const Dispatch=useDispatch()
 
  useEffect(() => {
    Dispatch(getUserAuth()); // Initialize user on app load
  }, [Dispatch]);
  return (
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={ 
            <StayLogin>
                <WelcomPage />
            </StayLogin>
             
          }/>
          <Route path="/home"  element={
            <RequirAuth>
              <Header/>
              <Home/>
             </RequirAuth>
          }/>
        </Routes>
      </Router>

  );
}


export default App;
