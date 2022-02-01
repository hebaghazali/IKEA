import { Link } from 'react-router-dom';

const TextRightCard = () => {
  return (
    <div>
      <h4 className='head-title my-5' style={{ zIndex: 1 }}>
        Fun desks to keep your creativity flowing
      </h4>
      <Link
        className='row card row-card g-0'
        to='/'
        style={{ margin: '0', paddingTop: '6.5rem' }}
      >
        <img
          className='col-12 col-sm-6 col-md-8'
          src='https://www.ikea.com/images/a-white-green-pahl-desk-a-white-micke-desk-and-a-grey-turquo-b4502b450450609155755731b37c1ffb.jpg?f=xl'
          alt='...'
        />
        <div className='col-12 col-sm-6 col-md-4 card-body card-right'>
          <h4 className='card-text head-title'>Meet your new study buddies</h4>
          <button className='card-btn'>
            <i className='bi bi-arrow-right'></i>
          </button>
        </div>
      </Link>
    </div>
  );
};
export default TextRightCard;
