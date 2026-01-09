import { OAuthProvider, Query } from "appwrite"
import { account, appwriteConfig, database } from "./client"
import { redirect } from "react-router"

export const loginWithGoogle = async () => {
  try {
    account.createOAuth2Session(
      OAuthProvider.Google,
      `${window.location.origin}/`,
      `${window.location.origin}/404`
    )

  } catch (error) {
    console.log("Error during OAuth2 session:", error)

  }
}

export const getExistingUser = async (id: string) => {
  try {
    const { documents, total } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountId", id)]
    )
    return total > 0 ? documents[0] : null
  } catch (error) {
    console.log("Error fetching user", error)
    return null

  }
}

export const getUser = async () => {
  try {
    const user = await account.get();
    if (!user) return redirect("/sign-in");

    const { documents } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [
        Query.equal("accountId", user.$id),
        Query.select(["name", "email", "imageUrl", "joinedAt", "accountId"]),
      ]
    );

    return documents.length > 0 ? documents[0] : redirect("/sign-in");
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const getGooglePicture = async () => {
  try {
    const user = await account.get();
    if (!user) return null;

    // Get the OAuth2 session to access the provider account info
    const sessions = await account.listSessions();
    const googleSession = sessions.sessions.find(
      (session) => session.provider === "google"
    );

    if (!googleSession) return null;

    // Fetch profile info from Google People API
    const response = await fetch(
      "https://people.googleapis.com/v1/people/me?personFields=photos",
      {
        headers: {
          Authorization: `Bearer ${googleSession.providerAccessToken}`,
        },
      }
    );

    if (!response.ok) return null;

    const data = await response.json();
    const photoUrl = data.photos?.[0]?.url;

    return photoUrl || null;
  } catch (error) {
    console.error("Error fetching Google profile picture:", error);
    return null;
  }
}

export const getAllUsers = async (limit: number, offset: number) => {
  try {
    const { documents: users, total } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.limit(limit), Query.offset(offset), Query.orderDesc("$createdAt")]
    );

    return { users, total };
  } catch (error) {
    console.error("Error fetching users:", error);
    return { users: [], total: 0 };
  }
};

export const logoutUser = async () => {
  try {
    await account.deleteSession('current')
  } catch(error) {
    console.log("Error during logout:", error )
  }
}

