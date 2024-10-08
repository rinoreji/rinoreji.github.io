
import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { ProfInfo } from "../types";

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  export async function getData() {
    return queryDatabase(process.env.NOTION_DB_ID || '')
  }
async function queryDatabase(databaseId:string) {
    console.log("Querying database...")
    // const data = await notion.databases.list();
    // console.log('dbs',data);
    // This query will filter database entries and return pages that have a "Last ordered" property that is more recent than 2022-12-31. Use multiple filters with the AND/OR options: https://developers.notion.com/reference/post-database-query-filter.
    const lastOrderedIn2023 = await notion.databases.query({
      database_id: databaseId,
    //   filter_properties:['Name','Value'],
      filter: {
        property: "Show",
        checkbox: {
          equals: true,
        },
      },
    })
  
    // Print filtered results
    console.log(lastOrderedIn2023.results[1].properties)
    console.log(lastOrderedIn2023.results.map<ProfInfo>(r=> {
        value:r.Value
    }));
    console.log('--------------------------')
    // return lastOrderedIn2023;
  }