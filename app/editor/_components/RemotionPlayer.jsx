"use client";
import React, { useState, useContext } from "react";
import { Player } from "@remotion/player";
import { Fullscreen } from "lucide-react";
import RemotionComposition from "./RemotionComposition";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VideoFrameContext } from "@/app/_context/VideoFrameContext";

function RemotionPlayer() {
  const { VideoFrames = { totalDuration: 0, FrameList: [] } } =
    useContext(VideoFrameContext);

  const [screenSize, setScreenSize] = useState({
    width: 500,
    height: 300,
  });

  const handleValueChange = (value) => {
    try {
      const parsedValue = JSON.parse(value);
      setScreenSize(parsedValue);
    } catch (err) {
      console.error("Error parsing JSON from Select value:", err);
    }
  };

  const handleFullscreen = () => {
    const playerElement = document.querySelector(".remotion-player-container");
    if (playerElement?.requestFullscreen) {
      playerElement.requestFullscreen();
    } else {
      console.warn("Fullscreen mode is not supported on this browser.");
    }
  };

  return (
    <div className="p-5">
      <div
        className="flex items-center justify-center bg-gray-100 p-4 rounded-lg remotion-player-container"
        style={{
          position: "relative",
          maxWidth: `${screenSize.width}px`,
          maxHeight: `${screenSize.height}px`,
        }}
      >
        {VideoFrames.totalDuration > 0 ? (
          <Player
            component={RemotionComposition}
            durationInFrames={Math.ceil(VideoFrames.totalDuration * 30)} // Calculate frames based on total duration
            compositionWidth={screenSize.width}
            compositionHeight={screenSize.height}
            fps={30}
            controls
            style={{
              borderRadius: "6px",
              overflow: "hidden",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Optional styling
            }}
          />
        ) : (
          <p className="text-gray-500">No video frames available</p>
        )}
      </div>

      <div className="mt-5 flex gap-2 items-center">
        <button
          aria-label="Enter Fullscreen Mode"
          onClick={handleFullscreen}
          className="p-2 rounded hover:bg-gray-200 transition"
        >
          <Fullscreen />
        </button>

        <Select onValueChange={handleValueChange}>
          <SelectTrigger
            className="w-[180px] bg-gray-50 border border-gray-300 rounded text-gray-800"
            aria-label="Select Aspect Ratio"
          >
            <SelectValue placeholder="16:9" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={JSON.stringify({ width: 400, height: 400 })}>
              1:1
            </SelectItem>
            <SelectItem value={JSON.stringify({ width: 500, height: 300 })}>
              16:9
            </SelectItem>
            <SelectItem value={JSON.stringify({ width: 300, height: 500 })}>
              9:16
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default RemotionPlayer;
