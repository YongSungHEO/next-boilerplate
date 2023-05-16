import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SampleState {
    isGnb: boolean,
    setIsGnb: (value: boolean) => void,
}

const store = (set: any) => ({
    isGnb: false,
    setIsGnb: (value: boolean) => set({ isGnb: value }),
});

export const useModalStore = create<SampleState>()(
    process.env.NODE_ENV === 'production' ? store : devtools(store)
);
