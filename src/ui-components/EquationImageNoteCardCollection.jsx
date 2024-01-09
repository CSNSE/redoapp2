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
import { Collection, Pagination, Placeholder } from "@aws-amplify/ui-react";
import { getUrl } from "@aws-amplify/storage"; //MAH add!
import { generateClient } from "aws-amplify/api";
//
const nextToken = {};
const apiCache = {};
const client = generateClient();
export default function EquationImageNoteCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [pageIndex, setPageIndex] = React.useState(1);
  const [hasMorePages, setHasMorePages] = React.useState(true);
  const [items, setItems] = React.useState(undefined);
  const [isApiPagination, setIsApiPagination] = React.useState(false);
  const [instanceKey, setInstanceKey] = React.useState("newGuid");
  const [loading, setLoading] = React.useState(true);
  const [maxViewed, setMaxViewed] = React.useState(1);
  const pageSize = 6;
  const isPaginated = true;
  React.useEffect(() => {
    nextToken[instanceKey] = "";
    apiCache[instanceKey] = [];
  }, [instanceKey]);
  React.useEffect(() => {
    setIsApiPagination(!!!itemsProp);
  }, [itemsProp]);
  const handlePreviousPage = () => {
    setPageIndex(pageIndex - 1);
  };
  const handleNextPage = () => {
    setPageIndex(pageIndex + 1);
  };
  const jumpToPage = (pageNum) => {
    setPageIndex(pageNum);
  };

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
   //
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
        await client.graphql({
          query: listEquations.replaceAll("__typename", ""),
          variables,
        })
      ).data.listEquations;
      newCache.push(...result.items);
      newNext = result.nextToken;
      /* MAH lines 66-78 be sure to update variable names to match your model! */
      const equationsFromAPI = result.items
      await Promise.all(
        equationsFromAPI.map(async (equation) => {
          if (equation.image) {
            const getUrlResult = await getUrl({
              key: equation.image,
            });
            equation.image=getUrlResult.url;
          }
          return equation;
          })
        );
    }
    const cacheSlice = isPaginated
      ? newCache.slice((page - 1) * pageSize, page * pageSize)
      : newCache;
    setItems(cacheSlice);
    setHasMorePages(!!newNext);
    setLoading(false);
    apiCache[instanceKey] = newCache;
    nextToken[instanceKey] = newNext;
  };
  //
  //
  // return (
  //   <Collection
  //     type="list"
  //     isSearchable={true}
  //     isPaginated={true}
  //     searchPlaceholder="Search..."
  //     itemsPerPage={3}
  //     direction="row"
  //     alignItems="stretch"
  //     items={items || []}
  //     {...getOverrideProps(overrides, "EquationImageNoteCardCollection")}
  //     {...rest}
  //   >
  //     {(item, index) => (
  //       <EquationImageNoteCard
  //         equation={item}
  //         key={item.id}
  //         {...(overrideItems && overrideItems({ item, index }))}
  //       ></EquationImageNoteCard>
  //     )}
  //   </Collection>
  // );
  return (
    <div>
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
        {(item, index) => {
          return (
            <EquationImageNoteCard
            equation={item}
              key={item.id}
              {...(overrideItems && overrideItems({ item, index }))}
            ></EquationImageNoteCard>
          );
        }}
      </Collection>

    </div>
  );
}
