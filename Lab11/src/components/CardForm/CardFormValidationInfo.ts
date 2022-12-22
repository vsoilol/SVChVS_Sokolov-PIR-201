import { z } from "zod";

const imageUrlValidation = (val: string): Promise<any> => {
    const firstCheck: boolean = val.trim().length !== 0;

    const img = new Image();
    img.src = val;
    return new Promise((resolve) => {
        img.onload = () => resolve(firstCheck);
        img.onerror = () => resolve(false);
    });
};

export const FormSchema = z.object({
    name: z.string().refine((val) => val.trim().length !== 0, {
        message: "Поле не может быть пустым",
    }),
    imageUrl: z.string().refine(imageUrlValidation, {
        message: "Путь к картинке неправильный",
    }),
    price: z
        .number({
            required_error: "Поле не может быть пустым",
            invalid_type_error: "Не число",
        })
        .positive("Некорректное число"),
    quantity: z
        .number({
            required_error: "Поле не может быть пустым",
            invalid_type_error: "Не число",
        })
        .nonnegative("Некорректное число"),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
