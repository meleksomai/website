"use client";
import { signIn, signOut } from "next-auth/react";

import { Button } from "@thugga/ui";

export function SignOut() {
  return (
    <Button variant="simple" onClick={() => signOut()}>
      Logout
    </Button>
  );
}

export function SignIn() {
  return (
    <Button variant="blue" onClick={() => signIn("auth0")}>
      Login
    </Button>
  );
}

export function GoToDashboard() {
  return (
    <Button
      variant="blue"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = "/dashboard";
      }}
    >
      Dashboard
    </Button>
  );
}
