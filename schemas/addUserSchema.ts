import { z } from "zod";

export const UserSchema = z.object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .max(50, { message: "Name cannot exceed 50 characters" }),
    username: z
      .string()
      .min(1, { message: "Username is required" })
      .max(20, { message: "Username cannot exceed 20 characters" }),
    email: z
      .string()
      .email({ message: "Invalid email address" }),
     address: z.object({
     street: z
        .string()
        .min(1, { message: "Street is required" })
        .max(100, { message: "Street cannot exceed 100 characters" }),
         suite: z
        .string()
         .min(1, { message: "Suite is required" })
          .max(50, { message: "Suite cannot exceed 50 characters" }),
         city: z
        .string()
        .min(1, { message: "City is required" })
        .max(50, { message: "City cannot exceed 50 characters" }),
         zipcode: z
       .string()
         .min(1, { message: "Zipcode is required" })
       .max(20, { message: "Zipcode cannot exceed 20 characters" }),
        geo: z.object({
            lat: z
            .string()
            .min(1, { message: "Latitude is required" }),
            lng: z
            .string()
            .min(1, { message: "Longitude is required" }),
        }),
        }),
    phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits" })
      .max(20, { message: "Phone number cannot exceed 20 digits" }),
    website: z
      .string()
      .url({ message: "Invalid website URL" }),
    company: z.object({
      name: z
        .string()
        .min(1, { message: "Company name is required" })
        .max(50, { message: "Company name cannot exceed 50 characters" }),
      catchPhrase: z
        .string()
        .min(1, { message: "Company catchphrase is required" })
        .max(100, { message: "Catchphrase cannot exceed 100 characters" }),
      bs: z
        .string()
        .min(1, { message: "Company BS is required" })
        .max(100, { message: "BS cannot exceed 100 characters" }),
     }),
  })
  