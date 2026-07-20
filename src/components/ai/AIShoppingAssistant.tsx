"use client";

import { useState } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

type Message = {
  role: "assistant" | "user";
  text: string;
};

export default function AIShoppingAssistant() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "👋 Hello! I'm SmartCart AI. How can I help you today?",
    },
  ]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const { data } = await axiosInstance.post("/ai/chat", {
        message: userMessage,
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.data,
        },
      ]);
    } catch (error) {
      console.error(error);

      toast.error("AI response failed");

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-5xl py-16">
      <h2 className="mb-8 text-center text-4xl font-bold">
        AI Shopping Assistant
      </h2>

      <div className="rounded-3xl border bg-white p-6 shadow-xl dark:bg-slate-900">
        <div className="mb-6 h-[420px] space-y-5 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-md gap-3 rounded-2xl px-4 py-3 ${
                  msg.role === "assistant"
                    ? "bg-cyan-100 text-slate-800"
                    : "bg-cyan-500 text-white"
                }`}
              >
                {msg.role === "assistant" ? (
                  <Bot size={20} />
                ) : (
                  <User size={20} />
                )}

                <p>{msg.text}</p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 rounded-xl bg-cyan-100 px-4 py-3">
                <Loader2
                  className="animate-spin"
                  size={18}
                />
                Thinking...
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && handleSend()
            }
            placeholder="Ask SmartCart AI..."
            className="flex-1 rounded-xl border px-4 py-3 outline-none"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="rounded-xl bg-cyan-500 px-6 text-white hover:bg-cyan-600 disabled:opacity-50"
          >
            <Send />
          </button>
        </div>
      </div>
    </section>
  );
}