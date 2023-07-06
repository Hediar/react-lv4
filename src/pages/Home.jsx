import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { Button } from "../components/Button";

function Home() {
  return (
    <>
      <Header />
      <div>
        HOME
        <Button color="#000000">전체</Button>
        <Button color="#000000">진행중</Button>
        <Button color="#000000">완료 목록</Button>
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default Home;
