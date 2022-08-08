import Banner from './images/banner1.png';

export const homeDivContainer = document.createElement('div');

export default function home() {
    const quote = document.createElement('p');
    const banner = new Image();

    banner.src = Banner;

    quote.textContent = `"We've been here since 1955, so you can be here today."`;

    quote.classList.add('quote');
    homeDivContainer.classList.add('home-div-container');
    banner.classList.add('banner');

    homeDivContainer.appendChild(banner);
    homeDivContainer.appendChild(quote);

    return homeDivContainer;
};
