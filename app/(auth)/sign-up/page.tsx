import AuthForm from "@/components/shared/AuthForm";
import React from "react";
import { getLoggedInUser } from "@/lib/actions/user.actions";

async function SignUp() {
  const loggedInUser = await getLoggedInUser();

  console.log(loggedInUser);

  return (
    <section className="flex-center max-sm:px-6 lg:w-1/2">
      <AuthForm type="sign-up" />
    </section>
  );
}

export default SignUp;
