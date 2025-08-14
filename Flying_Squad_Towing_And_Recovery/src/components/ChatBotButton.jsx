import React from "react";
import { Bot } from "lucide-react";

const ChatBotButton = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="group relative">
        <div className="absolute right-full bottom-full mb-2 mr-2 hidden w-48 rounded-lg bg-gray-800 p-2 text-white text-sm opacity-0 transition-opacity duration-300 group-hover:block group-hover:opacity-100 md:w-60">
          <p className="font-bold">Hey, speak to Bob, your AI assistant</p>
          <div className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 translate-x-1/2 rotate-45 transform bg-gray-800"></div>
        </div>
        <button
          onClick={onClick}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300"
          aria-label="Open chat with Bob"
        >
          <Bot size={36} />
        </button>
      </div>
    </div>
  );
};

export default ChatBotButton;
