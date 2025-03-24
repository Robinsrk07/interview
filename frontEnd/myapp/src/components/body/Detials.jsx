import image from "../../assets/images/f37f4a258b3eea846bf145fb95b71dfd.png";
import image2 from "../../assets/images/09e436820849a421ec0b1fe5126bf9b5.png";

const Details = ({ selectedMenu }) => {
  if (!selectedMenu) return (
    <div className="w-full min-h-[500px] flex items-center justify-center">
      <p>Select a menu above</p>
    </div>
  );

  return (
    <div 
      className="w-full min-h-[400px] h-auto relative flex flex-col items-center justify-center py-10"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <img
        src={image2}
        alt="Overlay"
        className="w-40 h-40 absolute top-[10%] left-[15%] transform -translate-x-1/2 -translate-y-1/2 z-10"
      />

      <div className="absolute top-[10%] border bg-opacity-80 text-white p-5 w-3/4 h-auto md:w-4/5 text-center">
        <div className="max-w-4xl mx-auto px-4 py-8 font-serif">
  <h2 className="text-3xl font-bold uppercase tracking-wider text-center mb-8">
    {selectedMenu.menuName}
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {selectedMenu.items.map((item, index) => (
      <div 
        key={index} 
        className={`${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} border-b border-gray-200 pb-6`}
      >
        <div className="flex justify-between items-baseline mb-1">
          <h3 className="text-xl font-bold uppercase tracking-wide">
            {item.name}........
          </h3>
          <span className="text-lg font-semibold">${item.price}</span>
        </div>
        <p className="text-sm  text-gray-300 font-serif">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default Details;