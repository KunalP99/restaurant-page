export default function firstLoad() {
    const divContent = document.getElementById('content');

    // Appending the return of the functions to the content container
    divContent.appendChild(header());

    return divContent;
}

const header = () => {
    const headerDiv = document.createElement('div');
    const title = document.createElement('h1');

    title.textContent = 'My restaurant';

    title.classList.add('title');
    headerDiv.classList.add('header-container');

    headerDiv.appendChild(title);
    headerDiv.appendChild(nav());

    return headerDiv;
};

const nav = () => {
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

    navContainer.appendChild(navItem1);
    navContainer.appendChild(navItem2);
    navContainer.appendChild(navItem3);

    return navContainer;
}
