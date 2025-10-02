import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

interface UserItemProps {
  id: string;
  image: string;
  name: string;
  placeCount: number;
}

const UserItem: React.FC<UserItemProps> = ({ id, image, name, placeCount }) => {
  return (
    <li className="m-4 w-[calc(45%-2rem)] min-w-[17.5rem]">
      <Card className="p-0">
        <Link
          to={`/${id}/places`}
          className="flex items-center w-full h-full no-underline p-4 text-white bg-gray-800 hover:bg-yellow-400 transition-colors"
        >
          <div className="w-16 h-16 mr-4">
            <Avatar image={image} alt={name} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl m-0 mb-2 font-normal text-yellow-400 group-hover:text-gray-800">
              {name}
            </h2>
            <h3 className="m-0 text-gray-300 group-hover:text-gray-800">
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
