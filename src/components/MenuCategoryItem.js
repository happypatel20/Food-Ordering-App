// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import MenuItemList from "./MenuItemList";

const MenuCategoryItem = ({data, open, setShowIndexProps}) => {
  // const [open, SetOpen] = useState(false)
  const handleClick = () =>{
    setShowIndexProps()
  }
  return (
    <div className="w-6/12 mx-auto mb-5">
      <div className="bg-slate-200 p-2 px-3 text-xl rounded-sm cursor-pointer flex justify-between items-center" onClick={() => handleClick()}>
        <h1 className="font-bold">{data.title}</h1>
        {open? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
        
      </div>
      { open &&
      <div className="border border-gray-300">
         <MenuItemList  items={data.itemCards}/>
      </div>
      }
    </div>
  )
}

export default MenuCategoryItem
