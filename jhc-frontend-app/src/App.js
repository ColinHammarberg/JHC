import JhcLanding from './components/JhcLanding';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Welcome } from './components/Welcome';
import { Utalization } from './components/Utalization';
import JhcContextProvider from './context/JhcContext';
import { Meetings } from './components/Actions';

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
              path={`/meetings`}
              element={<Meetings />}
            />
            <Route
              path={`/meetings`}
              element={<Meetings />}
            />
          </Routes>
        </BrowserRouter>
      </JhcContextProvider>
    </div>
  );
}

export default App;
