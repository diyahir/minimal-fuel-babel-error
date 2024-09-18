import { VStack, Grid, HStack, GridItem } from "@chakra-ui/react";
import { ActivePoolContract } from "../types/active-pool-contract";
import { useEffect } from "react";
export const Home = () => {
  useEffect(() => {
    console.log(ActivePoolContract.abi);
  }, []);
  return (
    <HStack
      justifyContent={"space-around"}
      display={"flex"}
      spacing={12}
      justifyItems={"flex-start"}
    >
      <VStack alignSelf={"center"} spacing={8} minW={["", "", "", "500px"]}>
        <Grid
          templateColumns={"repeat(2, 1fr)"}
          gap={6}
          justifyContent={"center"}
        >
          <GridItem colSpan={2}>Hello</GridItem>
        </Grid>
      </VStack>
    </HStack>
  );
};
