import React, { useState, useEffect } from "react";
import axios from "axios";

function AxiosFun() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://dummyjson.com/users");
      setData(res.data.users);
    } catch (error) {
      console.log("fetch api error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={container}>
      {/* LEFT SIDE */}
      <div style={cardContainer}>
        {loading ? (
          <h2>Loading users...</h2>
        ) : (
          data.map((user) => (
            <div
              key={user.id}
              style={card}
              onClick={() => setSelectedUser(user)}
            >
              <h3>{user.firstName} {user.lastName}</h3>
              <p>{user.email}</p>
            </div>
          ))
        )}
      </div>

      {/* RIGHT SIDE */}
      <div style={detailsBox}>
        {loading ? (
          <h3>Please wait...</h3>
        ) : selectedUser ? (
          <>
            <h2>User Full Info</h2>
            <p><b>Name:</b> {selectedUser.firstName} {selectedUser.lastName}</p>
            <p><b>Gender:</b> {selectedUser.gender}</p>
            <p><b>Email:</b> {selectedUser.email}</p>
            <p><b>Phone:</b> {selectedUser.phone}</p>
            <p><b>Username:</b> {selectedUser.username}</p>
            <p><b>Birth Date:</b> {selectedUser.birthDate}</p>

            <button onClick={() => setSelectedUser(null)}>Close</button>
          </>
        ) : (
          <h3>Click on a user to see details</h3>
        )}
      </div>
    </div>
  );
}

/* styles */
const container = {
  display: "flex",
  gap: "20px",
};

const cardContainer = {
  width: "40%",
};

const card = {
  padding: "12px",
  marginBottom: "10px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  cursor: "pointer",
  backgroundColor: "#f9fafb",
};

const detailsBox = {
  width: "60%",
  padding: "16px",
  border: "1px solid #ddd",
  borderRadius: "8px",
};

export default AxiosFun;
