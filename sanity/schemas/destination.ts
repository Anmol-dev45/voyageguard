import { defineField, defineType } from "sanity";

export const destination = defineType({
    name: "destination",
    title: "Destination",
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
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }]
        }),
        defineField({
            name:"tags",
            title:"Tags",
            type:"reference",
            to:[{type:"category"}]
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "geopoint"
        })
    ]
})