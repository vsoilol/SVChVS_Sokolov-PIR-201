import { z } from "zod";

export const FormSchema = z.object({
    username: z.string().refine((val) => val.trim().length !== 0, {
        message: "Поле не может быть пустым",
    }),
    password: z.string().refine((val) => val.trim().length !== 0, {
        message: "Поле не может быть пустым",
    }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
