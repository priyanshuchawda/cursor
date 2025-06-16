
import { create } from 'zustand';

export interface CursorSettings {
  intensity: number;
  speed: number;
  color: string;
  size: number;
}

interface CursorStore {
  settings: Record<string, CursorSettings>;
  updateCursorSettings: (cursorId: string, settings: Partial<CursorSettings>) => void;
  getCursorSettings: (cursorId: string) => CursorSettings;
}

const defaultSettings: CursorSettings = {
  intensity: 50,
  speed: 50,
  color: '#00ffff',
  size: 50
};

export const useCursorStore = create<CursorStore>((set, get) => ({
  settings: {},
  
  updateCursorSettings: (cursorId: string, newSettings: Partial<CursorSettings>) =>
    set((state) => ({
      settings: {
        ...state.settings,
        [cursorId]: {
          ...get().getCursorSettings(cursorId),
          ...newSettings
        }
      }
    })),
    
  getCursorSettings: (cursorId: string) => {
    const state = get();
    return state.settings[cursorId] || defaultSettings;
  }
}));
