import React, { useState, useEffect } from "react";
import axios from "axios";

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseURL = "http://localhost:5000"; 
        const response = await axios.get(`${baseURL}/api/getAll`);
        const strippedData = response.data.map((item) => {
          const datePosted = new Date(item.datePosted);
          // Extract date part
          const dateOnly = datePosted.toISOString().split("T")[0];
          // Return updated item
          return { ...item, datePosted: dateOnly };
        });

        setData(strippedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {data.map((item) => (
        <div key={item._id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <p>{item.datePosted}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
