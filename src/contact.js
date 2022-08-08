import Phone from './images/phone.svg';
import Banner from './images/contact-banner.jpg';

export const contactDivContainer = document.createElement('div');

export default function contact() {
    const phoneContainer = document.createElement('div');

    const contactPhoneText = document.createElement('p');
    const phoneNumber = document.createElement('p');
    
    const phoneIcon = new Image();
    phoneIcon.src = Phone;

    const banner = new Image();
    banner.src = Banner;

    contactDivContainer.classList.add('contact-div-container');
    phoneContainer.classList.add('phone-container');
    contactPhoneText.classList.add('contact-phone-text');
    phoneIcon.classList.add('phone-icon');
    phoneNumber.classList.add('phone-number');
    banner.classList.add('contact-banner');

    contactPhoneText.textContent = 'If you have any queries or complaints, please call us at: ';
    phoneNumber.textContent = '01727 853502';

    phoneContainer.appendChild(phoneIcon);
    phoneContainer.appendChild(phoneNumber);

    contactDivContainer.appendChild(contactPhoneText);
    contactDivContainer.appendChild(phoneContainer);
    contactDivContainer.appendChild(banner);

    return contactDivContainer;
};