import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [sweets, setSweets] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSweets = async () => {
      try {
        const res = await axios.get("http://localhost:3001/sweets");
        setSweets(res.data);
      } catch (err) {
        console.error(err);
        setError("Backend se data nahi aa raha");
      }
    };

    fetchSweets();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Welcome to Sweet Shop</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {sweets.length === 0 && !error && <p>Loading...</p>}

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {sweets.map(sweet => (
          <div key={sweet.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
            <h3>{sweet.name}</h3>
            <p>₹{sweet.price}</p>
            <p>Qty: {sweet.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
