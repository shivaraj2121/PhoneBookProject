import promptSync from 'prompt-sync'
import PhoneBook from './addContact';
const prompt =promptSync();
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
     