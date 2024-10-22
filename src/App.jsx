import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const data = [
    {
      name: "Card 1",
      description: "This is card 1 description",
      img: "https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg",
    },
    {
      name: "Card 2",
      description: "This is card 2 description",
      img: "https://t4.ftcdn.net/jpg/05/06/36/71/360_F_506367145_aTN8tLqtKXDYxzHQs5DH4HGsbVT9OgMn.jpg",
    },
    {
      name: "Card 3",
      description: "This is card 3 description",
      img: "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
    },
    {
      name: "Card 4",
      description: "This is card 4 description",
      img: "https://t4.ftcdn.net/jpg/02/11/11/15/360_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg",
    },
    {
      name: "Card 5",
      description: "This is card 5   description",
      img: "https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg",
    },
    {
      name: "Card 3",
      description: "This is card 3 description",
      img: "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
    },
    {
      name: "Card 4",
      description: "This is card 4 description",
      img: "https://t4.ftcdn.net/jpg/02/11/11/15/360_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg",
    },
    {
      name: "Card 5",
      description: "This is card 5   description",
      img: "https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg",
    },
  ];

  return (
    <>
      <div className="bg-black pt-5 flex justify-center flex-col p-10">
        <h1 className="text-center text-3xl  text-cyan-600">
          All the Cards are here
        </h1>
        <div className="flex flex-wrap p-5 gap-y-6 gap-x-4">
          <Card data={data}/>
        </div>
      </div>
    </>
  );
}

export default App;
