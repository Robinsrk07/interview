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
      className="w-full min-h-[400px] h-auto relative flex flex-col items-center justify-center py-10 pb-20 md:pb-10"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <img
        src={image2}
        alt="Overlay"
        className="w-32 h-32 md:w-40 md:h-40 absolute top-[10%] left-[15%] transform -translate-x-1/2 -translate-y-1/2 z-10"
      />

      <div className="absolute top-[10%] border bg-opacity-80 text-white p-4 md:p-5 w-11/12 md:w-3/4 lg:w-4/5 h-auto text-center mb-10 md:mb-0">
        <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 font-serif">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-center mb-6 md:mb-8">
            {selectedMenu.menuName}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {selectedMenu.items.map((item, index) => (
              <div 
                key={index} 
                className={`${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} border-b border-gray-200 pb-4 md:pb-6`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide truncate">
                      {item.name}
                    </h3>
                  </div>
                  <div className="hidden sm:block flex-shrink-0 mx-2 overflow-hidden">
                    <span className="whitespace-nowrap dotted-line">
                      {Array(20).fill('.').join('')}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-md md:text-lg font-semibold">${item.price}</span>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-300 font-serif mt-2">
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