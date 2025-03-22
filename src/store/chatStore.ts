import { create } from 'zustand';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatState {
  messages: Message[];
  isOpen: boolean;
  isLoading: boolean;
  audioPlaying: boolean;
  addMessage: (message: Message) => void;
  toggleChat: () => void;
  sendMessage: (content: string) => Promise<void>;
  playAudio: (text: string) => Promise<void>;
}

const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  isOpen: false,
  isLoading: false,
  audioPlaying: false,

  addMessage: (message) => set((state) => ({
    messages: [...state.messages, message]
  })),

  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),

  sendMessage: async (content) => {
    try {
      set({ isLoading: true });
      get().addMessage({ role: 'user', content });

      // Initialize Gemini AI
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

      // Generate response
      const result = await model.generateContent(content);
      const response = await result.response;
      const responseText = response.text();

      get().addMessage({ role: 'assistant', content: responseText });
      await get().playAudio(responseText);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  playAudio: async (text) => {
    try {
      set({ audioPlaying: true });
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/CwhRBWXzGAHq8TQ4Fs17', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': import.meta.env.VITE_ELEVENLABS_API_KEY || '',
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to generate speech: ${errorData.detail?.message || 'Unknown error'}`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audioElement = new Audio(audioUrl);
      
      audioElement.onended = () => {
        set({ audioPlaying: false });
        URL.revokeObjectURL(audioUrl);
      };

      await audioElement.play();
    } catch (error) {
      console.error('Error playing audio:', error);
      set({ audioPlaying: false });
    }
  }
}));

export default useChatStore;