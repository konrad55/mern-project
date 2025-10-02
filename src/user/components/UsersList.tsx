import React from "react";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import type { User } from "../../types";

interface UsersListProps {
  items: User[];
}

const UsersList: React.FC<UsersListProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Card>
          <h2 className="text-xl font-semibold text-gray-700">
            No users found.
          </h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="list-none m-0 p-0 w-[90%] max-w-[50rem] mx-auto flex justify-center flex-wrap">
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
