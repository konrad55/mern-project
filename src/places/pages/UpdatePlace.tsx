import React from "react";
import { useParams } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";

const UpdatePlace: React.FC = () => {
  const { placeId } = useParams<{ placeId: string }>();

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Update Place</h2>
        <p className="text-gray-600">Place ID: {placeId}</p>
        <p className="text-gray-600">
          This page will contain a form to update the selected place.
        </p>
      </Card>
    </div>
  );
};

export default UpdatePlace;
