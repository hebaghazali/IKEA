import React from "react";

export default function FilterHeader() {
  return (
    <div className="offcanvas-header border">
      <h5 className="offcanvas-title m-auto" id="filter-menue-Label">
        filters and sort
      </h5>
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
  );
}
