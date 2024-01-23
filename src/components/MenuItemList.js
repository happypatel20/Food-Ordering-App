import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constant";
import { addItems } from "../utils/cartSlice";

const MenuItemList = ({items}) => {
  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    dispatch(addItems(item))
  }
  return(
    <div>
    {items.map((item) => (
      <div className="px-3">
        <div className="border-b-2 border-gray-300 py-4 flex">
          <div className="w-9/12">
            <h2 className="font-bold">{item.card.info.name}</h2>
            <p className="text-sm mt-2">Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}</p>
            <p className="text-xs mt-2">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 relative rounded-md">
            <img src={IMG_URL+item.card.info.imageId} className="rounded-md" />
            <button className="bg-green-400 text-white text-sm absolute bottom-0 m-auto left-0 right-0 px-3 py-2 rounded-md" onClick={() => handleAddItem(item)}>Add +</button>
          </div>
        </div>
      </div>
    ))}
    </div>
  )
}

export default MenuItemList;
