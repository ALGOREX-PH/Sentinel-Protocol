import React from 'react';
import { MessageCircle, X, Send, Loader2, Volume2, Brain } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
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
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all transform hover:scale-105 ${
          isOpen ? 'bg-sentinel-secondary hover:bg-sentinel-crimson' : 'bg-sentinel-cyan hover:bg-sentinel-teal'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[95vw] sm:w-96 max-h-[80vh] h-[600px] bg-sentinel-dark-900/95 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col border border-sentinel-dark-700 animate-in fade-in slide-in-from-bottom-4">
          <div className="p-4 bg-gradient-to-r from-sentinel-dark-900 to-sentinel-dark-800 rounded-t-2xl border-b border-sentinel-dark-700">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-sentinel-cyan" />
              <h3 className="text-white font-semibold">Sentinel AI Assistant</h3>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-2 max-w-[85%] ${message.role === 'assistant' ? 'animate-in slide-in-from-left-2' : 'animate-in slide-in-from-right-2'}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-sentinel-cyan to-sentinel-teal text-white px-4 py-3'
                        : 'bg-sentinel-dark-700/80 text-sentinel-white px-4 py-3'
                    }`}
                  >
                    <ReactMarkdown
                      className="prose prose-invert prose-sm max-w-none"
                      components={{
                        p: ({ children }) => <p className="m-0">{children}</p>,
                        ul: ({ children }) => <ul className="list-disc pl-4 my-2 space-y-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal pl-4 my-2 space-y-1">{children}</ol>,
                        li: ({ children }) => <li className="my-1">{children}</li>,
                        code: ({ children }) => (
                          <code className="bg-sentinel-dark-900/70 rounded px-1.5 py-0.5 text-sm font-mono">
                            {children}
                          </code>
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                  {message.role === 'assistant' && (
                    <button
                      onClick={() => playAudio(message.content)}
                      className="p-1.5 hover:bg-sentinel-dark-700/50 rounded-full transition-all hover:scale-110"
                      disabled={audioPlaying}
                    >
                      <Volume2 className={`h-4 w-4 transition-colors ${audioPlaying ? 'text-sentinel-teal animate-pulse' : 'text-sentinel-cyan'}`} />
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-sentinel-dark-700">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-5 py-3 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="p-3 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg hover:opacity-90 disabled:opacity-50 transition-all hover:scale-105 shadow-lg"
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