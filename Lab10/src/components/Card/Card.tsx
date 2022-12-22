import React, {useState} from "react";
import {Product} from "../../models/Product";
import "./Card.scss";
import {useActions} from "../../hooks/actions";
import {useAppSelector} from "../../hooks/redux";
import {
    useRemoveProductMutation,
    useUpdateProductMutation
} from "../../store/product/product.api";
import {FormModal} from "../FormModal/FormModal";
import {ConfirmationModal} from "../ConfirmationModal/ConfirmationModal";
import {CardForm} from "../CardForm/CardForm";

function Card({product}: { product: Product }) {
    const [showFormModal, setShowFormModal] = useState<boolean>(false);
    const {isButtonDisabled} = useAppSelector(state => state.product)
    const {toggleChosenProduct, toggleIsButtonDisabled} = useActions();
    const {chosenProducts} = useAppSelector(state => state.product)
    const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
    const [removeProduct] = useRemoveProductMutation();
    const [updateProduct] = useUpdateProductMutation();
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const handleConfirmationModalClose = (isYes: boolean) => {
        if (isYes) {
            removeProduct(product.id)
        }

        setShowConfirmationModal(false);
    }

    const editProductAfterCloseModel = (product: Product) => {
        if (product) {
            updateProduct(product)
        }

        toggleIsButtonDisabled(false);
    }

    const toggleChosen = (e: any) => {
        if (!e.target.classList.contains("buttons-card__button") && !document.body.querySelector(".MuiModal-root")) {
            toggleChosenProduct(product.id)
        }
    }

    const cancelUpdate = () => {
        setIsEdit(false);
        toggleIsButtonDisabled(false);
    }

    return (
        <>
            {isEdit
                ? <CardForm text={"Сохранить"} handleCancel={cancelUpdate}
                            handleUpdateOrCreate={editProductAfterCloseModel} product={product}/>
                : <article className={"card " + (chosenProducts.includes(product.id) ? "card_selected" : "")}
                           onClick={toggleChosen}>
                    <div className="card__image-ibg">
                        <img src={product.imageUrl} alt=""/>
                    </div>
                    <div className="card__body">
                        <h4 className="card__title">{product.name}</h4>
                        <div className="card__price">{product.price} BYN</div>
                        <div className="card__quantity">Количество: {product.quantity}</div>
                        <div className="card__buttons buttons-card">
                            <button
                                onClick={() => {
                                    setIsEdit(true);
                                    toggleIsButtonDisabled(true)
                                }}
                                disabled={isButtonDisabled}
                                className={"buttons-card__edit button buttons-card__button " + (isButtonDisabled ? "button_disabled" : "")}>
                                Редактировать
                            </button>
                            <button
                                onClick={() => setShowConfirmationModal(true)}
                                disabled={isButtonDisabled}
                                className={"buttons-card__remove button buttons-card__button " + (isButtonDisabled ? "button_disabled" : "")}>
                                Удалить
                            </button>
                        </div>
                    </div>

                    <ConfirmationModal handleClose={handleConfirmationModalClose}
                                       headerText={"Подтверждение"}
                                       text={`Вы уверены, что хотите удалить товар ${product.name}?`}
                                       show={showConfirmationModal}/>
                </article>
            }
        </>
    );
}

export default Card;
