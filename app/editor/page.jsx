import React from "react";
import Header from "../dashboard/_components/Header";
import { Button } from "@/components/ui/button";
import TrackList from "./_components/TrackList";
import VideoEditor from "./_components/VideoPlayer";
import ControlSection from "./_components/ControlSection";

function Editor() {
  return (
    <div>
      <Header />
      <div className="p-10 md:px-24 lg:px-32">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-3xl text-gray-800">Edit Video</h2>
          <Button className="bg-red-600 p-3 font-bold text-lg hover:bg-red-700 transition-colors duration-300">
            Export
          </Button>
        </div>

        {/* Layout Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Track List Section */}
          <div className="bg-green-50 p-6 h-96 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Track List
            </h3>
            {/* Add content here for track list */}
            <TrackList/>
          </div>

          {/* Video Player Section */}
          <div className="bg-green-50 p-6 h-96 col-span-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Video Player
            </h3>
            {/* Add video player component here */}
            <VideoEditor/>
          </div>

          {/* Control Section */}
          <div className="bg-green-50 p-6 h-96 col-span-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Control Section
            </h3>
            {/* Add control buttons or other content */}
            <ControlSection/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
