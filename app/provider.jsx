"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useState, useEffect } from "react"; // Add `useState` import
import { UserDetailContext } from "./_context/UserDetailContext"; // Ensure this context file exists

function Provider({ children }) {
  const { user } = useUser(); // Get the user from Clerk
  const [UserDetail, setUserDetail] = useState([]); // Initialize with a default value

  useEffect(() => {
    // Save user info when the user object changes
    if (user) {
      SaveUserInfo(user);
    }
  }, [user]);

  const SaveUserInfo = async (userData) => {
    try {
      // Send the user info to the server using POST request
      const response = await axios.post("/api/user", { user: userData });
      if (response.status === 200) {
        console.log("User info saved successfully");

        // Update UserDetail state with the response data
        setUserDetail(response.data);

        console.log(response.data);
      } else {
        console.warn("Failed to save user info. Server response:", response);
      }
    } catch (error) {
      console.error("Failed to save user info:", error);
    }
  };

  return (
    <UserDetailContext.Provider value={{ UserDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export default Provider;
