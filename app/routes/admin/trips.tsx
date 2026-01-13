import { Headers } from "components";
import React from "react";

const trips = () => {
  return (
    <main className="all-users wrapper">
     <Headers
        title="Trips"
        description="View and edit AI-generated travel plans"
        ctaText="Create a trip"
        ctaUrl="/trips/create"
      />
    </main>
  );
};

export default trips;
