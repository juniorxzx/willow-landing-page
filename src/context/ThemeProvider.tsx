'use client'

import { darkTheme, lightTheme } from "@/assets/styles/theme";
import { PropsWithChildren, useContext, useState } from "react";
import { ThemeProvider } from "styled-components"
import { GlobalContext } from "./GlobalContext";

interface ThemeProviderProps extends PropsWithChildren<{}> {

}

export const ThemeProviderNext: React.FC<ThemeProviderProps> = ({ children }) => {
    const { themes } = useContext(GlobalContext)

    return (
        <ThemeProvider theme={themes == 'light' ? lightTheme : darkTheme}>
            {children}
        </ThemeProvider>
    );
};