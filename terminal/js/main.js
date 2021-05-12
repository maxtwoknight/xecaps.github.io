const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');

about.addEventListener('click', openAboutBox);
contact.addEventListener('click', openContactBox);

function openAboutBox() {
    const aboutBox = new WinBox({
        title: 'About Me',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground('#00aa00');
        },

        onblur: function () {
            this.setBackground('#777');
        },
        onclose: function () {
            about.addEventListener('click', openAboutBox);
        },
        class: "no-min no-max no-full no-resize"
    });
    about.removeEventListener('click', openAboutBox);
    about.addEventListener('click', () => {
        aboutBox.focus();
    })
};

function openContactBox() {
    const contactBox = new WinBox({
        title: 'contact Me',
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 250,
        mount: contactContent,
        onfocus: function () {
            this.setBackground('#00aa00');
        },
        onblur: function () {
            this.setBackground('#777');
        },
        onclose: function () {
            contact.addEventListener('click', openContactBox);
        },
        class: "no-min no-max no-full no-resize"
    });
    contact.removeEventListener('click', openContactBox);
    contact.addEventListener('click', () => {
        contactBox.focus();
    });
}