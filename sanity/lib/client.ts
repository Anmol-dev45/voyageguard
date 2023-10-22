import { createClient, groq } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const getDestination = async (id: string) => {
  return client.fetch(
    groq`*[_type == "destination" && _id == $id]{
      _id,
      name,
      images,
      description,
      hotels[]-> {
        _id,
        name,
        description,
        images,
      }
  }`
  );
};

export const getDestinations = async () => {
  return client.fetch(
    groq`*[_type == "destination"]{
      _id,
      name,
      images,
      description
  }`
  );
};
export const getHotel = async (id: string) => {
  return client.fetch(
    groq`*[_type == "hotel" && _id == $id]{
      _id,
      name,
      description,
      images,
  }`
  );
};

export const getHotels = async () => {
  return client.fetch(
    groq`*[_type == "hotel"]{
      _id,
      name,
      images,
      description
  }`
  );
};

export const getTopDestinations = async () => {
  return client.fetch(
    groq`*[_type == "destination" && isTopTen == true]{
      _id,
      name,
      description,
      images,
  }`
  );
};
