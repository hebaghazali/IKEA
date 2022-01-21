import React from "react";
import Breadcrumb from "../../components/breadCrumb/breadCrumb";

const Products = () => {
  return (
    <div className="border-top mt-nav-3 pt-nav container">
      <Breadcrumb />

      <div className="section-title">
        <h3 id="sub-title">Children beds</h3>
      </div>

      <section className="col-12 col-md-7 col-lg-7">
          <p className="description">
            We understand that growing kids have lots of needs. Like a quiet
            spot to relax or a place to do their homework. That's why loft beds
            for kids are a super-smart multi-tasking solution, helping you free
            up space for a desk, sofa, wardrobe or pillow fort. Bring home a
            children's loft bed today!
          </p>
      </section>

    </div>
  );
};

export default Products;
