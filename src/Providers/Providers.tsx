"use client";

import { ChakraProvider, theme } from "@chakra-ui/react";
import { Provider as JotaiProvider } from "jotai";
import { FC, ReactElement, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }): ReactElement => {
  return (
    <ChakraProvider theme={theme}>
      <JotaiProvider>{children}</JotaiProvider>
    </ChakraProvider>
  );
};
