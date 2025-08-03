import { z } from "zod";

const userZodSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.enum(["admin", "owner", "student"]),
});

export default userZodSchema;