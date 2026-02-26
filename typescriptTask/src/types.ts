export type UserRole = "admin" | "editor" | "viewer";

export type User = {
  name: string;
  role: UserRole;
};

export function assignRole(user: User): void {
  console.log(`${user.name} is assigned as ${user.role}`);
}
