import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-wrap">
        <img
          className="header_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9RNx_tM1jdJJHp0lASjUdMUKsyMJhMWqqzI51BUBdw&usqp=CAU&ec=48600113"
        />
        <ul className="header_nav-list">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Cart</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
const RestroCard = (props) => {
  const { name, avgRating, cuisines, address, cloudinaryImageId } =
    props.restroData.data;
  return (
    <div className="restro_card">
      <img
        className="restro_card-img"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <div className="restro_card-heading">
        <h2>{name}</h2>
        <span className="rating"> {avgRating}</span>
      </div>
      <p>{cuisines.join(", ")}</p>
      <p>{address}</p>
    </div>
  );
};

const restroList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "524981",
      name: "Roll It Up",
      uuid: "3602aceb-2f50-4539-a38e-1dbb3145de8f",
      city: "10",
      area: "Navrangpura",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "r5cpzotc55p9nq29gph8",
      cuisines: ["Chinese", "Thalis", "Fast Food", "Italian", "Beverages"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 3.799999952316284,
      slugs: {
        restaurant: "roll-it-up-navrangpura-navrangpura",
        city: "ahmedabad",
      },
      cityState: "10",
      address:
        "G/9, Centaur Complex, Vijay Cross Road, Navrangpura, Ahmedabad 380009",
      locality: "Vijay Cross Road",
      parentId: 8798,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "25% off",
        shortDescriptionList: [
          {
            meta: "25% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "25% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "25% OFF",
        shortDescriptionList: [
          {
            meta: "",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "25% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3300,
        message: "",
        title: "Delivery Charge",
        amount: "3300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6143461~p=1~eid=00000187-5687-ab83-0f98-846f001f014f",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "524981",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 3.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "81814",
      name: "Burger King",
      uuid: "10083576-d32d-4a0e-8a82-3236ef342a19",
      city: "10",
      area: "Ellisbridge",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "28fb13049b4e55297bb3f703cde63c35",
      cuisines: ["Burgers", "American", "Salads", "Beverages", "Chaat"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: "19 MINS",
      lastMileTravel: 1.7000000476837158,
      slugs: {
        restaurant: "burger-king-parimal-garden-naranpura",
        city: "ahmedabad",
      },
      cityState: "10",
      address:
        "SHOP # 5, GR FLR, THIRD EYE 2,PANCHAVATI CIRCLE, OPP PARIMAL GARDEN,AHMADABAD-382424",
      locality: "3rd Eye II,CG Road",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Get every item under 129",
        shortDescriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2600,
        message: "",
        title: "Delivery Charge",
        amount: "2600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "81814",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 1.7000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  }
];

const RestroContainer = () => {
  return (
    <div className="container restro_container">
      <div className="search_filter">
        <input placeholder="search Restaurant"></input>
        <button className="search_btn">Search</button>
      </div>
      <div className="restro_row">
        {restroList.map((restaurant) => (<RestroCard restroData={restaurant} />))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <RestroContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
