import { Box } from "@chakra-ui/react";
import { TopBar } from "@/components/TopBar";
import { TodoList } from "@/components/TodoList";
import { TodoAdd } from "@/components/TodoAdd";
import { TodoSearch } from "@/components/TodoSearch";
import { InformationBar } from "@/components/InformationBar";
import { UsersList } from "@/components/UsersList";

export default function Home() {
  return (
    <div>
      <main>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar />
        <TodoList />
        <TodoAdd />
        <TodoSearch />
        <InformationBar />
        <Box mt={10}>
          <UsersList />
        </Box>
      </Box>
      </main>
    </div>
  );
}
