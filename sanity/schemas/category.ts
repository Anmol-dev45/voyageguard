import { defineField, defineType } from "sanity";

export const category = defineType({
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        defineField({
            name: "tag",
            title: "Tag",
            type: "string"
        })
    ]
});
