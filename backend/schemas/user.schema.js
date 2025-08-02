import { z } from "zod";

export const userZodSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.enum(["admin", "owner", "student"]),
});