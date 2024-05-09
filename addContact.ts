

export default class PhoneBook {
    contacts: any[];
    constructor() {
        this.contacts = [];
    }

    addContact(name: string, phoneNumber: string) {
        this.contacts.push({ name, phoneNumber });
        console.log(`Contact "${name}" added successfully.`);
    }

    updateContact(name: string, newPhoneNumber: string) {
        const contact = this.findContact(name);
        if (contact) {
            contact.phoneNumber = newPhoneNumber;
            console.log(`Contact "${name}" updated successfully.`);
        } else {
            console.log(`Contact "${name}" not found.`);
        }
    }

    deleteContact(name: string) {
        const index = this.contacts.findIndex((contact: { name: any; }) => contact.name === name);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Contact "${name}" deleted successfully.`);
        } else {
            console.log(`Contact "${name}" not found.`);
        }
    }

    displayContacts() {
        console.log("Contacts:");
        this.contacts.forEach((contact: { name: any; phoneNumber: any; }) => {
            console.log(`${contact.name}: ${contact.phoneNumber}`);
        });
    }

    findContact(name: any) {
        return this.contacts.find((contact: { name: any; }) => contact.name === name);
    }
}