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
          { label: "Person ID", value: "id" },
          { label: "Channel", value: "channel" },
          { label: "Description", value: "description" },
          { label: "Email", value: "email" },
          { label: "Tags", value: "tags" },
          { label: "Subscribers", value: "subscribers" },
          { label: "Videos", value: "videos" },
          { label: "Views/7Days", value: "viewsper7days" },
          { label: "Superchat Pay", value: "superchat" },
          { label: "Likes/Views", value: "likesperviews" },
          { label: "Last Update", value: "lastupdate" },
          { label: "Last Video", value: "lastvideo" },
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
