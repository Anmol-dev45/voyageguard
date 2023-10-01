import { defineField, defineType } from "sanity";

export const food = defineType({
  name: "food",
  title: "Food",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      title: "Image Url",
      type: "url",
    }),
  ],
});
