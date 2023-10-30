// @ts-nocheck

import xlsx, { IJsonSheet } from "json-as-xlsx";
import { people } from "@/data/people";
import { toast } from "@/components/ui/use-toast";


export function downloadToExcel(selected) {

  if (!!selected) {
    const originalObjects = selected.map(obj => obj.original);
    let columns: IJsonSheet[] = [
      {
        sheet: "Persons",
        columns: [
          { label: "Platform", value: "Platform" },
          { label: "Username", value: "Username" },
          { label: "URL", value: "URL" },
          { label: "Followers", value: "Followers" },
          { label: "Posts", value: "Posts" },
          { label: "Views", value: "Views" },
          { label: "Likes", value: "Likes" },
          { label: "Email", value: "Email" },
          { label: "Description", value: "Description" },
          { label: "Growth", value: "Growth" },
          { label: "Engagement", value: "Engagement" },
          { label: "Location", value: "Location" },
        ],
        content: originalObjects.slice(0,10),
      },
    ];
    
    let settings = {
      fileName: "People Excel",
    };

    xlsx(columns, settings);
  } else {
    toast({
      title: "Please Select Rows",
      description: "You need to select multiple rows to export.",
      variant: "default",
    });
  }
}
