import React, { useState, useRef, useEffect } from "react";
import "../css/chatbot.css";

// ✅ FINAL BACKEND (Railway)
const BACKEND_URL = "https://mahnoor-production.up.railway.app/ask";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const recognitionRef = useRef<any>(null);

  // 🎤 Voice Recognition
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

  // ✨ Typewriter effect
  const typeWriter = (text: string, cb: (v: string) => void) => {
    let i = 0;
    let out = "";
    const t = setInterval(() => {
      out += text[i++];
      cb(out);
      if (i >= text.length) clearInterval(t);
    }, 20);
  };

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 👋 Welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: `👋 Hi! I'm your MJ AI assistant.
Ask me anything about Physical AI, ROS2, Gazebo, Isaac Sim, or Humanoid Robotics!
I can also explain any part of your textbook — just type your question.`,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }
  }, [isOpen]);

  // 🚀 Send Message
  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMsg = {
      sender: "user",
      text: userInput,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
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

      let bot = {
        sender: "bot",
        text: "",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((p) => [...p, bot]);

      typeWriter(data.answer || "No response 😢", (t) => {
        bot.text = t;
        setMessages((p) => [...p.slice(0, -1), { ...bot }]);
      });
    } catch {
      setMessages((p) => [
        ...p,
        {
          sender: "bot",
          text: "⚠️ Backend unreachable.",
          time: userMsg.time,
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="chat-particles"></div>

      {/* Floating Orb */}
      <button
        className={`chatbot-button ${
          loading ? "orb-thinking" : ""
        } ${isListening ? "orb-listening" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="orb-core"></div>
        <div className="orb-waves"></div>
        <div className="orb-rotate"></div>
      </button>

      {isOpen && <div className="neon-overlay"></div>}

      {isOpen && (
        <div className="chatbot-window fade-in-scale">
          <div className="chatbot-header">
            <div className="hologram-bot"></div>
            <span>MJ AI Chatbot</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-row ${m.sender}`}>
                <div className={`chat-message ${m.sender}`}>
                  {m.text}
                </div>
                <div className="timestamp">{m.time}</div>
              </div>
            ))}

            {loading && (
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          <div className="chatbot-input">
            <button
              className={`mic-button ${isListening ? "mic-active" : ""}`}
              onClick={startVoiceInput}
            >
              🎤
            </button>

            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}



