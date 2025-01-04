import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function CreateButton() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-blue-950 text-white p-6 hover:font-extrabold font-semibold mx-1 my-2 text-xl rounded-lg">
            + Create New Video
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center font-semibold text-2xl">
              Let’s Create a New Video
            </DialogTitle>
            <DialogDescription className="text-center">
              Choose how you'd like to create your video.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col space-y-4 mt-6">
            {/* AI Creation Option */}
            <Link href={'/create-ai-video'}>
            <div className="flex flex-col items-center border rounded-lg p-4 bg-gray-50 hover:bg-gray-300 cursor-pointer">
              <Image
                src="/magic-wand.png"
                alt="Magic Wand"
                width={40}
                height={40}
                className="mb-3"
              />
              <h2 className="font-semibold text-lg">Create With AI</h2>
            </div>
            </Link>
            {/* Manual Creation Option */}
            <Link href={'/editor'}>
            <div className="flex flex-col items-center border rounded-lg p-4 bg-gray-50 hover:bg-gray-300 cursor-pointer">
              <Image
                src="/video-editing.png"
                alt="Magic Wand"
                width={40}
                height={40}
                className="mb-3"
              />
              <h2 className="font-semibold text-lg">Create From Scratch</h2>
            </div>
          </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateButton;
