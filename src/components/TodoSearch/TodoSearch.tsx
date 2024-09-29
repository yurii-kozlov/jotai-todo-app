'use client'

import { resetSearchQueryAtom, todoSearchQueryAtom } from "@/store/todo";
import { Button, Grid, Input } from "@chakra-ui/react";
import { useAtom, useSetAtom } from "jotai";

export const TodoSearch = () => {
  const [searchQuery, setSearchQuery ] = useAtom(todoSearchQueryAtom);
  const resetSearchQuery = useSetAtom(resetSearchQueryAtom);

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="Todo query"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <Button disabled={!searchQuery} onClick={resetSearchQuery}>
        Clear search query
      </Button>
    </Grid>
  );
};