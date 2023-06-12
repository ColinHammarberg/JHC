import JhcLanding from './components/JhcLanding';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Welcome } from './components/Welcome';
import { Utalization } from './components/Utalization';
import JhcContextProvider from './context/JhcContext';
import { Actions } from './components/Actions';
import { Bookings } from './components/Bookings';

function App() {
  console.log("app", process.env.REACT_APP_BASEURL);
  return (
    <div className="App">
      <JhcContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
                path={`/`}
                element={<JhcLanding />}
              />
            <Route
              path={`/welcome`}
              element={<Welcome />}
            />
            <Route
              path={`/utalization`}
              element={<Utalization />}
            />
            <Route
              path={`/actions`}
              element={<Actions />}
            />
            <Route
              path={`/bookings`}
              element={<Bookings />}
            />
          </Routes>
        </BrowserRouter>
      </JhcContextProvider>
    </div>
  );
}

export default App;
