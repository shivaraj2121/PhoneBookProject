import PromptSync from "prompt-sync";

class PhoneBook {
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
const prompt =PromptSync();
const phoneBook = new PhoneBook();

while (true) {
    try {
        
   
    console.log("n1. Add Contact\n2. Update Contact\n3. Delete Contact\n4. Display Contacts\n5. Exit");
    const choice = parseInt(prompt("Enter your choice: "));

    switch (choice) {
        case 1:
            const nameToAdd = prompt("Enter name: ");
            const phoneNumberToAdd = prompt("Enter phone number: ");
            phoneBook.addContact(nameToAdd, phoneNumberToAdd);
            break;
        case 2:
            const nameToUpdate = prompt("Enter name to update: ");
            const newPhoneNumber = prompt("Enter new phone number: ");
            phoneBook.updateContact(nameToUpdate, newPhoneNumber);
            break;
        case 3:
            const nameToDelete = prompt("Enter name to delete: ");
            phoneBook.deleteContact(nameToDelete);
            break;
        case 4:
            phoneBook.displayContacts();
            break;
        case 5:
            console.log("Exiting...");
            
        default:
            console.log("Invalid choice!");
        }
        } catch (error) {
             //console.error("An error occurred:", error.message);
        }
        }
     