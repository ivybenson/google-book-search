import React from "react";
import FilterBookType from "../FilterBookType/FilterBookType";
import FilterPrintType from "../FilterPrintType/FilterPrintType";

export default function FilterBar(props) {
  return (
    <div className="filterBar">
      <FilterBookType />
      <FilterPrintType />
    </div>
  );
}
