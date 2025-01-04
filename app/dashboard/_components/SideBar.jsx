"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { Coins, Grid, User } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { usePathname } from "next/navigation";
import CreateButton from "./CreateButton";

function SideBar() {
  const { UserDetail } = useContext(UserDetailContext);

  // Safely access the first user object from the array
  const user = UserDetail?.[0] ?? {}; // Access the first element of the array
  const Credits = user?.credits ?? 0; // Safely access credits with a fallback to 0

  const menuoptions = [
    {
      name: "DashBoard",
      icon: <Grid className="mr-2 w-5 h-5" />,
      path: "/dashboard",
    },
    {
      name: "Buy Credits",
      icon: <Coins className="mr-2 w-5 h-5" />,
      path: "/buy-credits",
    },
    {
      name: "Profile",
      icon: <User className="mr-2 w-5 h-5" />,
      path: "/dashboard/profile",
    },
  ];

  // Get the current path from `usePathname`
  const path = usePathname();

  // Ensure that Credits is a valid number and not NaN
  const safeCredits = !isNaN(Credits) ? Credits : 0; // Fallback to 0 if Credits is NaN

  return (
    <div className="w-64 fixed h-screen shadow-lg bg-yellow-300 flex flex-col py-6 px-4">
      <div className="mb-6 flex items-center space-x-4">
        <Image
          src="/logo.png"
          alt="FrameFlow Logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <span className="text-2xl font-bold text-gray-800 font-dancing-script">
          FrameFlow.AI
        </span>
      </div>
      <hr className="h-[2px] bg-black mb-4" />

      {/* Menu */}
      <CreateButton/>
      <div className="flex flex-col mt-4 space-y-4">
        {menuoptions.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className={`${
              path === item.path
                ? "bg-primary text-white"
                : "text-gray-800 hover:text-white hover:bg-blue-700"
            } flex items-center text-md font-bold px-4 py-2 rounded-md transition-all duration-300`}
          >
            {item.icon}
            {item.name}
          </a>
        ))}
      </div>

      {/* Total Usage Section */}
      <div className="p-3 border rounded-lg text-sm font-bold absolute bottom-10 bg-white w-56 justify-between shadow-xl">
        <h2 className="text-center text-xl underline">Total Usage</h2>
        <Progress
          className="my-5 mx-2 bg-red-600 text-white"
          value={Math.min(safeCredits * 10, 100)} // Ensure valid credits for the progress
        />
        <h2 className="text-md font-bold text-center">
          <span className="text-red-600">{10 - safeCredits}</span> out of 10
          minutes Used
        </h2>
      </div>
    </div>
  );
}

export default SideBar;
