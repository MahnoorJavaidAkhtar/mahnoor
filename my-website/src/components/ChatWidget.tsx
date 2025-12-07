import React, { useState, useRef, useEffect } from "react";
import "../css/chatbot.css";

const BACKEND_URL = "http://localhost:8000/ask";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef<any>(null);

  // 🎤 Voice Recognition Setup
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.lang = "en-US";
      recog.continuous = false;

      recog.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        setUserInput(text);
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

  // ⌨ Typewriter Effect
  const typeWriter = (text: string, callback: Function) => {
    let index = 0;
    let display = "";

    const interval = setInterval(() => {
      display += text[index];
      callback(display);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, 20);
  };

  // Auto Scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ⭐ AUTO WELCOME MESSAGE WHEN CHAT OPENS
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMsg = {
        sender: "bot",
        text: `👋 Hi! I'm your MJ AI assistant.  
Ask me anything about Physical AI, ROS2, Gazebo, Isaac Sim, or Humanoid Robotics!  
I can also explain any part of your textbook — just type your question.`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages([welcomeMsg]);
    }
  }, [isOpen]);

  // ➤ Send Message
  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessage = {
      sender: "user",
      text: userInput,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setUserInput("");
    setLoading(true);

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userInput }),
      });

      const data = await res.json();
      const botText = data.answer || "No response 😢";

      let temp = {
        sender: "bot",
        text: "",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, temp]);

      typeWriter(botText, (typed: string) => {
        temp.text = typed;
        setMessages((prev) => [...prev.slice(0, -1), { ...temp }]);
      });
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Backend unreachable.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="chat-particles"></div>

      {/* Floating Orb Button */}
      <button
        className={`chatbot-button 
          ${loading ? "orb-thinking" : ""} 
          ${isListening ? "orb-listening" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="orb-core"></div>
        <div className="orb-waves"></div>
        <div className="orb-rotate"></div>
      </button>

      {isOpen && <div className="neon-overlay"></div>}

      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="chatbot-window fade-in-scale">
          <div className="chatbot-header">
            <div className="hologram-bot"></div>
            <span>MJ AI Chatbot</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-row ${msg.sender}`}>
                <div className={`chat-message ${msg.sender}`}>{msg.text}</div>
                <div className="timestamp">{msg.time}</div>
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



