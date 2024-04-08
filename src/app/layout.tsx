import type { Metadata } from "next";
import { Inter, Kameron } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import GlobalStyle from "@/assets/styles/globalStyles";
import { ThemeProviderNext } from "@/context/ThemeProvider";
import Header from "@/components/Header/Header";
import { GlobalProvider } from "@/context/GlobalContext";


const inter = Kameron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Willow",
  description: "Landing Page",
  keywords: [
    'agency',
    'agência',
    'marketing digital',
    'digital agency',
    'langin page'
  ]


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <GlobalProvider>
          <StyledComponentsRegistry>
            <ThemeProviderNext>
              <GlobalStyle />
              <Header />
              {children}
            </ThemeProviderNext>
          </StyledComponentsRegistry>
        </GlobalProvider>
      </body>
    </html>
  );
}
