import { defineField, defineType } from "sanity";
export const destination = defineType({
  name: "destination",
  title: "Destination",
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
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "url" }],
    }),
    defineField({
      name: "isTopTen",
      title: "Is It Top Ten",
      type: "boolean",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "hotels",
      title: "Hotels",
      type: "array",
      of: [{ type: "reference", to: [{ type: "hotel" }] }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "reference",
      to: [{ type: "tag" }],
    }),
  ],
});
