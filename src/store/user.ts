import { User } from "@/types/user";
import { atom } from "jotai";
import { atomWithStorage, loadable } from "jotai/utils";
import { userService } from "@/services/UserService";

export const usersAtom = atom<User[]>([]);

export const fetchUsersAtom = atom(async () => {
  const users = await userService.getUsers();

  return users;
});

export const loadableUsersAtom = loadable(fetchUsersAtom);
export const userNameAtom = atomWithStorage('userName', '');
