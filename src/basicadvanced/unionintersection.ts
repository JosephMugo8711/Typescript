type StringOrNUmber = string | number | boolean;

function acceptVal(val: StringOrNUmber) {
    if (typeof val === 'number') {
        console.log(val * 2);
    } else if (typeof val ==='string') {
        console.log(val.toUpperCase());
    } else {
        console.log('Boolean value is not supported');
    }
}

acceptVal(10); // Outputs: 20


interface BusinessPartner {
    name: string;
}

interface ContactDetails {
    email: string;
    phone: string
}

// used type aliase because its representing the combination of two other types
// custom type
type BusinessContact = BusinessPartner & ContactDetails

const contact: BusinessContact = {
    name: "Jowamu",
    email: "jowamu@example.com",
    phone: "123-456-7890"
}


// interface Individual {
//     name: string;
//     birthday: Date;
//     email: string;
//     phone: string;
// }

interface Individual {
    name: string;
    birthday: Date; 
}

interface Organization {
    companyName: string;
    workPhone: string;
}

// this type or this type
type ContactType = Individual | Organization

// this type and this type
type CompContact = Individual & Organization


function addContact(contact: ContactType) {
    if ('birthday' in contact) {
        console.log(`Adding individual contact: ${contact.name} with birthday: ${contact.birthday}`);
    } else {
        console.log(`Adding organization contact: ${contact.companyName} with work phone: ${contact.workPhone}`);
    }
}




// function addContact(contact: ContactType) {
//     if ('name' in contact && 'birthday' in contact) {
//         console.log(`Adding individual contact: ${contact.name} with birthday: ${contact.birthday}`);
//     } else if ('companyName' in contact && 'workPhone' in contact) {
//         console.log(`Adding organization contact: ${contact.companyName} with work phone: ${contact.workPhone}`);
//     }
    
// }

// addContact({
//     name: "Jowamu",
//     email: "jowamu@example.com",
//     phone: "123-456-7890",
//     birthday: new Date("2000-01-01") // Added birthday property
// });

addContact({
    name: "Jowamu",
    birthday: new Date("2000-01-01") 
});