"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { VideoFrameContext } from "@/app/_context/VideoFrameContext";

// Default frame object
const defaultFrame = {
  image: "/footage.png",
  text: "Hello World",
  textcolor: "black",
  fontSize: 15,
  duration: 2,
};

function TrackList() {
  const [FrameList, setFrameList] = useState([defaultFrame]);
  const [selectedFrame, setSelectedFrame] = useState(0);

  // Access video frames and setter from context
  const { VideoFrames, setVideoFrames } = useContext(VideoFrameContext);

  const addNewFrame = () => {
    setFrameList((prev) => [...prev, { ...defaultFrame }]);
  };

  // Update the context whenever FrameList changes
  useEffect(() => {
    const duration = FrameList.reduce((sum, frame) => sum + frame.duration, 0);

    // Update the context with the new frames and total duration
    setVideoFrames({
      totalDuration: duration,
      FrameList,
    });
  }, [FrameList, setVideoFrames]);

  const selectFrame = (index) => {
    setSelectedFrame(index);
  };

  const deleteFrame = (index) => {
    setFrameList((prev) => prev.filter((_, i) => i !== index));
    if (selectedFrame === index) {
      setSelectedFrame((prev) => (prev === 0 ? 0 : prev - 1));
    }
  };

  return (
    <div className="p-3 w-44 h-[80vh] overflow-scroll scrollbar-hide rounded-lg text-gray-50 bg-gray-900">
      <h1 className="text-lg font-bold text-center text-white mb-5">
        Frame List
      </h1>

      <div className="flex flex-col space-y-4">
        {FrameList.map((frame, index) => (
          <div
            key={index}
            onClick={() => selectFrame(index)}
            className={`w-full flex flex-col items-center transition-all ${
              selectedFrame === index
                ? "bg-gradient-to-r from-green-400 to-green-600 shadow-lg text-white"
                : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
            } hover:scale-105 hover:shadow-xl rounded-lg p-4 text-center relative`}
          >
            <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-md">
              <Image
                src={frame.image}
                alt={`Frame ${index}`}
                layout="fill"
                objectFit="cover"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.png"; // Fallback image
                }}
              />
            </div>

            <div className="mt-3">
              <h2
                className="text-sm font-semibold"
                style={{
                  color: frame.textcolor,
                  fontSize: `${frame.fontSize}px`,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {frame.text}
              </h2>
            </div>

            <button
              aria-label={`Delete Frame ${index}`}
              className="absolute top-2 right-2"
              onClick={(e) => {
                e.stopPropagation(); // Prevent selecting the frame
                deleteFrame(index);
              }}
            >
              <Trash2 className="cursor-pointer text-red-400 hover:text-red-500 transition duration-200" />
            </button>
          </div>
        ))}
        <Button
          onClick={addNewFrame}
          className="w-auto mx-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 rounded-lg py-2 px-4 text-md font-medium transition-all shadow-lg hover:shadow-xl"
        >
          Add New Frame
        </Button>
      </div>
    </div>
  );
}

export default TrackList;
