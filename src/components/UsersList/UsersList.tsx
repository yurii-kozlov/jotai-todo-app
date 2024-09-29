'use client'

import { loadableUsersAtom, userNameAtom } from "@/store/user";
import { Checkbox, Flex, Heading, ListItem, List, Text, Input } from "@chakra-ui/react";
import { useAtom, useAtomValue } from "jotai";
import { ReactElement } from "react";

export const UsersList = (): ReactElement => {
  const usersState = useAtomValue(loadableUsersAtom);
  const [userName, setUserName] = useAtom(userNameAtom);

  if (usersState.state === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (usersState.state === 'hasError') {
    const errorMessage = usersState.error instanceof Error ? usersState.error.message : 'An error occurred';
    return <Text>{errorMessage}</Text>;
  }

  return (
    <div>
      <Heading mb={4}>Users List</Heading>
      <Input
        mb={2}
        maxWidth={300}
        placeholder="Enter your name"
        onChange={(event) => setUserName(event.target.value)}
      />
      <Text mb={2}>Your name: {userName}</Text>
      <List mb={3}>
        {usersState.data.map(({ id, name }) => (
          <ListItem key={id}>
            <Flex>
              <Checkbox />
              <Text ml={4}>{name}</Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
