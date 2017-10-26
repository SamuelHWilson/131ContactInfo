var contactData = [
    ["Samuel Wilson", "(417)860-5584", "swilsondev@outlook.com"],
    ["John Smith", "(417)867-5309", "smith@gmail.com"],
    ["Other Person", "(000)000-0000", "no@nope.com"]
]

var contactArea = $("#contact-area");

//Setup
$(document).ready(function() {
    SetupAllContacts();
});

//Setup functions
function SetupAllContacts() {
    for (var ci = 0; ci < contactData.length; ci++) {
        var newContact = CreateContact(ci);
        contactArea.append(newContact);
    }
}

function CreateContact(ci) {
    var contact = $("<div class='contact border-primary'></div>");
    contact.attr("id", "contact-id-" + ci);
    
    var contactName = $("<p class='contact-name text-primary'></p>");
    contactName.text(contactData[ci][0]);
    contact.append(contactName);

    var contactInfoBox = $("<div class='contact-info-box'></div>");
    contact.append(contactInfoBox);

    var contactPhone = $("<p class='contact-info'></p>");
    contactPhone.text(contactData[ci][1]);
    contactInfoBox.append(contactPhone);

    var contactEmail = $("<p class='contact-info'></p>");
    contactEmail.text(contactData[ci][2]);
    contactInfoBox.append(contactEmail);

    return contact;
}