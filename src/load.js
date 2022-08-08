import HomePage from './home';
import { homeDivContainer } from './home';
import { menuDivContainer } from './menu';

import MenuPage from './menu';
import './style.css';

export default function firstLoad() {
    const divContent = document.getElementById('content');

    // Appending the return of the functions to the content container
    divContent.appendChild(header());
    divContent.appendChild(HomePage());
    divContent.appendChild(MenuPage());

    return divContent;
}

const header = () => {
    const headerDiv = document.createElement('div');
    const title = document.createElement('h1');

    title.textContent = 'Waffle House';

    title.classList.add('title');
    headerDiv.classList.add('header-container');

    headerDiv.appendChild(title);
    headerDiv.appendChild(nav());

    return headerDiv;
};

const nav =  () => {
    const navContainer = document.createElement('div');

    navContainer.classList.add('nav-container');

    const navItem1 = document.createElement('button');
    const navItem2 = document.createElement('button');
    const navItem3 = document.createElement('button');

    navItem1.classList.add('nav-link');
    navItem2.classList.add('nav-link');
    navItem3.classList.add('nav-link');

    navItem1.textContent = 'Home';
    navItem2.textContent = 'Menu';
    navItem3.textContent = 'Contact';

    navItem1.addEventListener('click', () => {
        homeDivContainer.style.display = 'flex';
        menuDivContainer.style.display = 'none';

    });
    navItem2.addEventListener('click', () => {
        homeDivContainer.style.display = 'none';
        menuDivContainer.style.display = 'flex';
    });

    navContainer.appendChild(navItem1);
    navContainer.appendChild(navItem2);
    navContainer.appendChild(navItem3);

    return navContainer;
}
