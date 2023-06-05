import JhcLanding from './components/JhcLanding';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Welcome } from './components/Welcome';
import { Utalization } from './components/Utalization';

function App() {
  console.log("app", process.env.REACT_APP_BASEURL);
  return (
    <div className="App">
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
