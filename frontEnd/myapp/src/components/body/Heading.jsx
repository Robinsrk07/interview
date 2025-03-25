import image from '../../assets/images/d875fd6fec8f3801ba095cc39be0e4b1.png';
import { useSelector } from 'react-redux';

const Heading = ({ onMenuClick }) => {
  const menus = useSelector((store) => store.items);

  return (
    <div
      className="w-full h-[75px] bg-cover bg-center flex items-center justify-center gap-2 md:gap-4 overflow-x-auto px-2"
      style={{ backgroundImage: `url(${image})` }}
    >
      {menus.map((menu, index) => (
        <div 
          key={index}
          onClick={() => onMenuClick(menu)}
          className="bg-black text-white px-3 py-1 md:px-4 md:py-2 text-sm md:text-lg font-bold min-w-[60px] md:min-w-[80px] rounded-md text-center uppercase whitespace-nowrap hover:scale-105 transition-transform flex-shrink-0"
        >
          {menu.menuName}
        </div>
      ))}
    </div>
  );
};

export default Heading;