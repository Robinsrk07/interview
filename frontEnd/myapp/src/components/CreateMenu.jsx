import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CreateMenu = () => {
  const menus = useSelector((store) => store.items);
  const menuNames = menus.map(item=>item.menuName)
  console.log(menuNames);
  
  const[existingMenu,setExistingMenu] = useState(false)
  const [menuName, setMenuName] = useState("");
  const [showItemForm, setShowItemForm] = useState(false);
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [message, setMessage] = useState(null); 
  const [error, setError] = useState(null);
 
 
  const handleAddItem = () => {
    if (currentItem.name && currentItem.price) {
      setItems([...items, currentItem]);
      setCurrentItem({ name: "", price: "", description: "" });
      setShowItemForm(false);
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleSaveMenu = async () => {
    try {
      const response = await axios.post("https://api.techiconnect.shop/addMenu", {

        
        menuName,
        items,
      });
      console.log(response);
       
      setMessage("Menu saved successfully! ✅");
      setItems([]);
      setMenuName("");
     
      setTimeout(() => setMessage(null), 3000);
    } catch (err) {
      setError(err.message|| "Failed to save menu. ❌");
      setTimeout(() => setError(null), 3000);
    }
  };
  useEffect(() => {
    if (menuNames.includes(menuName)) {
        setShowItemForm(false)

      setExistingMenu(true);


    } else {
      setExistingMenu(false);

    }
  }, [menuNames, menuName]);

  return (
    <div className="flex flex-col bg-grey p-4 items-center justify-center max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Create Menu</h1>

      {message && <div className="text-green-600">{message}</div>}
      {error && <div className="text-red-600">{error}</div>}
      {existingMenu && <div className="text-red-600">Existing menu</div>} 

      

      <div className="flex flex-col sm:flex-row items-center gap-2 w-full mb-4">
        <label className="text-sm font-medium sm:whitespace-nowrap">
          MENU NAME:
        </label>
        <input
          type="text"
          value={menuName}
          onChange={(e) => setMenuName(e.target.value)}
          className="p-2 border rounded w-full sm:w-64 flex-grow"
          placeholder="Enter menu name"
        />
        {menuName && !existingMenu && (
          <button
            className="btn btn-success mt-2 sm:mt-0 w-full sm:w-auto"
            onClick={() => setShowItemForm(true)}
          >
            Add Item
          </button>
        )}
      </div>

      {showItemForm && (
        <div className="mt-4 flex flex-col gap-2 w-full p-4 border rounded-lg">
          <h2 className="font-semibold">Add New Item</h2>
          <input
            type="text"
            value={currentItem.name}
            onChange={(e) =>
              setCurrentItem({ ...currentItem, name: e.target.value })
            }
            className="p-2 border rounded w-full"
            placeholder="Item name"
          />
          <input
            type="text"
            value={currentItem.price}
            onChange={(e) =>
              setCurrentItem({ ...currentItem, price: e.target.value })
            }
            className="p-2 border rounded w-full"
            placeholder="Price"
          />
          <input
            type="text"
            value={currentItem.description}
            onChange={(e) =>
              setCurrentItem({ ...currentItem, description: e.target.value })
            }
            className="p-2 border rounded w-full"
            placeholder="Description"
          />
          <div className="flex gap-2 mt-2">
            <button className="btn btn-primary flex-1" onClick={handleAddItem}>
              Save Item
            </button>
            <button
              className="btn btn-outline flex-1"
              onClick={() => setShowItemForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

     

      {items.length > 0 && (
        <div className="mt-6 w-full">
          <h2 className="font-bold text-lg mb-2">Menu Items</h2>
          <div className="space-y-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-3 border rounded-lg flex justify-between items-center"
              >
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.price}</p>
                  {item.description && (
                    <p className="text-xs text-gray-500 mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="btn btn-error btn-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {items.length > 0 && (
        <button className="btn btn-primary mt-6 w-full" onClick={handleSaveMenu}>
          Save Menu
        </button>
      )}
    </div>
  );
};

export default CreateMenu;