import { groq } from "next-sanity";

export const getCollectionsQuery = groq`[_type == 'collections']`;