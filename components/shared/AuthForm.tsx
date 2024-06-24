"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/actions/user.actions";
import { signUp } from "@/lib/actions/user.actions";

function AuthForm({ type }: { type: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:
      type === "sign-in"
        ? {
            email: "",
            password: "",
          }
        : {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            postalCode: "",
            dateOfBirth: "",
            ssn: "",
          },
  });

  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    setIsLoading(true);

    try {
      // Sign up with appwrite
      console.log("Type", type);

      if (type === "sign-up") {
        const userData = {
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
          name: `${data.firstName} ${data.lastName}`,
          address: data.address,
          city: data.city,
          state: data.state,
          postalCode: data.postalCode,
          dateOfBirth: data.dateOfBirth,
          ssn: data.ssn,
        };

        console.log("signUp gets called");
        console.log(userData);
        const newUser = await signUp(userData);
        console.log("New User", newUser);
        setUser(newUser);
      }

      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        if (response) {
          console.log("User", response);
          router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex h-full w-full items-center justify-center lg:w-1/2">
      <div>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            alt="company-logo"
            width={34}
            height={34}
          />
          <p className="font-ibm-plex text-[1.75rem] font-bold leading-[1.07]">
            Horizon
          </p>
        </Link>
        <div>
          <h1 className="heading-xl mt-8">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="mt-3">
            {user
              ? "Link your account to get started"
              : type === "sign-in"
                ? "Welcome back! Please enter your details."
                : "Please enter your details."}
          </p>
        </div>
        {!user && (
          <div>
            <div className={`mt-8 ${type === "sign-up" && "w-[460px]"}`}>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                >
                  {type === "sign-up" && (
                    <>
                      <div className="flex gap-[1.125rem]">
                        <CustomInput
                          placeholder="John"
                          name="firstName"
                          label="First Name"
                          control={form.control}
                        />
                        <CustomInput
                          placeholder="Doe"
                          name="lastName"
                          label="Last Name"
                          control={form.control}
                        />
                      </div>
                      <CustomInput
                        placeholder="Enter your specific address"
                        name="address"
                        label="Address"
                        control={form.control}
                      />
                      <CustomInput
                        placeholder="Enter your city"
                        name="city"
                        label="City"
                        control={form.control}
                      />
                      <div className="flex items-center gap-[1.125rem]">
                        <CustomInput
                          placeholder="ex: NY"
                          name="state"
                          label="State"
                          control={form.control}
                        />
                        <CustomInput
                          placeholder="ex: 11101"
                          name="postalCode"
                          label="Postal Code"
                          control={form.control}
                        />
                      </div>
                      <div className="flex items-center gap-[1.125rem]">
                        <CustomInput
                          placeholder="yyyy-mm-dd"
                          name="dateOfBirth"
                          label="Date of Birth"
                          control={form.control}
                        />
                        <CustomInput
                          placeholder="ex: 1234"
                          name="ssn"
                          label="SSN"
                          control={form.control}
                        />
                      </div>
                    </>
                  )}
                  <CustomInput
                    placeholder="Enter your email"
                    name="email"
                    label="Email"
                    control={form.control}
                  />
                  <CustomInput
                    placeholder="Enter your password"
                    name="password"
                    label="Password"
                    control={form.control}
                  />
                  <Button
                    type="submit"
                    variant="auth"
                    className="mt-2 w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" /> &nbsp;
                        <span>Loading...</span>
                      </>
                    ) : type === "sign-in" ? (
                      "Sign In"
                    ) : (
                      "Sign Up"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
            <footer className="mt-5 text-center text-sm leading-[1.42]">
              {type === "sign-up" ? (
                <p>
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="ml-1 font-semibold text-blue-300"
                  >
                    Login
                  </Link>
                </p>
              ) : (
                <p>
                  Don't have an account?
                  <Link
                    href="sign-up"
                    className="ml-1 font-semibold text-blue-300"
                  >
                    Sign up
                  </Link>
                </p>
              )}
            </footer>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
