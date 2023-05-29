import { z } from "zod";

export const AddClientchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  telephone: z.string(),
});
