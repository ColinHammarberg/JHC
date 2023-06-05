import JhcLanding from './components/JhcLanding';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ProblemUtilization } from './components/ProblemUtilization';

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
            path={`/problems`}
            element={<ProblemUtilization />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
