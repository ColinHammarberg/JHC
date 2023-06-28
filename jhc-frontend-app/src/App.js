import JhcLanding from './components/JhcLanding';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Welcome } from './components/Welcome';
import { Utalization } from './components/Utalization';
import JhcContextProvider from './context/JhcContext';
import { Actions } from './components/Actions';
import { Bookings } from './components/Bookings';
import CustomerCases from './components/CustomerCases';
import SpceLanding from './components/SpceLanding';

function App() {
  console.log("app", process.env.REACT_APP_BASEURL);
  return (
    <div className="App">
      <JhcContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path={process.env.REACT_APP_BASEURL}
              element={<JhcLanding />}
            />
            <Route
              path={`${process.env.REACT_APP_BASEURL}/welcome`}
              element={<Welcome />}
            />
            <Route
              path={`${process.env.REACT_APP_BASEURL}/utalization`}
              element={<Utalization />}
            />
            <Route
              path={`${process.env.REACT_APP_BASEURL}/actions`}
              element={<Actions />}
            />
            <Route
              path={`${process.env.REACT_APP_BASEURL}/bookings`}
              element={<Bookings />}
            />
            <Route
              path={`${process.env.REACT_APP_BASEURL}/customercases`}
              element={<CustomerCases />}
            />
            <Route
              path={`${process.env.REACT_APP_BASEURL}/spce`}
              element={<SpceLanding />}
            />
          </Routes>
        </BrowserRouter>
      </JhcContextProvider>
    </div>
  );
}

export default App;
