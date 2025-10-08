import * as z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2)
    .max(20)
    .regex(/^[A-Za-zÀ-ÿ\u00C0-\u017F\s]+$/),
  email: z.email(),
  message: z.string().trim().min(5).max(300),
});
