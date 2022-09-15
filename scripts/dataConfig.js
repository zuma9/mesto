const initialCards = [
    {
        name: 'Лондон',
        link: 'https://images.unsplash.com/photo-1656800773829-a059959bfacf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
        name: 'Милан',
        link: 'https://images.unsplash.com/photo-1575399877732-9363881b907e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
    },
    {
        name: 'Нью-Йорк',
        link: 'https://images.unsplash.com/photo-1659960636248-d64f5dfa6f76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
        name: 'Стамбул',
        link: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80'
    },
    {
        name: 'Барселона',
        link: 'https://images.unsplash.com/photo-1561407531-2b7ccd6b66b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
    },
    {
        name: 'Париж',
        link: 'https://images.unsplash.com/photo-1545209743-87a2a2a6fdad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80'
    }
];

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__field_type-error',
    errorClass: 'popup__field-error_active',
    formFieldset: '.popup__form-set'
};