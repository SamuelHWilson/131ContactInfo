function DisplaySelectedContact(name ,image, phone, email) {
    console.log(name);
    $("#name").html(name);
    $("#img").attr("src", image);
    $("#phone").text(phone);
    $("#email").text(email);
    
}

function OpenContact() {
    window.open("contact.html", "contact-window", "width=700,height=520,scrollbars=yes");
}