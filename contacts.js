const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');
const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);

    const result = JSON.parse(data);
    console.table(result);
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async contactId => {
  // console.log(' get:>> ');

  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    const contact = result.find(({ id }) => Number(id) === Number(contactId));
    console.table(contact);
  } catch (error) {
    console.error(error.message);
  }
};

const removeContact = async contactId => {
  // console.log(' remove:>> ');

  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    const removedContact = result.filter(
      item => Number(item.id) !== Number(contactId),
    );
    await fs.writeFile(contactsPath, JSON.stringify(removedContact));
  } catch (error) {
    console.error(error.message);
  }
};

const addContact = async (id, name, email, phone) => {
  // console.log('add:>>');

  const newContact = { id, name, email, phone };
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);

    const newContactsList = [...result, newContact];
    const newDataContacts = await fs.writeFile(
      contactsPath,
      JSON.stringify(newContactsList),
    );
    // console.table(newDataContacts);
    // await fs.appendFile(contactsPath, JSON.stringify(newContact));
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
