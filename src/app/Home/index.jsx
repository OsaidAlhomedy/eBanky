import React, { useEffect, useState } from "react";
import NavBar from "../../Components/Shared/Navbar";
import { getUserData } from "../../services/userServices";

function Home() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);

  const fetchUserData = async () => {
    const fetchedData = await getUserData();
    console.log(fetchedData);
    setData(fetchedData);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    return () => {
      setUser(null);
    };
  }, []);

  useEffect(() => {
    fetchUserData();
    return () => {
      setData(null);
    };
  }, []);

  return (
    <div className="w-screen h-screen">
      <NavBar />
      <div id="detail"></div>
    </div>
  );
}

export default Home;
