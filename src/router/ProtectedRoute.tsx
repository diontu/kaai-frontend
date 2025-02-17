import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/clerk-react";
import { PropsWithChildren } from "react";

export function ProtectedRoute({
  children,
}: PropsWithChildren): React.ReactNode {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="mb-4 text-lg font-medium">You must sign in to continue</p>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </div>
    );
  }

  return children;
}
