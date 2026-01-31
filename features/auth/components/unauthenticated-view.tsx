import { ShieldAlertIcon } from "lucide-react";

import { Item,ItemActions,ItemContent,ItemDescription,ItemMedia,ItemTitle } from "@/components/ui/item";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const UnauthenticatedView = () => {
  return (

    <div className="flex items-center justify-center h-screen bg-background">

            <div className="w-full max-w-lg bg-muted">
                <Item variant="outline">
                    <ItemMedia variant="icon">
                        <ShieldAlertIcon className="h-6 w-6 text-muted-foreground" />   
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Unauthorized Access</ItemTitle>
                        <ItemDescription>Please sign in to access this content.</ItemDescription>

                    </ItemContent>
                    <ItemActions>
                            <SignInButton mode="modal">
                                <Button variant="outline" size="sm" className="text-white px-4 py-2 rounded ">
                                    Sign In
                                </Button>
                            </SignInButton>
                    </ItemActions>
                </Item>
            </div>
    </div>

  );
}