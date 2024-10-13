function acceptVal(val) {
    if (typeof val === 'number') {
        console.log(val * 2);
    }
    else if (typeof val === 'string') {
        console.log(val.toUpperCase());
    }
    else {
        console.log('Boolean value is not supported');
    }
}
acceptVal(10);
const contact = {
    name: "Jowamu",
    email: "jowamu@example.com",
    phone: "123-456-7890"
};
function addContact(contact) {
    if ('name' in contact && 'birthday' in contact) {
        console.log(`Adding individual contact: ${contact.name} with birthday: ${contact.birthday}`);
    }
    else if ('companyName' in contact && 'workPhone' in contact) {
        console.log(`Adding organization contact: ${contact.companyName} with work phone: ${contact.workPhone}`);
    }
}
addContact({
    name: "Jowamu",
    email: "jowamu@example.com",
    phone: "123-456-7890",
    birthday: new Date("2000-01-01")
});
