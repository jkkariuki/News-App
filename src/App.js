import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import axios from "axios";
import ArticlePage from "./pages/ArticlePage";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Business from "./pages/Business";

function App() {
  const categories = ["top-news", "sports", "technology", "business"];

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home topHeadlines category={categories[0]} />}
          />
          <Route path="/sports" element={<Sports category={categories[1]} />} />
          <Route
            path="/technology"
            element={<Technology category={categories[2]} />}
          />
          <Route
            path="/business"
            element={<Business category={categories[3]} />}
          />

          <Route
            path="/:category/articles/:id"
            element={<ArticlePage categories={categories} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
