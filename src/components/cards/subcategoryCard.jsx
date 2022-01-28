import { Link } from 'react-router-dom';

const SubCategoryCard = (props) => {
  return (
    <>
    {
      console.log(props.element.data())
    }
      {!props.element && (
        <div className='text-center py-5' id='noData'>
          <h4>oops no data :(</h4>
        </div>
      )}
      <Link
        to='/'
        className='card category-card col-4 col-lg-2'
        name={props.element.data().Name}
      >
        <img
          src='https://www.ikea.com/global/assets/navigation/images/gaming-furniture-55002.jpeg?imwidth=300'
          className='card-img-top'
          alt='...'
        />

        <div className='card-body category-body'>
          <p className='card-text'>{props.element.data().Name}</p>
        </div>
      </Link>
    </>
  );
};
export default SubCategoryCard;
