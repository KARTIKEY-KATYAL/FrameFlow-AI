"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function DashBoard() {
  const [videoList, setVideoList] = useState([]);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Dashboard
      </h2>

      {/* Display a message when there are no videos */}
      {videoList.length === 0 && (
        <p className="text-lg text-center text-gray-600 mb-10">
          Let's create your first video!
        </p>
      )}

      {/* Show the creation options only if there are no videos */}
      {videoList.length === 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          {/* AI Creation Option */}
          <Link href={"/create-ai-video"}>
            <div className="flex flex-col items-center border-2 border-gray-300 rounded-lg p-6 bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Image
                src="/magic-wand.png"
                alt="Magic Wand"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="font-semibold text-xl text-gray-700">
                Create With AI
              </h3>
              <p className="text-gray-500 mt-2 text-center">
                Create amazing videos with the power of AI.
              </p>
            </div>
          </Link>

          {/* Manual Creation Option */}
          <Link href={"/editor"}>
            <div className="flex flex-col items-center border-2 border-gray-300 rounded-lg p-6 bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Image
                src="/video-editing.png"
                alt="Video Editing"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="font-semibold text-xl text-gray-700">
                Create From Scratch
              </h3>
              <p className="text-gray-500 mt-2 text-center">
                Create videos manually and unleash your creativity.
              </p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default DashBoard;
