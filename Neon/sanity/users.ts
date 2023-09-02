// schemas/pet.js
export default {
  name: "user",
  type: "document",
  title: "user",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "email",
      type: "string",
      title: "email",
    },
    {
      name: "age",
      type: "number",
      title: "Age",
    },
  ],
};
