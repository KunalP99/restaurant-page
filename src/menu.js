import ClassicWaffle from './images/menu/waffle1.jpg';
import PecanWaffle from './images/menu/waffle2.jpg';
import ChocolateChipWaffle from './images/menu/waffle3.jpg';
import PeanutChipButterWaffle from './images/menu/waffle4.jpg';

export const menuDivContainer = document.createElement('div');

export default function menu() {
    const title = document.createElement('h1');

    menuDivContainer.classList.add('menu-container');
    title.classList.add('menu-title');
    
    title.textContent = 'Our Menu';

    menuDivContainer.appendChild(title);
    menuDivContainer.appendChild(menuGrid());

    return menuDivContainer;
};

const menuGrid = () => {
    const menuGrid = document.createElement('div');

    const menuItems = document.createElement('div');
    const menuItems2 = document.createElement('div');
    const menuItems3 = document.createElement('div');
    const menuItems4 = document.createElement('div');

    const classicWaffleText = document.createElement('p');
    const pecanWaffleText = document.createElement('p');
    const chocolateChipWaffleText = document.createElement('p');
    const peanutChipButterWaffleText = document.createElement('p');
    
    menuGrid.classList.add('menu-grid');

    // Creating the containers for each item in the
    menuItems.classList.add('menu-items-container');
    menuItems2.classList.add('menu-items-container');
    menuItems3.classList.add('menu-items-container');
    menuItems4.classList.add('menu-items-container');

    // Images
    const classicWaffle = new Image();
    const pecanWaffle = new Image();
    const chocolateChipWaffle = new Image();
    const peanutChipButterWaffle = new Image();

    // Adding classes to each image
    classicWaffle.classList.add('menu-img');
    pecanWaffle.classList.add('menu-img');
    chocolateChipWaffle.classList.add('menu-img');
    peanutChipButterWaffle.classList.add('menu-img');

    // Assigning images
    classicWaffle.src = ClassicWaffle;
    pecanWaffle.src = PecanWaffle;
    chocolateChipWaffle.src = ChocolateChipWaffle;
    peanutChipButterWaffle.src = PeanutChipButterWaffle;

    // Assigning text
    classicWaffleText.textContent = 'Classic Waffle';
    pecanWaffleText.textContent = 'Pecan Waffle';
    chocolateChipWaffleText.textContent = 'Chocolate Chip Waffle';
    peanutChipButterWaffleText.textContent = 'Peanut Chip Butter Waffle';

    menuItems.appendChild(classicWaffle);
    menuItems.appendChild(classicWaffleText);

    menuItems2.appendChild(pecanWaffle);
    menuItems2.appendChild(pecanWaffleText);

    menuItems3.appendChild(chocolateChipWaffle);
    menuItems3.appendChild(chocolateChipWaffleText);

    menuItems4.appendChild(peanutChipButterWaffle);
    menuItems4.appendChild(peanutChipButterWaffleText);

    menuGrid.appendChild(menuItems);
    menuGrid.appendChild(menuItems2);
    menuGrid.appendChild(menuItems3);
    menuGrid.appendChild(menuItems4);

    return menuGrid;
};
