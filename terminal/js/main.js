const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');


const backColor = window.getComputedStyle(document.documentElement).getPropertyValue("--text-color");

about.addEventListener('click', openAboutBox);
contact.addEventListener('click', openContactBox);

function openAboutBox() {
    createWinbox('About Me', about, aboutContent, openAboutBox);
};

function openContactBox() {
    createWinbox('Contact Me', contact, contactContent, openContactBox, 150);
}

function createWinbox(section, linkToBind, contentToUse, openMethod, locationAdjustment = 0) {
    const displayBox = new WinBox({
        title: section,
        width: '400px',
        height: '400px',
        top: 50 + locationAdjustment,
        right: 50,
        bottom: 50,
        left: 50 + locationAdjustment,
        mount: contentToUse,
        class: 'no-min no-max no-full no-resize',
        onfocus: function () {
            this.setBackground(backColor);
        },

        onblur: function () {
            this.setBackground('#777');
        },
        onclose: function () {
            linkToBind.addEventListener('click', openMethod);
        }
    });

    linkToBind.removeEventListener('click', openMethod);
    linkToBind.addEventListener('click', () => {
        displayBox.focus();
    })
}