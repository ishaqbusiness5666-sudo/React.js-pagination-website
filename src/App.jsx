import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './components/Card';
import Footer from './components/Footer';

const App = () => {
  const [Data, setUserData] = useState([])
  const [index, setIndex] = useState(1);
  const [idxNum, setIdxNum] = useState(
    Array.from({ length: 200 }, (_, i) => i + 1)
  );

  // geting data
  async function GetData() {
    const response = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=8`);
    const ApiData = await response.json()
    setUserData(ApiData);
  }
  useEffect(function () {
    GetData();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  },[index])
  return (
    <div>
      <Card Data={Data} />
      <Footer setIndex={setIndex} index={index} setUserData={setUserData} idxNum={idxNum} />
    </div>
  )
}

export default App
