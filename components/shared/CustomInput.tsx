import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Control, Form, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up");

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  name: FieldPath<z.infer<typeof formSchema>>;
}

function CustomInput({ label, placeholder, name, control }: CustomInput) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative w-full">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={name === "password" ? "password" : "text"}
            />
          </FormControl>

          <FormMessage className="mt-2 text-xs text-red-500" />
        </FormItem>
      )}
    />
  );
}

export default CustomInput;
