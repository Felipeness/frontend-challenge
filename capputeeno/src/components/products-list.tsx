"use client";

import { useProducts } from "@/hooks/useProducts";

interface ProductsListProps {

};

export function ProductsList(props: ProductsListProps) {
  const { data } = useProducts();
  console.log(data);
  return (
    <div>
      <h1>Products List</h1>
    </div>
  )
};
