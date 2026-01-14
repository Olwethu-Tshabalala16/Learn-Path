import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, MessageCircle, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const GENERAL_RESPONSES: Record<string, string> = {
  "how does learnpath work": "LearPath is an educational platform that helps students and teachers succeed together. Students get personalized learning paths based on their school reports, while teachers can create and share videos, lesson plans, and track student progress.",
  
  "what are study paths": "Study paths are personalized learning plans created by our AI based on your school report. They identify your weak subjects and recommend specific topics to focus on to improve your grades.",
  
  "how do teachers upload videos": "Teachers can upload educational videos from their dashboard. Our AI automatically generates summaries, and learners can rate and comment on videos to create an engaging learning community.",
  
  "what subjects are available": "LearPath covers all major secondary subjects including Mathematics, English Literature, Biology, Chemistry, Physics, History, Geography, Computer Science, Economics, Business Studies, Physical Education, and Art & Design.",
  
  "how do i get started": "Visit the Login page and choose whether you're a Learner or Teacher. Learners upload their school report to get personalized recommendations. Teachers select their subject specialization.",
  
  "what is a learning path": "A learning path is a structured sequence of topics tailored to help you improve in specific subjects. It's created based on your current performance and recommends daily study time and weekly goals.",
  
  "can i track my progress": "Yes! The Learner Dashboard shows your progress bar for each subject, current performance vs target grades, and an overall progress percentage through your learning path.",
  
  "what resources are available": "We offer study materials (PDFs), video tutorials, interactive tools (grammar checker, math solver), podcasts, past exam papers, and online courses.",
  
  "how does the chatbot help": "The Learner Assistant helps you understand concepts, plan study time, and stay accountable. It explains topics at your level and keeps you on track with your learning path.",
  
  "what is the careers section": "The Careers section helps you explore career options, find bursaries you qualify for, and get links to university and college applications.",
};

const SUGGESTED_QUESTIONS = [
  "How does LearPath work?",
  "What are study paths?",
  "How do I get started?",
  "What resources are available?",
  "How does the chatbot help?",
];

export function ChatbotGeneral() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi! I'm the LearPath General Assistant. I can help you understand how the platform works, our features, and answer questions about getting started. What would you like to know?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for exact or partial matches
    for (const [key, response] of Object.entries(GENERAL_RESPONSES)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Fallback responses
    const fallbacks = [
      "That's a great question! Can you be more specific? For example, you could ask about study paths, how to get started, or what resources we offer.",
      "I'm here to help with platform questions. Try asking about features, getting started, or specific tools available on LearPath.",
      "I want to give you accurate information. Could you rephrase your question about LearPath's features or how to use the platform?",
    ];

    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length,
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const botMessage: Message = {
        id: messages.length + 1,
        text: botResponse,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 800);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <Card className="h-full flex flex-col bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-blue-600" />
          LearPath Assistant
        </CardTitle>
        <CardDescription>Ask me about how LearPath works</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
          {messages.map((msg, idx) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 border border-blue-200"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 border border-blue-200 px-4 py-2 rounded-lg">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100" />
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="mb-4 space-y-2">
            <p className="text-xs text-gray-600 font-medium">Quick questions:</p>
            <div className="grid gap-1">
              {SUGGESTED_QUESTIONS.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="text-left text-xs bg-white hover:bg-blue-50 border border-blue-200 rounded px-3 py-2 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="flex gap-2 pt-4 border-t border-blue-200">
          <Input
            placeholder="Ask anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            disabled={isLoading}
            className="text-sm border-blue-200"
          />
          <Button
            size="icon"
            onClick={handleSendMessage}
            disabled={!input.trim() || isLoading}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
