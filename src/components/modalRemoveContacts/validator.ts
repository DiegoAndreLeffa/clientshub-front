import { z } from "zod";

export const AddClientchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  telephone: z.string(),
});
