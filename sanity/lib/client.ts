import { createClient, groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})


export const getDestination = async (id: string) => {
  return client.fetch(
    groq`*[_type == "destination && _id == $id"]{
      _id,
      name,
      "slug": slug.current,
      "image": images[0].asset->url,
      description,
      description,
      hotels[]->{
        _id,
        name,
        "slug": slug.current,
        "images": images[0].asset->url,
        description
      }
  }`
  )
}


export const getDestinations = async () => {
  return client.fetch(
    groq`*[_type == "destination"]{
      _id,
      name,
      "slug": slug.current,
      "images": images[].asset->url,
      description
  }`
  )
}
export const getHotel = async (id: string) => {
  return client.fetch(
    groq`*[_type == "hotel" && _id == $id]{
      _id,
      name,
      "slug": slug.current,
      "images": images[].asset->url,
  }`
  )
}


export const getHotels = async () => {
  return client.fetch(
    groq`*[_type == "hotel"]{
      _id,
      name,
      "slug": slug.current,
      "images": image[].asset->url,
      description
  }`
  )
}

export const getTopDestinations = async () => {
  return client.fetch(
    groq`*[_type == "destination && topTen == true"]{
      _id,
      name,
      "slug": slug.current,
      "image": image[0].asset->url,
      
  }`
  )
}
