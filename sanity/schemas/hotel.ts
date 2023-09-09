import { defineField, defineType } from "sanity";

export const hotel = defineType({
    name: "hotel",
    title: "Hotel",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string"
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name"
            }
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "array",
            of: [{ type: "image" }]
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "geopoint"
        })
    ]
});