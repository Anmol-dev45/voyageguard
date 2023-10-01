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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "topTen",
      title: "Is It Top Ten",
      type: "boolean",
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
      to: [{ type: "category" }],
    }),
  ],
});
