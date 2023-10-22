import { defineField, defineType } from "sanity";

export const tag = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
    }),
  ],
});
