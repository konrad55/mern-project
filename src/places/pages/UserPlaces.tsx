import React from "react";
import { useParams } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";

const UserPlaces: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Card>
        <h2 className="text-2xl font-bold mb-4">User Places</h2>
        <p className="text-gray-600">User ID: {userId}</p>
        <p className="text-gray-600">
          This page will show places for the selected user.
        </p>
      </Card>
    </div>
  );
};

export default UserPlaces;
