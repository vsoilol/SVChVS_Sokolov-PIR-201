import React, {useState} from "react";
import {Product} from "../../models/Product";
import Card from "../Card/Card";
import "./Main.scss";
import {useAppSelector} from "../../hooks/redux";
import {useAddProductMutation, useGetProductsQuery} from "../../store/product/product.api";
import {v4 as uuid4} from "uuid";
import {CardForm} from "../CardForm/CardForm";
import {useActions} from "../../hooks/actions";

function Main() {
    const {chosenProducts} = useAppSelector(state => state.product)
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isCreate, setIsCreate] = useState<boolean>(false);
    const [addProduct, {isLoading: isAddLoading}] = useAddProductMutation();
    const {isLoading: areProductsLoading, isFetching, data: products} = useGetProductsQuery();
    const {isButtonDisabled} = useAppSelector(state => state.product)
    const {toggleIsButtonDisabled} = useActions();

    const createProductAfterCloseModal = (product: Product) => {
        setIsCreate(false);

        if (product) {
            product.id = uuid4();
            addProduct(product);
        }

        toggleIsButtonDisabled(false)
    }

    const cancelCreate = () => {
        setIsCreate(false);
        toggleIsButtonDisabled(false)
    }

    return (
        <main className="page">
            <section className="page__info info-page">
                <div className="info-page__container">
                    <div className="info-page__selected-products selected-products">
                        <span className="selected-products__text">Выбранных товаров:</span>
                        <span className="selected-products__number">{chosenProducts.length}</span>
                    </div>
                    <button
                        onClick={() => {
                            setIsCreate(true);
                            toggleIsButtonDisabled(true);
                        }}
                        className={"info-page__new-card-button button " + (isButtonDisabled ? "button_disabled" : "")}>
                        <span>Создать</span>
                    </button>
                </div>
            </section>

            <section className="page__cards cards">
                <div className="cards__container">
                    {isCreate && <CardForm text={"Добавить"} handleCancel={cancelCreate} handleUpdateOrCreate={createProductAfterCloseModal}/>}
                    {(areProductsLoading || isAddLoading || isFetching) && <p className="text-center">Loading...</p>}
                    {(!areProductsLoading && !isAddLoading && !isFetching) && products?.map((_) => (
                        <Card key={_.id} product={_}/>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Main;
