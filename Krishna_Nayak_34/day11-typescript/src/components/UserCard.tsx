import { User } from "../types/User";

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps): JSX.Element => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginTop: "10px" }}>
      <h3>User Card</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Status: {user.isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  );
};

export default UserCard;
