import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<about />} />
      </Routes>
    </BrowserRouter>
  )
}
