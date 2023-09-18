import { createClient, groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})


export const getDestination = async () => {
  return client.fetch(
    groq`*[_type == "destination"]{
      _id,
      name,
      "slug": slug.current,
      url,
      description
  }`
  )
}