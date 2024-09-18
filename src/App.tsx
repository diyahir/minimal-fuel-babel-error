import { ChakraProvider } from "@chakra-ui/react";

import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";

import { FuelProvider } from "@fuel-wallet/react";

export const App = () => {
  return (
    <BrowserRouter>
      <FuelProvider
        fuelConfig={{
          devMode: true,
        }}
      >
        <ChakraProvider>
          <AppRoutes />
        </ChakraProvider>
      </FuelProvider>
    </BrowserRouter>
  );
};
