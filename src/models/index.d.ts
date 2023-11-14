import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type WidgetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Widget {
  readonly id: string;
  readonly wid?: string | null;
  readonly name?: string | null;
  readonly src?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Widget, WidgetMetaData>);
  static copyOf(source: Widget, mutator: (draft: MutableModel<Widget, WidgetMetaData>) => MutableModel<Widget, WidgetMetaData> | void): Widget;
}

export declare class Dog {
  readonly id: string;
  readonly fid?: string | null;
  readonly name?: string | null;
  readonly src?: string | null;
  readonly user?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dog, DogMetaData>);
  static copyOf(source: Dog, mutator: (draft: MutableModel<Dog, DogMetaData>) => MutableModel<Dog, DogMetaData> | void): Dog;
}