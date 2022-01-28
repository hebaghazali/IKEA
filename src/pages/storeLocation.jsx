import LocationAccordion from "../components/accordion/locationsAccordion";

const StoresPage = () => {
  return (
    <>
      <div className='row big-title col-12 col-md-7 p-2'>
        Choose your nearest IKEA store
      </div>
      <div className='row small-text col-12 col-md-7 p-2'>
        Select your local IKEA store to see the location, opening hours, offers
        & events, services, and more.
      </div>
      <div
        className='accordion accordion-flush my-5'
        id='accordionFlushExample'
      >
          <LocationAccordion></LocationAccordion>
      </div>
    </>
  );
};
export default StoresPage;