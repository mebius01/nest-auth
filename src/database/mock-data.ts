export const users_role: { id: number; role: string }[] = [
  { id: 1, role: "user" },
  { id: 2, role: "moderator" },
  { id: 3, role: "admin" },
];

export const users: { id: string; email: string; name: string; user_role_id: number }[] = [
  {
    id: "US-278H-2MG8",
    email: "jhon_doe@gmail.com",
    name: "jhon_doe",
    user_role_id: 1,
  },
  {
    id: "US-4FL0-XRAN",
    email: "james_smith@gmail.com",
    name: "james_smith",
    user_role_id: 1,
  },
  {
    id: "US-57QE-JQ2U",
    email: "robert_johnson@gmail.com",
    name: "robert_johnson",
    user_role_id: 1,
  },
  {
    id: "US-CHX6-1K72",
    email: "michael_brown@gmail.com",
    name: "michael_brown",
    user_role_id: 1,
  },
  {
    id: "US-3EOM-9X08",
    email: "david_miller@gmail.com",
    name: "david_miller",
    user_role_id: 1,
  },
];

export const auth_local: { id: number; user_id: string; password_hash: string }[] = [
  {
    id: 1,
    user_id: "US-278H-2MG8",
    password_hash: "$2b$10$SO.4g3MrNrR0.2SCYYig8uUOFMI/Uga9JL3Yn4qdLQHfPluoYT8cu",
  },
  {
    id: 2,
    password_hash: "$2b$10$fI54XC0cB4PSrWdYVK75NOKZJyb8DzIReU9UWQxi8FWlccadEBlry",
    user_id: "US-4FL0-XRAN",
  },
  {
    id: 3,
    password_hash: "$2b$10$Uu4TAv99YWjJBxx48XhFmeVnoEAPIVHTTBtzysKmtmUdMvjmS6rhi",
    user_id: "US-57QE-JQ2U",
  },
  {
    id: 4,
    password_hash: "$2b$10$bz86iKS8C7BLKFAA77kjTOz5yqAryhIBFRmF9gEGH2.tpU6WlUIRi",
    user_id: "US-CHX6-1K72",
  },
  {
    id: 5,
    password_hash: "$2b$10$.6v9q7715.RfEFrrrDPCvOoKfjNY5FR424tCCtU7R21Jl8l380fHu",
    user_id: "US-3EOM-9X08",
  },
];

export const auth_sessions: { id: number; user_id: string; session: string }[] = [];
