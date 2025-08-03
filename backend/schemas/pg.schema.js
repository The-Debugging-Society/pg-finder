import { z } from "zod";

const pgZodSchema = z.object({
  id: z.string(),
  name: z.string(),
  distanceFromNsut: z.number(),
  priceSingleRoom: z.number().optional(),
  priceDoubleRoom: z.number().optional(),
  type: z.enum(["girls", "boys", "coed"]),
  rating: z.number().min(1).max(5).optional(),
  review: z.array(z.string()).optional(),
  ownerId: z.string(),
  ownerContact: z.string(),
  ownerEmail: z.string().email().optional(),
  isApproved: z.boolean(),
  amentities: z.array(z.string()).optional(),
  mealsProvided: z.boolean().optional(),
  images: z.array(z.string()).optional(),
});

export default pgZodSchema;
