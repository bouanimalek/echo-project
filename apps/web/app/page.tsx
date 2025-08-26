import { useQuery } from "convex/react";
import { api } from "@workspace/backend/convex/_generated";

export default function Page() {
  const users = useQuery(api.users.getMany);
  return (
    <div className="flex items-center justify-center min-h-svh">
      <p>Apps/Web</p>
      <p>{JSON.stringify(users)}</p>
    </div>
  );
}
