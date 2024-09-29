import { User } from "@/types/user";

class UserService {
  private apiUrl: string = process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_API ?? '';

  constructor(){}

  public async getUsers(): Promise<User[]> {
    try {
      const response = await fetch(`${this.apiUrl}/users`);
      const users = await response.json();

      return users;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error happened: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }

  }
}

export const userService = new UserService();
