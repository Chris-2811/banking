import AuthForm from "@/components/shared/AuthForm";
import React from "react";

function SignIn() {
  return (
    <section className="flex-center w-full max-sm:px-6 lg:w-1/2">
      <AuthForm type="sign-in" />
    </section>
  );
}

export default SignIn;
