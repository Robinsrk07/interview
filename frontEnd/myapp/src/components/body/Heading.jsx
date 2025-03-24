import image from '../../assets/images/d875fd6fec8f3801ba095cc39be0e4b1.png';
import { useSelector } from 'react-redux';

const Heading = ({ onMenuClick }) => {
  const menus = useSelector((store) => store.items);
  console.log(menus[0]);
  

  return (
    <div
      className="w-full h-[75px] bg-cover bg-center flex items-center justify-center gap-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      {menus.map((menu, index) => (
        
        <div 
          key={index}
          onClick={() => onMenuClick(menu)}
          className="bg-black text-white px-4 py-2 text-lg font-bold w-20 rounded-md text-center"
        >
          {menu.menuName}
        </div>
      ))}
    </div>
  );
};

export default Heading;
