import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty('email is required').email("email is invalid"),
  password: z
    .string()
    .nonempty("password is required")
    .min(6, "Password must be at least 6 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
