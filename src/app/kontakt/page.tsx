import React from "react";
import Header from "../components/header";

const Page = () => {
  return (
    <main className="bg-black">
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl text-white">Kontakt</h1>
        <p className="text-white mt-4"></p>
      </div>
    </main>
  );
};

export default Page;
