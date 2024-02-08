/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Equation } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import EquationImageNoteCard from "./EquationImageNoteCard";
import { getUrl } from "@aws-amplify/storage"; //MAH add!
import { Collection } from "@aws-amplify/ui-react";

import {
  useDataStoreDeleteAction,
  useNavigateAction,
} from "./utils";
import { schema } from "../models/schema";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";


//import { Storage } from "aws-amplify";

import Desmos from 'desmos'
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
    
    //
    
        // itemsDataStore.map(async (equation) => {
        //   if (equation.image) {
        //     const url = await Storage.get(equation.image);
        //     console.log(equation.image + "  " + equation.name);
        //     //console.log(user.attributes.email + "  " + note.author);
        //     equation.image = url;
        //     console.log(equation.image);
        //   }
        //   return equation;
        // })
    //---------------------
    
    itemsDataStore.map(async (equation) => {
      if (equation.image) {
        const getUrlResult = await getUrl({
          key: equation.image,
        });
        console.log(equation.image);
        //equation.image=getUrlResult.url;
      }
      
      console.log(equation);
      return equation;
      })

    }, [itemsProp, itemsDataStore]);

  return (
    <Collection
      type="list"
      isSearchable="true"
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
          
        >
          
          
          {/* <script src="https://www.desmos.com/api/v1.8/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6">
            <div id="calculator" style="width: 600px; height: 400px;"><script>
  var elt = document.getElementById('calculator');
  var calculator = Desmos.GraphingCalculator(elt);
</script></div></script> */}
        </EquationImageNoteCard>
        
      )}
    </Collection>
  );
}
