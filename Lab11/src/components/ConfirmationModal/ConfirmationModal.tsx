import React from "react";
import "./ConfirmationModal.scss";
import {Modal} from "@mui/material";

interface ConfirmationModalProps {
    handleClose: (isYes: boolean) => void;
    text: string;
    headerText: string;
    show: boolean;
}

export function ConfirmationModal({handleClose, text, headerText, show}: ConfirmationModalProps) {

    return (
        <Modal
            open={show}
            onClose={() => handleClose(false)}
        >
            <section className="modal-remove-main">
                <div className="modal-remove-main__header header-modal">
                    <h2 className="header-modal__title">{headerText}</h2>
                    <button
                        className="header-modal__close-button"
                        type="button"
                        onClick={() => handleClose(false)}>
                        <span className="_icon-close"></span>
                    </button>
                </div>

                <div className="modal-remove-main__body">
                    <div className="modal-remove-main__text">{text}</div>

                    <div className="modal-remove-main__buttons">
                        <button
                            onClick={() => handleClose(true)}
                            className="modal-remove-main__button button">
                            Да
                        </button>
                        <button
                            onClick={() => handleClose(false)}
                            className="modal-remove-main__button button">
                            Нет
                        </button>
                    </div>
                </div>
            </section>

        </Modal>
    );
}