import { z } from "zod";

export const Registerchema = z.object({
  name: z.string(),
  email: z.string().email("Deve ser um email"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export type RegisterData = z.infer<typeof Registerchema>;
