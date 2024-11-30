"use client"

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
export type User = {
    id:string
  name: string
  phone:  string
  company:Company
  email: string
}

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
               Name
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        }
    },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
},
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "company",
    header: () => <div className="text-right">Comapny Name</div>,
    cell: ({ row }) => { 
 
      return <div className="text-right ">{row.original.company.name}</div>
    },
  },
 
]
