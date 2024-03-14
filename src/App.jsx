import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Saved from './components/Saved';
const App = () => {

  const [images, setImages] = useState([])
  const [search, setSearch] = useState("nature")
  const [loader, setLoader] = useState(true)
  const [saved, setSaved] = useState([])

  const API_KEY = "GUEaQW3iPha5rZGvUNWbr76H4yNxZZEBNnsVVIZhFul1qD81oLxaCp5M";

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`
        , {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      // console.log("response from API = ",res.data.photos);
      setImages(res.data.photos);
      setLoader(false)
      console.log(images);
    }

    fetchImage();
  }, [search])

 console.log("Image is saved", saved)

  return (
    <>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Home images={images} loader={loader} saved={saved} setSaved={setSaved} />} />
          <Route path='/saved' element={<Saved  saved = {saved} loader={loader} />} />

        </Routes>
      </Router>
    </>
  );
}

export default App

