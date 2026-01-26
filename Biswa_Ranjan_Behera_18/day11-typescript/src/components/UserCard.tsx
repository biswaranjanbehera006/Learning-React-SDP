import type { User } from "../types/user"

type UserCardProps = {
  user: User
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-72">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  )
}

export default UserCard
