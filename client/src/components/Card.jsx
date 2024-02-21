
import { FaStar } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  const {_id, title, rating, price, image, trainer } = data;
  const cardOpen = () => {};
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
      <Link to={`/yogas/${_id}`}>
        <img className="h-" src={image} alt="random" />
        </Link>
        <div className="px-6 py-4">
          <div className="flex items-center gap-3 mb-2">
            <FaStar size={20} color="yellow" />
            <p className="text-gray-700 text-base mt-1">{rating}</p>
          </div>
          <Link to={`/yogas/${_id}`}><div className="font-bold text-xl mb-2">{title}</div></Link>
          
          <p className="text-gray-700 text-base">By - {trainer}</p>
        </div>
        <hr className="mb-2 " />
        <div className=" flex items-center px-6 pb-4 justify-between">
          <div className="font-bold">₹ {price}/month</div>
          <Link to={`/yogas/${_id}`}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full flex items-center gap-2"
              onClick={cardOpen}
            >
              <FiShoppingCart />
              Add
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
