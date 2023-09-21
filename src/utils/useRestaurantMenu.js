import { useEffect, useState } from "react";
import { RES_MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [restroMenu, setRestroMenu] = useState(null);
  useEffect(() => {
    fetchData(resId);
  }, []);
  const fetchData = async () => {
    const data = await fetch(RES_MENU_API + resId);
    const json = await data.json();
    setRestroMenu(json);
  };
  return restroMenu;
};

export default useRestaurantMenu;
