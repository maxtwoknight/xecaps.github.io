const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');
var aboutOpen = false;


about.addEventListener('click', () => {
    if (aboutOpen)
    {
        aboutBox.focus();
    } else
    {
        const aboutBox = new WinBox({
            title: 'About Me',
            width: '500px',
            height: '500px',
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
            class: "no-min no-max no-full no-resize"
        });

        aboutOpen = true;
    }
});

contact.addEventListener('click', () => {
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
        class: "no-min no-max no-full no-resize"
    })
});