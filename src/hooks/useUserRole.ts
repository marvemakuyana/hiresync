import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const useUserRole = () => {
  const { user } = useUser();
  const userData = useQuery(api.users.getUserByClerkId, {
    clerkId: user?.id || "",
  });
  const isLoading = userData === undefined; //if userData is = undefined, it is in a loading state
  return {
    isLoading,
    isInterviwer: userData?.role === "interviewer",
    isCandidate: userData?.role === "candidate",
  };
};
