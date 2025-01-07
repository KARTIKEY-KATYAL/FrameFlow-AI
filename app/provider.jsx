"use client";

import { useUser } from "@clerk/nextjs"; // Clerk's hook for user info
import axios from "axios";
import React, { useState, useEffect } from "react";
import { UserDetailContext } from "./_context/UserDetailContext"; // Ensure these contexts exist
import { VideoFrameContext } from "./_context/VideoFrameContext";

function Provider({ children }) {
  const { user } = useUser(); // Get the user from Clerk
  const [UserDetail, setUserDetail] = useState(null); // Default to `null`
  const [VideoFrames, setVideoFrames] = useState([]); // Initialize with empty array

  useEffect(() => {
    // Save user info when the user object changes
    if (user) {
      SaveUserInfo(user);
    }
  }, [user]);

  const SaveUserInfo = async (userData) => {
    try {
      console.log("Saving user info:", userData); // Debug log for user data

      // Send the user info to the server
      const response = await axios.post("/api/user", { user: userData });

      if (response.status === 200) {
        console.log("User info saved successfully:", response.data);

        // Update UserDetail state with the response data
        setUserDetail(response.data);
      } else {
        console.warn("Failed to save user info. Server response:", response);
      }
    } catch (error) {
      console.error("Failed to save user info:", error.message);
    }
  };

  return (
    <UserDetailContext.Provider value={{ UserDetail, setUserDetail }}>
      <VideoFrameContext.Provider value={{ VideoFrames, setVideoFrames }}>
        {children}
      </VideoFrameContext.Provider>
    </UserDetailContext.Provider>
  );
}

export default Provider;
