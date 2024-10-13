type StringOrNUmber = string | number | boolean;
declare function acceptVal(val: StringOrNUmber): void;
interface BusinessPartner {
    name: string;
}
interface ContactDetails {
    email: string;
    phone: string;
}
type BusinessContact = BusinessPartner & ContactDetails;
declare const contact: BusinessContact;
interface Individual {
    name: string;
    birthday: Date;
    email: string;
    phone: string;
}
interface Organization {
    companyName: string;
    workPhone: string;
}
type ContactType = Individual | Organization;
type CompContact = Individual & Organization;
declare function addContact(contact: ContactType): void;
