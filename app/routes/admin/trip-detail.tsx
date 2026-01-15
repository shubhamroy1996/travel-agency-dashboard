import type { LoaderFunctionArgs } from "react-router"
import { getTripById } from "~/appwrite/trip"
import type { Route } from './+types/trip-detail';
import { parseTripData } from "~/lib/utils";
import { Headers } from "components";


//The params in the below loader function is like :id => params.id => 123
export const loader = async ({params}: LoaderFunctionArgs) => {
  const {tripId} = params

  if(!tripId)
    throw new Error ('Trip id is required')

  const trip = await getTripById(tripId)

  return trip
}

const TripDetail = ({loaderData}: Route.ComponentProps) => {
  const tripData = parseTripData(loaderData?.trip)
  return (
   <main className="travel-detail wrapper">
    <Headers title="Trip Details" description="View and edit AI-generated travel plans"  />
   </main>

  )
}

export default TripDetail
