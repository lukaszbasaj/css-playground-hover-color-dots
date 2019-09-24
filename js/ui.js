
export function createDots() {
    const main = document.querySelector('.main');
    const container = document.createDocumentFragment();
    for (let i = 0; i < 2500; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        container.appendChild(dot);
    };
    main.appendChild(container);
};
