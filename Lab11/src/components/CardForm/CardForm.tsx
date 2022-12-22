import React from "react";
import "./CardForm.scss";
import {ConfirmationModal} from "../ConfirmationModal/ConfirmationModal";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {FormSchema, FormSchemaType} from "./CardFormValidationInfo";
import {zodResolver} from "@hookform/resolvers/zod/dist/zod";
import {Product} from "../../models/Product";

interface CardFormProps {
    handleCancel: () => void;
    handleUpdateOrCreate: (product: Product) => void;
    text: string;
    product?: Product
}

export function CardForm({text, handleCancel, handleUpdateOrCreate, product}: CardFormProps) {
    const {
        register,
        watch,
        handleSubmit,
        control,
        reset,
        formState: {errors, isSubmitting},
    } = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema),
    });

    const imageUrl = watch("imageUrl");

    const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
        const newProduct = data as Product
        newProduct.id = product?.id ?? "";
        handleUpdateOrCreate(newProduct);
    };

    const cancel = () => {
        handleCancel();
    }


    return (
        <article className={"form-card"}>
            <form className={"form-card__form"} onSubmit={handleSubmit(onSubmit)}>
                <div className={"form-card__inputs"}>
                    <div className={"form-card__field field-form-card"}>
                        <Controller
                            render={({field}) => <input
                                                        autoFocus={true}
                                                        placeholder={"Название товара"}
                                                        type="text"
                                                        className="field-form-card__input" {...field} />}
                            name={"name"}
                            control={control}
                            defaultValue={product?.name ?? ""}
                        />
                        {errors.name && (
                            <span className="field-form-card__error">
                          {errors.name.message}
                        </span>
                        )}
                    </div>
                    <div className={"form-card__field field-form-card"}>
                        <Controller
                            render={({field}) => <input placeholder={"URL Картинки"}
                                                        type="text"
                                                        className="field-form-card__input" {...field} />}
                            name={"imageUrl"}
                            control={control}
                            defaultValue={product?.imageUrl ?? ""}
                        />
                        {errors.imageUrl && (
                            <span className="field-form-card__error">
                          {errors.imageUrl.message}
                        </span>
                        )}
                    </div>
                    <div className={"form-card__field field-form-card"}>
                        <Controller
                            render={({field}) => <input placeholder={"Цена"}
                                                        type="text"
                                                        className="field-form-card__input"
                                                        {...register("price", {valueAsNumber: true})} />}
                            name={"price"}
                            control={control}
                            defaultValue={product?.price ?? 0}
                        />
                        {errors.price && (
                            <span className="field-form-card__error">
                          {errors.price.message}
                        </span>
                        )}
                    </div>
                    <div className={"form-card__field field-form-card"}>

                        <Controller
                            render={({field}) => <input placeholder={"Количество на складе"}
                                                        type="text"
                                                        className="field-form-card__input"
                                                        {...register("quantity", {valueAsNumber: true})}  />}
                            name={"quantity"}
                            control={control}
                            defaultValue={product?.quantity ?? 0}
                        />
                        {errors.quantity && (
                            <span className="field-form-card__error">
                          {errors.quantity.message}
                        </span>
                        )}
                    </div>
                </div>
                <div className="form-card__buttons buttons-form-card">
                    <button
                        type={"submit"}
                        className="buttons-form-card__edit buttons-form-card__button">
                        {text}
                    </button>
                    <button
                        type={"button"}
                        onClick={() => cancel()}
                        className="buttons-form-card__remove buttons-form-card__button">
                        Отмена
                    </button>
                </div>
            </form>
        </article>
    );
}