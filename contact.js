Vue.component("contact", {
    props: ["contact"],
    data: function() {
        return {
            show: false
        };
    },
    methods: {
        Open() {
            if (this.show == false) {
                this.show = true;
                ContactSidebarVue.contact = this.contact;
            } else {
                this.show = false;
            }
        }
    },
    template: `
        <div class='contact border-primary'>
            <p class='contact-name text-primary' v-on:click='Open'>{{contact.name}}</p>
            <div class='contact-info-box' v-if='show'>
                <p class='contact-info'>{{contact.phone}}</p>
                <p class='contact-info'>{{contact.email}}</p>
            </div>
        </div>
    `
});

var ContactAreaVue = new Vue({
    el: "#contact-area",
    data: {
        contacts: [
            {id:0, name:"Samuel Wilson", phone:"(417)860-5584", email:"swilsondev@outlook.com", imageSrc:"http://via.placeholder.com/200x200"},
            {id:1, name:"John Smith", phone:"(417)867-5309", email:"smith@gmail.com", imageSrc:"http://via.placeholder.com/200x200"},
            {id:2, name:"Other Person", phone:"(000)000-0000", email:"no@nope.com", imageSrc:"http://via.placeholder.com/200x200"}
        ]
    }
});

var ContactSidebarVue = new Vue({
    el: "#contact-sidebar",
    data: {
        contact: {id:0, name:"Samuel Wilson", phone:"(417)860-5584", email:"swilsondev@outlook.com", imageSrc:"http://via.placeholder.com/200x200"},    
    },
    methods: {
        SendContact() {
            window.opener.DisplaySelectedContact(this.contact.name, this.contact.imageSrc, this.contact.phone, this.contact.email);
            window.close();
        }
    }
});