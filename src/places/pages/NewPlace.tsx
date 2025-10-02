import React from "react";
import Card from "../../shared/components/UIElements/Card";

const NewPlace: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Add New Place</h2>
        <p className="text-gray-600">
          This page will contain a form to add a new place.
        </p>
      </Card>
    </div>
  );
};

export default NewPlace;
