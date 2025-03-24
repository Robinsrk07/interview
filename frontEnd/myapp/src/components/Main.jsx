import Menu from "./body/menu"
import Heading from "./body/Heading"
import Details from "./body/Detials"
import useFetch from "../utils/useFetch"
import { useDispatch } from "react-redux"
import { addItems } from "../redux/itemSlicer"
import { useEffect, useState } from "react"

const Main =()=>{
const{data,error,loading} =useFetch()
console.log(data);


const [selectedMenu, setSelectedMenu] = useState(null);

const dispatch = useDispatch()

useEffect(() => {
    if (data.length > 0) {
      dispatch(addItems(data));
      setSelectedMenu(data[0]);
    }
  }, [data, dispatch]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

    return(
        <div>
            <Menu/>
            <Heading onMenuClick={setSelectedMenu} />
            <Details selectedMenu={selectedMenu} />
        </div>
    )
}

export default Main