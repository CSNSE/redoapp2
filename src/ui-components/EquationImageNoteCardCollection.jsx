/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Equation } from "../models";
import { listEquations } from "../graphql/queries";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import EquationImageNoteCard from "./EquationImageNoteCard";
import { Collection } from "@aws-amplify/ui-react";
import { getUrl } from "@aws-amplify/storage"; //MAH add!
import { generateClient } from "aws-amplify/api";
const nextToken = {};
const apiCache = {};
const client = generateClient();
export default function EquationImageNoteCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Equation,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  const loadPage = async (page) => {
    const cacheUntil = page * pageSize + 1;
    const newCache = apiCache[instanceKey].slice();
    let newNext = nextToken[instanceKey];
    while ((newCache.length < cacheUntil || !isPaginated) && newNext != null) {
      setLoading(true);
      const variables = {
        limit: pageSize,
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
  const result = (
        client.graphql({
          query: listEquations.replaceAll("__typename", ""),
          variables,
        })
      ).data.listEquations;
      newCache.push(...result.items);
      newNext = result.nextToken;
      /* MAH lines 66-78 be sure to update variable names to match your model! */
      const recipesFromAPI = result.items
        Promise.all(
        recipesFromAPI.map(async (recipe) => {
          if (recipe.image) {
            const getUrlResult = await getUrl({
              key: recipe.image,
            });
            recipe.image=getUrlResult.url;
          }
          return recipe;
          })
        );
    }
  }
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={3}
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "EquationImageNoteCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <EquationImageNoteCard
          equation={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></EquationImageNoteCard>
      )}
    </Collection>
  );
}
