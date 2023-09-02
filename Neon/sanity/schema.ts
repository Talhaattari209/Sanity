import { type SchemaTypeDefinition } from "sanity";
import pets from "./pets";
import users from "./users";
export const schema: {types: SchemaTypeDefinition[]} = {
  types: [pets, users],
};
