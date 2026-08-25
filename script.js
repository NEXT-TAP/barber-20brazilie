// =====================================
// BASIC INFORMATION
// =====================================

document.getElementById("business-name").textContent =
    client.name;

document.getElementById("category").textContent =
    client.category;

document.getElementById("description").textContent =
    client.description;

document.getElementById("footer-name").textContent =
    client.name;


// =====================================
// PHOTOS
// =====================================

document.getElementById("banner").src =
    client.banner;

document.getElementById("logo").src =
    client.logo;


// =====================================
// WHATSAPP
// =====================================

document.getElementById("whatsapp").href =
    `https://wa.me/${client.whatsapp}`;

document.getElementById("whatsapp-number").textContent =
    "+" + client.whatsapp;


// =====================================
// PHONE
// =====================================

document.getElementById("phone").href =
    `tel:${client.phone}`;

document.getElementById("phone-number").textContent =
    client.phone;


// =====================================
// INSTAGRAM
// =====================================

document.getElementById("instagram").href =
    client.instagram;

document.getElementById("instagram-name").textContent =
    client.instagram
        .split("/")
        .filter(Boolean)
        .pop();


// =====================================
// GOOGLE MAPS
// =====================================

document.getElementById("maps").href =
    client.maps;

document.getElementById("direction").href =
    client.maps;

document.getElementById("address-short").textContent =
    client.address;

document.getElementById("address").textContent =
    client.address;


// =====================================
// ADD CONTACT
// =====================================

const addContact =
    document.getElementById("add-contact");

if (addContact) {

    addContact.addEventListener("click", function (event) {

        event.preventDefault();

        const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${client.name}
ORG:${client.category}
TEL;TYPE=CELL:${client.phone}
TEL;TYPE=WHATSAPP:${client.whatsapp}
URL:${client.instagram}
ADR:;;${client.address}
END:VCARD`;

        const blob = new Blob(
            [vCard],
            {
                type: "text/vcard;charset=utf-8"
            }
        );

        const url =
            URL.createObjectURL(blob);

        const link =
            document.createElement("a");

        link.href = url;

        link.download =
            `${client.name.replace(/\s+/g, "_")}.vcf`;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);

    });

}


// =====================================
// SERVICES
// =====================================

const servicesList =
    document.getElementById("services-list");

if (servicesList && client.services) {

    servicesList.innerHTML = "";

    client.services.forEach(function (service) {

        const serviceElement =
            document.createElement("div");

        serviceElement.className =
            "service";

        serviceElement.innerHTML = `
            <div class="service-name">
                ${service.name}
            </div>
        `;

        servicesList.appendChild(serviceElement);

    });

}