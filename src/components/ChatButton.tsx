import React from 'react';
import { MessageCircle, X, Send, Loader2, Volume1 } from 'lucide-react';
import useChatStore from '../store/chatStore';

export default function ChatButton() {
  const { isOpen, isLoading, audioPlaying, messages, toggleChat, sendMessage, playAudio } = useChatStore();
  const [input, setInput] = React.useState('');
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    await sendMessage(input);
    setInput('');
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-colors ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-sentinel-dark-800 rounded-2xl shadow-xl flex flex-col border border-sentinel-dark-700">
          <div className="p-4 bg-sentinel-dark-900 rounded-t-2xl border-b border-sentinel-dark-700">
            <h3 className="text-white font-semibold">AI Assistant</h3>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-start gap-2">
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.role === 'user'
                        ? 'bg-sentinel-cyan text-white px-4 py-3 text-center'
                        : 'bg-sentinel-dark-700 text-sentinel-white px-4 py-3 text-center'
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.role === 'assistant' && (
                    <button
                      onClick={() => playAudio(message.content)}
                      className="p-1 hover:bg-sentinel-dark-700 rounded-full transition-colors"
                      disabled={audioPlaying}
                    >
                      <Volume1 className="h-4 w-4 text-sentinel-cyan hover:text-sentinel-teal transition-colors" />
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-sentinel-dark-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-5 py-3 rounded-lg bg-sentinel-dark-700 border-none text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="p-2 bg-sentinel-cyan text-white rounded-lg hover:bg-sentinel-teal disabled:opacity-50 transition-colors"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>              
            </div>
          </form>
        </div>
      )}
    </>
  );
}