import { type SchemaTypeDefinition } from 'sanity'
import { destination } from './schemas/destination'
import { hotel } from './schemas/hotel'
import { food } from './schemas/food'
import { category } from './schemas/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category,destination, hotel, food ],
}
