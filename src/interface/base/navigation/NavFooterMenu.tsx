import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const NavFooterMenu = (): JSX.Element => {
  const renderAuthMenu = (): JSX.Element => {
    return (
      <div>
        <SignedOut>
          <SignInButton mode="modal">
            <Button className="w-full">Sign in</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton
            showName
            appearance={{
              elements: {
                rootBox: "w-full",
                userButtonTrigger: "w-full p-2",
              },
            }}
          />
        </SignedIn>
      </div>
    );
  };

  return renderAuthMenu();
};

export default NavFooterMenu;
