import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, MessageCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

interface LearnerChatbotProps {
  learnerName: string;
  subjects: string[];
  weakSubjects: string[];
  currentMarks: number;
  targetMarks: number;
}

const LEARNER_RESPONSES: Record<string, (props: LearnerChatbotProps) => string> = {
  "how should i study": (props) => `Based on your profile, here's what I recommend:\n\n1. **Focus Areas**: Concentrate on ${props.weakSubjects.join(", ")}\n2. **Daily Time**: Allocate 45 minutes to weak subjects, 30 minutes to strong ones\n3. **Strategy**: Use revision for familiar topics, fresh learning for new concepts\n4. **Weekly Goal**: Aim to improve your average by 2-3% each week\n\nYou're currently at ${props.currentMarks}% with a target of ${props.targetMarks}%. You can reach that!`,

  "what should i focus on today": (props) => `Based on your weak areas (${props.weakSubjects.join(", ")}), I recommend:\n\n**Today's Focus**: Pick ONE weak subject\n- Review the topic you learned recently\n- Do 10 practice problems\n- Identify what you struggled with\n\n**This Week's Goal**: Complete all practice problems in two weak subjects\n\nFocus beats multitasking. Pick one subject and commit to 45 minutes.`,

  "i don't understand": () => `I can help! Tell me:\n1. Which subject?\n2. Which topic?\n3. What part confuses you?\n\nOnce you're specific, I can explain it step-by-step with examples.`,

  "can you explain": () => `Yes! But first, I need to know:\n\n1. **Which subject?** (Math, English, Science, etc.)\n2. **Which topic?** (Algebra, Shakespeare, Photosynthesis, etc.)\n3. **What part is confusing?**\n\nThen I'll break it down into simple steps with examples you can understand.`,

  "how do i improve my marks": (props) => `Here's the roadmap from ${props.currentMarks}% to ${props.targetMarks}%:\n\n**Step 1**: Identify gaps (you're struggling in ${props.weakSubjects.join(", ")})\n**Step 2**: Create a daily routine (45 min weak subjects, 30 min strong)\n**Step 3**: Practice consistently (10-15 problems daily)\n**Step 4**: Review weekly (identify mistakes, learn from them)\n**Step 5**: Track progress (you should see +1% improvement per week)\n\nDiscipline is key. No shortcuts.`,

  "i'm procrastinating": () => `Stop. Listen.\n\nProcrastination won't make exams easier. It makes them harder.\n\n**Here's what you do RIGHT NOW:**\n1. Close other apps\n2. Pick ONE subject\n3. Set a timer for 25 minutes\n4. Do 5 practice problems\n\nThat's it. Just start. Tell me when you're done.`,

  "what's my learning path": (props) => `Your personalized learning path:\n\n**Weak Subjects** (focus here): ${props.weakSubjects.join(", ")}\n**Strong Subjects** (maintain): ${props.subjects.filter(s => !props.weakSubjects.includes(s)).join(", ")}\n\n**Weekly Plan**:\n- Mon-Wed: Deep learning on weak subjects\n- Thu: Practice problems\n- Fri: Review and identify mistakes\n- Sat-Sun: Light revision of strong subjects\n\nThis path is designed to bring your marks from ${props.currentMarks}% to ${props.targetMarks}%.`,

  "am i on track": (props) => {
    const gap = props.targetMarks - props.currentMarks;
    const weeksNeeded = Math.ceil(gap / 2);
    
    return `Current status: ${props.currentMarks}% (Target: ${props.targetMarks}%)\n\nYou need to improve by ${gap}% over the next ${weeksNeeded} weeks.\n\n${props.currentMarks >= props.targetMarks - 10 ? "✓ You're on track! Keep momentum." : "✗ You're falling behind. Double your effort in weak areas."}`;
  },
};

const CHEATING_KEYWORDS = ["answer", "solution", "exam", "test", "assignment", "do my homework", "just give me"];

export function ChatbotLearner(props: LearnerChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: `Hi ${props.learnerName}! I'm your study assistant. I'm here to help you understand concepts, plan your study time, and keep you accountable to your learning path. Let's improve your grades together. What do you need help with?`,
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkForCheating = (message: string): boolean => {
    const lowerMessage = message.toLowerCase();
    return CHEATING_KEYWORDS.some((keyword) => lowerMessage.includes(keyword));
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Anti-cheating check
    if (checkForCheating(userMessage)) {
      const cheatResponses = [
        "I can't do your homework or give test answers. But I CAN help you understand the concepts. Tell me what part you're struggling with, and I'll explain it with an example.",
        "I don't work that way. Instead, let me help you learn the skill properly so you can answer questions confidently.",
        "That's not how this works. I'm here to build your understanding, not to give you shortcuts. What concept can I explain to you?",
      ];
      return cheatResponses[Math.floor(Math.random() * cheatResponses.length)];
    }

    // Find matching response
    for (const [key, responseFunc] of Object.entries(LEARNER_RESPONSES)) {
      if (lowerMessage.includes(key)) {
        return responseFunc(props);
      }
    }

    // Fallback
    const fallbacks = [
      `I understand. To help you better, tell me: Which subject are you working on right now? I can give you specific advice for ${props.weakSubjects.join(" or ")}.`,
      `Good question! I need more details. Are you asking about study strategies, a specific subject, or something else?`,
      `Let me help. Are you asking about:\n- How to study?\n- Your weak subjects?\n- Your learning path?\n- Something else?`,
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

  return (
    <Card className="h-full flex flex-col bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-primary" />
          Study Assistant
        </CardTitle>
        <CardDescription>Academic support & study guidance</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden flex flex-col">
        {/* Warning Banner */}
        <div className="mb-3 bg-amber-50 border border-amber-200 rounded-lg p-2 flex gap-2 items-start text-xs text-amber-900">
          <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <span>I explain concepts but don't give homework answers. Let's build real understanding.</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg text-sm whitespace-pre-wrap ${
                  msg.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-card border border-border px-4 py-2 rounded-lg">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex gap-2 pt-4 border-t">
          <Input
            placeholder="Ask for help..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            disabled={isLoading}
            className="text-sm"
          />
          <Button
            size="icon"
            onClick={handleSendMessage}
            disabled={!input.trim() || isLoading}
            className="bg-primary hover:bg-primary/90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
