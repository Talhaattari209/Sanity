
export default {
  name: "pet",
  type: "document",
  title: "Pet",
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
    {
      name: "picture",
      type: "image",
      title: "picture",
    },
    {
      title: "Names",
      name: "names",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Has the movie been released?",
      name: "released",
      type: "boolean",
    },
    {
      title: "Release date",
      name: "releaseDate",
      type: "date",
    },
    {
      title: "Manuscript",
      name: "manuscript",
      type: "file",
      fields: [
        {
          name: "description",
          type: "string",
          title: "Description",
        },
      ],
    },
  ],
};
