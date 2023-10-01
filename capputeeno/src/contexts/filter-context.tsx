"use client"

import { FilterTypes } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import {ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterTypes.ALL,
  priority: PriorityTypes.NEW,
  setPriority: (value: PriorityTypes) => { },
  setSearch: (value: string) => { },
  setPage: (value: number) => { },
  setType: (value: FilterTypes) => { },
});

interface ProvideProps {
  children: ReactNode
}

export function FilterContextProvider({ children }: ProvideProps) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterTypes.ALL);
  const [priority, setPriority] = useState(PriorityTypes.NEW);
  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        setSearch,
        setPage,
        setType,
        priority,
        setPriority,
      }}>
      {children}
    </FilterContext.Provider>
  )
};
