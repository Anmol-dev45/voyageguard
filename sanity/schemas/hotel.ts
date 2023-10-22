import { defineField, defineType } from "sanity";

export const hotel = defineType({
  name: "hotel",
  title: "Hotel",
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
      type: "text",
    }),
    defineField({
      name: "stars",
      title: "Stars",
      type: "number",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "url" }],
    }),
  ],
});
