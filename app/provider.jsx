"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect } from "react";

function Provider({ children }) {
  const { user } = useUser(); // Get the user from Clerk

  useEffect(() => {
    // Save user info when the user object changes or is initially available
    if (user) {
      SaveUserInfo(user);
    }
  }, [user]);

  const SaveUserInfo = async (userData) => {
    try {
      // Send the user info to the server using POST request
      await axios.post("/api/user", { user: userData });

      console.log("User info saved successfully");
    } catch (error) {
      console.error("Failed to save user info", error);
    }
  };

  return <>{children}</>;
}

export default Provider;
