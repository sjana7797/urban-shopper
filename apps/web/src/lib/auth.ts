"use server";

import type { RegisterUser, LoginUser } from "@repo/schema/user";
import { redirect } from "next/navigation";
import { env } from "~web/env";

export const registerUser = async (formData: RegisterUser) => {
  const BACKEND_URL = env.BACKEND_URL;

  console.log("formData", formData, BACKEND_URL);

  const response = await fetch(`${BACKEND_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    redirect("/auth/login");
  } else {
    return response.status === 409
      ? "User already exists"
      : response.statusText;
  }
};

export const loginUser = async (formData: LoginUser) => {
  const BACKEND_URL = env.BACKEND_URL;

  const response = await fetch(`${BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    redirect("/auth/login");
  } else {
    return response.status === 409
      ? "User already exists"
      : response.statusText;
  }
};
