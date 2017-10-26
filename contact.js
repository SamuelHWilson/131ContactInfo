var contactData = [
    ["Samuel Wilson", "(417)860-5584", "swilsondev@outlook.com", "http://via.placeholder.com/200x200"],
    ["John Smith", "(417)867-5309", "smith@gmail.com", "http://via.placeholder.com/200x200"],
    ["Other Person", "(000)000-0000", "no@nope.com", "http://via.placeholder.com/200x200"]
]

var selectedContact = -1;
var selectedBox = $("");

var contactArea = $("#contact-area");
var sidebarName = $("#contact-sidebar-name");
var sidebarImage = $("#contact-sidebar-image");
var sidebarPhone = $("#contact-sidebar-phone");
var sidebarEmail = $("#contact-sidebar-email");

//Setup
$(document).ready(function() {
    SetupAllContacts();
    SetupSelect();
});

//Setup functions
function SetupAllContacts() {
    for (var ci = 0; ci < contactData.length; ci++) {
        var newContact = CreateContact(ci);
        contactArea.append(newContact);
    }
}

function SetupSelect() {
    $("#contact-sidebar-select").click(SendContact);
}

function CreateContact(ci) {
    //Setup all HTML for contact
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

    //Setups up click event to slide contact info, display contact on sidebar, and change selected index. --------
    contact[0].addEventListener("click", function() {
        //Immediatly change selected contact.
        selectedContact = ci;

        contactInfoBox.slideDown(500, function() {
            //Display contact.
            SetSidebarContact(ci);

            //Closes last contact
            selectedBox.slideUp();

            //Sets self up as last contact.
            selectedBox = contactInfoBox;
        });
    });

    return contact;
}

//Display contact on sidebar
function SetSidebarContact(ci) {
    sidebarName.html(contactData[ci][0]);
    sidebarImage.attr("src", contactData[ci][3])
    sidebarPhone.html(contactData[ci][1]);
    sidebarEmail.html(contactData[ci][2]);
}

//Sends contact back to index
function SendContact() {
    if (selectedContact != -1) {
        toSend = contactData[selectedContact];
        window.opener.DisplaySelectedContact(toSend[0], toSend[3], toSend[1], toSend[2]);
        window.close();
    }
}