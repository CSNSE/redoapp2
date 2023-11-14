// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Widget, Dog } = initSchema(schema);

export {
  Widget,
  Dog
};