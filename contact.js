Vue.component("contact", {
    props: ["contact"],
    data: function() {
        return {
            show: false,
            key: null
        };
    },
    methods: {
        OnClick() {
            Bus.$emit("contact-clicked", this.contact.id); //Alets all contacts that one was chosen.
        },
        SyncOpenOrClose(cid) { //Open if was chosen, close if not.
            if (cid == this.contact.id) {
                this.show = true;
                ContactSidebarVue.contact = this.contact;
            } else {
                this.show = false;
            }
        }
    },
    created: function() {
        Bus.$on("contact-clicked", this.SyncOpenOrClose); 
    },
    template: `
        <div class='contact border-primary'>
            <p class='contact-name text-primary' v-on:click='OnClick'>{{contact.name}}</p>
            <div class='contact-info-box' v-if='show'>
                <p class='contact-info'>{{contact.phone}}</p>
                <p class='contact-info'>{{contact.email}}</p>
            </div>
        </div>
    `
});

var Bus = new Vue(); //Used for communicating between components.

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
        contact: ContactAreaVue.contacts[0]    
    },
    methods: {
        SendContact() {
            window.opener.DisplaySelectedContact(this.contact.name, this.contact.imageSrc, this.contact.phone, this.contact.email);
            window.close();
        }
    }
});