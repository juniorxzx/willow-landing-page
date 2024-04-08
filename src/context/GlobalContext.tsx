'use client'

import React, { createContext, useState, useMemo, ReactNode } from "react";

interface ContextType {
    themes: string;
    setThemes: (theme: string) => void;
}

const DEFAULT_VALUE: ContextType = {
    themes: '',
    setThemes: () => {}
};

export const GlobalContext = createContext<ContextType>(DEFAULT_VALUE);

export function GlobalProvider({ children }: { children: ReactNode }) {
    const [themes, setThemes] = useState<string>('light');

    const memoizedValue = useMemo(
        () => ({
            themes,
            setThemes
        }),
        [themes]
    );

    return (
        <GlobalContext.Provider value={memoizedValue}>
            {children}
        </GlobalContext.Provider>
    );
}