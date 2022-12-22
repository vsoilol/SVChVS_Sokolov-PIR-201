import React from "react";
import "./FormModal.scss";
import Modal from "@mui/material/Modal";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod/dist/zod";
import {Product} from "../../models/Product";
import {FormSchema, FormSchemaType} from "./ModalFormValidationInfo";

interface FormModalProps {
    show: boolean,
    product?: Product,
    handleClose: (product: Product | void) => void,
    headerText: string,
    submitButtonText: string
}

export function FormModal({show, handleClose, product, headerText, submitButtonText}: FormModalProps) {

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
        reset();
        handleClose(newProduct);
    };

    return (
        <Modal
            open={show}
            onClose={() => {
                reset();
                handleClose();
            }}
        >
            <section className="modal-main">
                <div className="modal-main__header header-modal">
                    <h2 className="header-modal__title">{headerText}</h2>
                    <button
                        className="header-modal__close-button"
                        type="button"
                        onClick={() => {
                            reset();
                            handleClose()
                        }}>
                        <span className="_icon-close"></span>
                    </button>
                </div>

                <div className="modal-main__body">
                    <div className="modal-main__image-ibg modal-main__image-ibg_contain">
                        <img src={imageUrl ?? product?.imageUrl} alt=""/>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="modal-main__form form-modal">
                        <label className="form-modal__section form-section">
                            <span className="form-section__label">Название товара</span>
                            <Controller
                                render={({field}) => <input type="text" className="form-section__input" {...field} />}
                                name={"name"}
                                control={control}
                                defaultValue={product?.name ?? ""}
                            />
                            {errors.name && (
                                <span className="form-section__error">
                  {errors.name.message}
                </span>
                            )}
                        </label>

                        <div className="form-modal__section form-section">
                            <span className="form-section__label">URL Картинки</span>
                            <Controller
                                render={({field}) => <input type="text" className="form-section__input" {...field} />}
                                name={"imageUrl"}
                                control={control}
                                defaultValue={product?.imageUrl ?? ""}
                            />
                            {errors.imageUrl && (
                                <span className="form-section__error">
                  {errors.imageUrl.message}
                </span>
                            )}
                        </div>

                        <div className="form-modal__section form-section">
                            <span className="form-section__label">Цена</span>
                            <Controller
                                render={({field}) =>
                                    <input
                                        type="text"
                                        className="form-section__input"
                                        {...register("price", {valueAsNumber: true})} />}
                                name={"price"}
                                control={control}
                                defaultValue={product?.price ?? 0}
                            />
                            {errors.price && (
                                <span className="form-section__error">
                  {errors.price.message}
                </span>
                            )}
                        </div>

                        <div className="form-modal__section form-section">
                            <span className="form-section__label">Количество на складе</span>
                            <Controller
                                render={({field}) =>
                                    <input
                                        type="text"
                                        className="form-section__input"
                                        {...register("quantity", {valueAsNumber: true})} />}
                                name={"quantity"}
                                control={control}
                                defaultValue={product?.quantity ?? 0}
                            />
                            {errors.quantity && (
                                <span className="form-section__error">
                  {errors.quantity.message}
                </span>
                            )}
                        </div>

                        <button className="form-modal__submit-button button">
                            {submitButtonText}
                        </button>
                    </form>
                </div>
            </section>
        </Modal>
    );
}