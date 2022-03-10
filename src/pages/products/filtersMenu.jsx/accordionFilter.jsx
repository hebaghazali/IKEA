import React from "react";
import { useTranslation } from "react-i18next";

export default function AccordionFilter({ title }) {
  const {t} = useTranslation()
  return (
    <div className="accordion-item">
      <button
        className="accordion-button fw-bold filter-acc"
        style={{ background: "white", color: "black" }}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
        {title}
      </button>
      <div
        id="flush-collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <ul className="w-100 px-3"> 
          {/* {props.items.map((item, index) => (
            <FilterListItem
              key={index}
              label={item.label}
              id={item.id}
              {...props}
            />
          ))} */}
          <li className="d-flex justify-content-between my-2">
            <label className="form-check-label" htmlFor="bestmatch-radio">
              {t('BestMatch')}
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sort-filter"
                id="bestmatch-radio"
              />
            </div>
          </li>

          <li className="d-flex justify-content-between my-2">
            <label className="form-check-label" htmlFor="bestmatch-radio">
              {t('Name')}
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sort-filter"
                id="bestmatch-radio"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
