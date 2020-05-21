export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, data, fxn) => ({
    type: OPEN_MODAL,
    modal,
    data,
    fxn
});

export const closeModal = modal => ({
    type: CLOSE_MODAL,
    modal
});