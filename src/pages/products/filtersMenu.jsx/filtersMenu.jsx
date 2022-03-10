import React from "react";
import AccordionFilter from "./accordionFilter";
import FilterHeader from "./filterHeader";

export default function FiltersMenu() {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="filter-menue"
      aria-labelledby="filter-menueLabel"
    >
      <FilterHeader/>

      <div className="offcanvas-body">
        <div className="accordion accordion-flush" id="accordionFlushExample">

          <AccordionFilter title='Sort'/>

          <div className="accordion-item">
            <button
              className="accordion-button fw-bold"
              style={{background: 'white', color: 'black'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Size
            </button>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <ul className="w-100 px-3">
                <li className="d-flex justify-content-between my-2">
                  <label className="form-check-label" htmlFor="">
                    160 cm * 200 cm
                  </label>
                  <div>
                    <label className="form-check-label small-text mx-2" htmlFor="">
                      30
                    </label>
                    <input className="form-check-input" type="checkbox" id="" />
                  </div>
                </li>

                <li className="d-flex justify-content-between my-2">
                  <label className="form-check-label" htmlFor="">
                    180 cm * 200 cm
                  </label>
                  <div>
                    <label className="form-check-label small-text mx-2" htmlFor="">
                      40
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="accordion-item">
            <button
              className="accordion-button fw-bold "
              style={{background: 'white', color: 'black'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Price
            </button>

            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <ul className="w-100 px-3">
                <li className="d-flex justify-content-between my-2">
                  <label className="form-check-label" htmlFor="">
                    EGP 0 - 1,999
                  </label>
                  <div>
                    <label className="form-check-label small-text mx-2" htmlFor="">
                      30
                    </label>
                    <input className="form-check-input" type="checkbox" id="" />
                  </div>
                </li>

                <li className="d-flex justify-content-between">
                  <label className="form-check-label" htmlFor="">
                    EGP 1,999 - 4,000
                  </label>
                  <div>
                    <label className="form-check-label small-text mx-2" htmlFor="">
                      40
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="accordion-item">
            <button
              className="accordion-button fw-bold"
              style={{background: 'white', color: 'black',border: '0'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-color"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Color
            </button>

            <div
              id="collapse-color"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <ul className="w-100 px-3">
                <li className="d-flex justify-content-between my-2">
                  <label className="form-check-label" htmlFor="">
                    {" "}
                    red{" "}
                  </label>
                  <div>
                    <label className="form-check-label small-text mx-2" htmlFor="">
                      30
                    </label>
                    <input className="form-check-input" type="checkbox" id="" />
                  </div>
                </li>

                <li className="d-flex justify-content-between my-2">
                  <label className="form-check-label" htmlFor="">
                    {" "}
                    blue{" "}
                  </label>
                  <div>
                    <label className="form-check-label small-text mx-2" htmlFor="">
                      40
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="offcanvas-footer text-center">
        <button className="rounded-pill py-1 col-5 clear-btn">Clear all</button>
        <button className="border rounded-pill py-1 col-5 text-light view-btn">
          View
          <span>6</span>
        </button>
      </div>
    </div>
  );
}
