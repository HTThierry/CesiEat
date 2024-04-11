import React, {useRef, useState} from 'react';
import "./CreateRestaurantVIew.css";
import CreateRestaurantInfo from "./Components/CreateRestaurantInfo/CreateRestaurantInfo";
import CreateMenuInfo from "./Components/CreateMenuInfo/CreateMenuInfo";
import CreateCardInfo from "./Components/CreateCardInfo/CreateCardInfo";

const defaultImage = {
    mime: 'image/png',
    base64: 'iVBORw0KGgoAAAANSUhEUgAAAjcAAACNCAYAAABL5luUAAAEvUlEQVR4Xu3dzU3jUBSGYQogeyggBaSAFABlUEAKgD0pIAWkgFBACqCvjG6k2VzLI8MQYX/nWTwbdLDv3b1y/HP3+fl5AQBIcdf/AQBgycQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQN8G3n8/lyPB4vh8NhVtq6+rUCdYgb4Ms+Pj4um83mcnd3N1vPz8/XdfZrB/KJG+BLWjCsVqtBTMzR4+Pj9cpSvwcgm7gBJms/97Rg6CNiztp6/UwFtYgbYLK3t7dBPCzBbrcb7AXIJW6AyeZ+n82Y7XY72AuQS9wAk63X60E4NE9PT7PRr61pP031ewFyiRtgsrH7bfq539SvTdxAPeIGmEzcAEsgboDJxA2wBOIGmEzcAEsgboDJxA2wBOIGCtvv94OnjZr2faZ+tvnpuGnn6c/9r/NP0a9N3EA94gYKe3l5GYRA017W1882Px03Yy8FHDv/FP2xGnEDtYgbKEzcAInEDRQmboBE4gYKEzdAInEDhYkbIJG4gcLEDZBI3EBh4gZIJG6gMHEDJBI3UNgt4+Z0Ol3n/2W1Wg2O1bS/97O9dvz+nE1/rKbN93NALnEDhd06bvq5nyRugDHiBgoTN0AicQOFiRsgkbiBwsQNkEjcQGHiBkgkbqCwW8bNFB4FB25B3EBh4gZIJG6gMHEDJBI3UJi4ARKJGyhM3ACJxA0UJm6AROIGChM3QCJxA4WJGyCRuIHCfjtu9vv9ZbPZDBwOh8HsVP3axA3UI26gsN+Om1vo1yZuoB5xA4WJGyCRuIHCxA2QSNxAYeIGSCRuoDBxAyQSN1DYT8VNO85c9Gtr1uv1YC9ALnEDhY3FwFjcbLfbwewStMfL+70AucQNFPbVuBmbn7u27n4vQC5xA4WNxcpY3JzP58v9/f1gfs4eHh4up9NpsBcgl7iBwr4aN017e3A/P2fv7++DPQDZxA0U9p24adqVkHZFpP+/OWn32RyPx8HagXziBgr7btz81eKhfR+qzc+JqIHaxA0U9r9xAzBH4gYKEzdAInEDhYkbIJG4gcLEDZBI3EBh4gZIJG6gsLG4ad9iao9Sz5kX8wFjxA0U1q7Q9GGzFOIGGCNuoLAlfk7hL3EDjBE3UNxutxuEwxKIG2CMuAFG772ZM3EDjBE3wNXr6+v1Rt0+IuZK3ABjxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABR/gDAR6YcjBrsWgAAAABJRU5ErkJggg=='
}

function CreateRestaurantView() {
    const childRef1 = useRef();
    const childRef2 = useRef();
    const childRef3 = useRef();

    const [info, setInfo] = useState({
        displayType: "",
        name: "",
        cardImage: {
            mime: "",
            image: "",
        },
        restaurantImage: {
            mime: "",
            image: "",
        },
        desc: "",
        priceRange: "",
        deliveryFee: "",
        distance: 0,
        deliveryTime: "",
        rating: 0,
        promotions: "",
        product: [
            { name: '',
                items: [{
                name: '',
                    price: '',
                    description: '',
                    image : {
                        mime: '',
                        base64: ''
                    }
                }]
            }
        ],
    });

    const [restaurantInfo, setRestaurantInfo] = useState({
        title: '',
        description: '',
        image : {
            mime: defaultImage.mime,
            base64: defaultImage.base64
        }
    });

    const [categories, setCategories] = useState([
        { name: '', items: [{ name: '', price: '', description: '', image : { mime: defaultImage.mime, base64: defaultImage.base64 } }] }
    ]);

    const [cardInfo, setCardInfo] = useState({
        title: '',
        deliveryTime: '',
        deliveryFee: '',
        promotions: '',
        image: { mime: defaultImage.mime, base64: defaultImage.base64 }
    });

    const handleRestaurantInfoChange = (newData) => {
        const { restaurantInfo } = newData;

        if ( !restaurantInfo) {
            console.log("Invalid restaurantInfo", restaurantInfo)
            return;
        }

        info.name = restaurantInfo.title
        info.desc = restaurantInfo.description
        info.restaurantImage = restaurantInfo.image

    };

    const handleMenuInfoChange = (newData) => {

        console.log("newData", newData)
        const { newCategories } = newData;
        console.log("newCategories", newCategories)

        if ( !newCategories) {
            console.log("newCategories", newCategories)
            return;
        }

        info.product = newCategories;
    };

    const handleCardInfoChange = (newData) => {
        const { cardInfo } = newData;

        if ( !cardInfo) {
            console.error("Invalid cardInfo:", cardInfo);
            return;
        }

        info.deliveryTime = cardInfo.deliveryTime;
        info.deliveryFee = cardInfo.deliveryFee;
        info.promotions = cardInfo.promotions;
        info.cardImage = cardInfo.image;
    };

    const onSave = () => {
        childRef1.current.updateData();
        childRef2.current.updateData();
        childRef3.current.updateData();

        console.log(info)
    };

    return (
        <div className="create-restaurant-view CesiEatsMedium">
            <div className="restaurant-profile">
                <h1>Page du restaurant</h1>
                <CreateRestaurantInfo ref={childRef1} onDataChange={handleRestaurantInfoChange} data={restaurantInfo}/>

                <hr className="separator"/>

                <CreateMenuInfo ref={childRef2} onDataChange={handleMenuInfoChange} data={categories}
                                defaultImage={defaultImage}/>
                <h1>Carte du restaurant</h1>
                <CreateCardInfo ref={childRef3} onDataChange={handleCardInfoChange} data={cardInfo}/>
                <button className="save-button" onClick={() => onSave()}>Sauvegarder</button>

                <div className="backgroundRight"></div>
            </div>
        </div>
    );
}

export default CreateRestaurantView;
