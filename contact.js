Vue.component("contact-box", {
    props: ["contact"],
    template: "<p>{{contact.name}}</p>"
});

var ContactAreaVue = new Vue({
    el: "#contact-area",
    data: {
        contacts: [
            {name:"Samuel Wilson", phone:"(417)860-5584", email:"swilsondev@outlook.com", imageSrc:"http://via.placeholder.com/200x200"},
            {name:"John Smith", phone:"(417)867-5309", email:"smith@gmail.com", imageSrc:"http://via.placeholder.com/200x200"},
            {name:"Other Person", phone:"(000)000-0000", email:"no@nope.com", imageSrc:"http://via.placeholder.com/200x200"}
        ]
    }
});