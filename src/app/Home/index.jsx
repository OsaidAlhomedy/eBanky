import React, { useEffect, useState } from "react";
import NavBar from "../../Components/Shared/Navbar";
import { getUserData } from "../../services/userServices";
import Dashboard from "../Dashboard";

function Home() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);

  const fetchUserData = async () => {
    const fetchedData = await getUserData();
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
      <Dashboard user={user} transactions={data} />
    </div>
  );
}

export default Home;
