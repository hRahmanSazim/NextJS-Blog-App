import React from "react";
import { Params } from "@/app/blog/[id]/page";
const page = ({ params }: Params) => {
  return (
    <div className="flex items-center justify-center h-screen border-2 border-black">
      page
    </div>
  );
};

export default page;
