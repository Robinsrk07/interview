import image from "../../assets/images/cropped-f81b6208cb3da0f5ecc0f0d109ca4bd0.jpg";

const Menu = () => {
  return (
    <div className="relative w-full h-[250px] flex items-center justify-center">
      <img 
        src={image} 
        alt="Menu Background" 
        className="w-full h-full object-cover"
      />
      
      <div className="absolute text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-serif text-white drop-shadow-[3px_3px_5px_rgba(255,0,0,0.8)] mb-2 sm:mb-3 md:mb-4">
          MENU
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 font-serif max-w-[800px] mx-auto">
          Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
        </p>
      </div>
    </div>
  );
};

export default Menu;