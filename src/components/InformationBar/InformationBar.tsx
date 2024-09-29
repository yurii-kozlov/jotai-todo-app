'use client'

import { informationBarAtom } from "@/store/todo";
import { Flex, Text } from "@chakra-ui/react";
import { useAtomValue } from "jotai";

export const InformationBar = () => {
  const { totalTodosCount, foundTodosCount } = useAtomValue(informationBarAtom);

  return (
    <Flex gap={10} pt={2}>
      <Text>Total todos: {totalTodosCount}</Text>
      {foundTodosCount > 0 && (
        <Text>Found todos: {foundTodosCount}</Text>
      )}
    </Flex>
  );
};
