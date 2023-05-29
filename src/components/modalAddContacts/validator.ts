import { z } from "zod";

export const AddContactchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  telephone: z.string(),
});
