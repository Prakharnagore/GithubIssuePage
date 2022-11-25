import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components Imports
const Header = lazy(() => import("./Components/header/Header.js"));
const IssuesPage = lazy(() => import("./pages/IssuesPage.js"));
const SingleIssuePage = lazy(() => import("./pages/SingleIssuePage.js"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<IssuesPage />} />
          <Route exact path="/:issue" element={<SingleIssuePage />} />
          <Route exact path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
