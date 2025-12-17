import React, { useState, useRef, useEffect } from "react";
import "../css/chatbot.css";

// ✅ FINAL BACKEND URL
const BACKEND_URL = "https://mahnoor-production.up.railway.app/ask";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.lang = "en-US";
      recog.continuous = false;

      recog.onresult = (event: any) => {
        setUserInput(event.results[0][0].transcript);
      };

      recog.onend = () => setIsListening(false);
      recognitionRef.current = recog;
    }
  }, []);

  const startVoiceInput = () => {
    if (!recognitionRef.current) return;
    setIsListening(true);
    recognitionRef.current.start();
  };

  const typeWriter = (text: string, cb: (v: string) => void) => {
    let i = 0;
    let out = "";
    const t = setInterval(() => {
      out += text[i++];
      cb(out);
      if (i >= text.length) clearInterval(t);
    }, 20);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text:
            "👋 Hi! I'm your MJ AI assistant.\nAsk me anything about Physical AI, ROS2, Gazebo, Isaac Sim, or Humanoid Robotics!",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMsg = {
      sender: "user",
      text: userInput,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((p) => [...p, userMsg]);
    setUserInput("");
    setLoading(true);

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMsg.text }),
      });

      const data = await res.json();
      let bot = { sender: "bot", text: "", time: userMsg.time };

      setMessages((p) => [...p, bot]);
      typeWriter(data.answer || "No response 😢", (t) => {
        bot.text = t;
        setMessages((p) => [...p.slice(0, -1), { ...bot }]);
      });
    } catch {
      setMessages((p) => [
        ...p,
        { sender: "bot", text: "⚠️ Backend unreachable.", time: userMsg.time },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        🤖
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div key={i}>{m.text}</div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask something..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </>
  );
}




