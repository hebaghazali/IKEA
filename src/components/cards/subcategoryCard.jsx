import { Link } from 'react-router-dom';

const SubCategoryCard = (props) => {
  const{type,name,id,element}=props;
  return (
    <>
      {!props.element && (
        <div className='text-center py-5' id='noData'>
          <h4>oops no data :(</h4>
        </div>
      )}
      <Link
        to={{
          // pathname: "/category/products/"+props.element.id,
          pathname: `/category/${type}/${name}/${id}/${element.data().Name}/${element.id}`,
          // state: {
          //   type: props.type,//products or rooms
          //   name: props.name,//category name
          //   id: props.id,//category Id
          //   subCatName:props.element.data().Name,
          //   subCatId:props.element.id,
          //   subObj:props.element.data()
          // }
        }}
        // to={`/category/product/${props.params.name }/${props.params.id }/${props.element.data().Name}/${props.element.id}`}
        className='card category-card col-4 col-lg-2'
        name={props.element.data().Name}
        // name={props.element.Name}
      >
        <img
          // src='https://www.ikea.com/global/assets/navigation/images/gaming-furniture-55002.jpeg?imwidth=300'
          src={props.element.data().Image}
          className='card-img-top'
          alt='...'
        />

        <div className='card-body category-body'>
          <p className='card-text'>{props.element.data().Name}</p>
          {/* <p className='card-text'>{props.element.Name}</p> */}
        </div>
      </Link>
    </>
  );
};
export default SubCategoryCard;
