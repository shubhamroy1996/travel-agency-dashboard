export const appwriteConfig = {
  endpointUrl: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
  projectId: import.meta.env.VITE_APPRWRITE_PROJECT_ID,
  apiKey: import.meta.env.VITE_APPWRITE_API_KEY,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  usersCollectionId: import.meta.env.VITE_APPRWRITE_USERS,
  tripsCollectionId: import.meta.env.VITE_APPWRITE_TRIPS,

}