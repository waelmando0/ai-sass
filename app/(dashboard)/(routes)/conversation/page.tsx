import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import React from "react";

const Conversation = () => {
  return (
    <div className="p-4">
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        explicabo!
      </div>
    </div>
  );
};

export default Conversation;
