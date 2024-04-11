import React, {useState} from 'react';
import "./CreateRestaurantVIew.css";
import {RxCross2} from "react-icons/rx";
import axios from 'axios';

const defaultImage = {
    mime: 'image/png',
    base64: 'iVBORw0KGgoAAAANSUhEUgAAAjcAAACNCAYAAABL5luUAAAEvUlEQVR4Xu3dzU3jUBSGYQogeyggBaSAFABlUEAKgD0pIAWkgFBACqCvjG6k2VzLI8MQYX/nWTwbdLDv3b1y/HP3+fl5AQBIcdf/AQBgycQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQNABBF3AAAUcQN8G3n8/lyPB4vh8NhVtq6+rUCdYgb4Ms+Pj4um83mcnd3N1vPz8/XdfZrB/KJG+BLWjCsVqtBTMzR4+Pj9cpSvwcgm7gBJms/97Rg6CNiztp6/UwFtYgbYLK3t7dBPCzBbrcb7AXIJW6AyeZ+n82Y7XY72AuQS9wAk63X60E4NE9PT7PRr61pP031ewFyiRtgsrH7bfq539SvTdxAPeIGmEzcAEsgboDJxA2wBOIGmEzcAEsgboDJxA2wBOIGCtvv94OnjZr2faZ+tvnpuGnn6c/9r/NP0a9N3EA94gYKe3l5GYRA017W1882Px03Yy8FHDv/FP2xGnEDtYgbKEzcAInEDRQmboBE4gYKEzdAInEDhYkbIJG4gcLEDZBI3EBh4gZIJG6gMHEDJBI3UNgt4+Z0Ol3n/2W1Wg2O1bS/97O9dvz+nE1/rKbN93NALnEDhd06bvq5nyRugDHiBgoTN0AicQOFiRsgkbiBwsQNkEjcQGHiBkgkbqCwW8bNFB4FB25B3EBh4gZIJG6gMHEDJBI3UJi4ARKJGyhM3ACJxA0UJm6AROIGChM3QCJxA4WJGyCRuIHCfjtu9vv9ZbPZDBwOh8HsVP3axA3UI26gsN+Om1vo1yZuoB5xA4WJGyCRuIHCxA2QSNxAYeIGSCRuoDBxAyQSN1DYT8VNO85c9Gtr1uv1YC9ALnEDhY3FwFjcbLfbwewStMfL+70AucQNFPbVuBmbn7u27n4vQC5xA4WNxcpY3JzP58v9/f1gfs4eHh4up9NpsBcgl7iBwr4aN017e3A/P2fv7++DPQDZxA0U9p24adqVkHZFpP+/OWn32RyPx8HagXziBgr7btz81eKhfR+qzc+JqIHaxA0U9r9xAzBH4gYKEzdAInEDhYkbIJG4gcLEDZBI3EBh4gZIJG6gsLG4ad9iao9Sz5kX8wFjxA0U1q7Q9GGzFOIGGCNuoLAlfk7hL3EDjBE3UNxutxuEwxKIG2CMuAFG772ZM3EDjBE3wNXr6+v1Rt0+IuZK3ABjxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABRxA0AEEXcAABR/gDAR6YcjBrsWgAAAABJRU5ErkJggg=='
}

function CreateRestaurantView() {
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

    const handleInfoChange = (event) => {
        const { name, value, type } = event.target;

        if (type === 'file') {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                const read = reader.result;
                const [prefix, base64Data] = read.split("base64,");
                const mimeType = prefix.split(':')[1].split(';')[0];

                setRestaurantInfo(prev => ({
                    ...prev,
                    image: {
                        mime: mimeType,
                        base64: base64Data
                    },
                    description: prev.description,
                    title: prev.title
                }));
            };

            reader.onerror = () => {
                console.error("There was an error reading the file!");
            };

            reader.readAsDataURL(file);
        }
        else {
            setRestaurantInfo(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleCategoryChange = (event, index) => {
        const newCategories = [...categories];
        const value = event.target.value;

        // Update the category name
        newCategories[index].name = value;
        setCategories(newCategories);

        if (value && index === categories.length - 1) {
            addCategory();
        }
        if (isCategoryEmpty(categories[index])) {
            if (index !== categories.length - 1)
            {
                removeCategory(index);
            }
            if (!isCategoryEmpty(categories[categories.length - 1]))
            {
                addCategory();
            }
        }
    };

    const handleItemChange = (event, catIndex, itemIndex, field) => {
        const { files, type, value } = event.target;
        const newCategories = [...categories];

        if (field === 'file') {
            const file = files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                const read = reader.result;
                const [prefix, base64Data] = read.split("base64,");

                setCategories(prevCategories => {
                    return prevCategories.map((category, index) => {
                        if (index === catIndex) {
                            return {
                                ...category,
                                items: category.items.map((item, itIndex) => {
                                    if (itIndex === itemIndex) {
                                        return {
                                            ...item,
                                            image: {
                                                mime: prefix.split(':')[1].split(';')[0],
                                                base64: base64Data
                                            }
                                        };
                                    }
                                    return item;
                                })
                            };
                        }
                        return category;
                    });
                });
            };

            reader.onerror = () => {
                console.error("There was an error reading the file!");
            };

            reader.readAsDataURL(file);
        } else {
            newCategories[catIndex].items[itemIndex][field] = value;
        }

        setCategories(newCategories);


        if (event.target.value && itemIndex === newCategories[catIndex].items.length - 1) {
            addItem(catIndex);
        }

        const item = newCategories[catIndex].items[itemIndex];

        if (isItemEmpty(item)) {
            if (newCategories[catIndex].items.length > 1) {
                removeItem(catIndex, itemIndex);
            }
        }

        if (isCategoryEmpty(categories[catIndex])) {
            if (catIndex !== categories.length - 1)
            {
                removeCategory(catIndex);
            }
            if (!isCategoryEmpty(categories[categories.length - 1]))
            {
                addCategory();
            }
        }
    };

    const isCategoryEmpty = (category) => {
        return !category.name && (!category.items || category.items.every(item => isItemEmpty(item)));
    };

    const isItemEmpty = (item) => {
        return !item.name && !item.price && !item.description && item.image.mime === defaultImage.mime && item.image.base64 === defaultImage.base64;
    };

    const addItem = (catIndex) => {
        const newCategories = [...categories];
        newCategories[catIndex].items.push({ name: '', price: '', description: '', image:  { mime: defaultImage.mime, base64: defaultImage.base64 } });
        setCategories(newCategories);
    };

    const removeItem = (catIndex, itemIndex) => {
        if (categories[catIndex].items.length > 1) {
            const newCategories = [...categories];
            newCategories[catIndex].items.splice(itemIndex, 1);
            setCategories(newCategories);
        }
    };

    const addCategory = () => {
        setCategories([...categories, { name: '', items: [{ name: '', price: '', description: '', image:  { mime: defaultImage.mime, base64: defaultImage.base64 } }] }]);
    };

    const removeCategory = (index) => {
        const newCategories = categories.filter((_, catIndex) => catIndex !== index);
        setCategories(newCategories);
    };

    const onDeleteItem = (catIndex, itemIndex) => {
        if(categories[catIndex].length === 1 || itemIndex === categories[catIndex].items.length - 1){
            const newCategories = [...categories];
            newCategories[catIndex].items.push({ name: '', price: '', description: '', image:  { mime: defaultImage.mime, base64: defaultImage.base64 } });
            setCategories(newCategories);
        }
        if (categories[catIndex].items.length > 1) {
            const newCategories = [...categories];
            newCategories[catIndex].items.splice(itemIndex, 1);
            setCategories(newCategories);
        }

        if (isItemEmpty(categories[catIndex].items[itemIndex])) {
            if (categories[catIndex].items.length > 1) {
                removeItem(catIndex, itemIndex);
            }
        }

        if (isCategoryEmpty(categories[catIndex])) {
            if (catIndex !== categories.length - 1)
            {
                removeCategory(catIndex);
            }
            if (!isCategoryEmpty(categories[categories.length - 1]))
            {
                addCategory();
            }
        }
    };


    const requestPostRestaurant = async (value) => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/restaurants', value);
            console.log('Data sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };


    const onSave = () => {
        const newCategories =  categories.filter(category => {
            const hasNonEmptyItems = category.items.some(item =>
                item.name !== '' && item.price !== ''
            );
            return category.name !== '' || hasNonEmptyItems;
        }).map(category => {
            return {
                ...category,
                items: category.items.filter(item =>
                    item.name !== '' && item.price !== ''
                )
            };
        });

        const sendRestaurantData = {
            displayType: "grid",
            name: restaurantInfo.title,
            description: restaurantInfo.description,
            restaurantImage: {
                mime: restaurantInfo.image.mime,
                base64: restaurantInfo.image.base64
            },
            cardImage: {
                mime: "",
                base64: ""
            },
            deliveryFee: "1.99€",
            distance: 1.5,
            deliveryTime: "20 min",
            rating: 4.2,
            promotions: "20% de réduction sur votre première commande",
            product: newCategories
        };
        // console.log('===>', sendRestaurantData);
        // console.log('===>', sendRestaurantData);
        requestPostRestaurant(sendRestaurantData);
    }

    return (
        <div className="create-restaurant-view CesiEatsMedium">
            <div className="restaurant-profile">

                <div className="restaurant-image-input">
                    <label htmlFor="restaurant-pic-input" className="restaurant-image">
                        <img src={`data:${restaurantInfo.image.mime};base64,${restaurantInfo.image.base64}`} alt={restaurantInfo.title} className="restaurant-image"/>
                    </label>
                    <input
                        id="restaurant-pic-input"
                        type="file"
                        name="photo"
                        className="restaurant-image"
                        onChange={handleInfoChange}
                        style={{display: 'none'}}
                    />
                </div>

                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    className="restaurant-name"
                    value={restaurantInfo.title}
                    onChange={handleInfoChange}
                />
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    className="restaurant-description"
                    value={restaurantInfo.description}
                    onChange={handleInfoChange}
                />

                <hr className="separator"/>

                <div className="menu">
                    {categories.map((category, catIndex) => (
                        <div key={catIndex} className="menu-category">
                            <textarea
                                placeholder="Category Name"
                                value={category.name}
                                className="category-header"
                                onChange={(e) => handleCategoryChange(e, catIndex)}
                            />
                            <div className="items">
                                {category.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="menu-item">
                                        <div className="item-info">
                                            <input
                                                type="text"
                                                placeholder="Item Name"
                                                className="item-name"
                                                value={item.name}
                                                onChange={(e) => handleItemChange(e, catIndex, itemIndex, 'name')}
                                            />
                                            <input
                                                type="text"
                                                placeholder="Price"
                                                className="item-price"
                                                value={item.price}
                                                onChange={(e) => handleItemChange(e, catIndex, itemIndex, 'price')}
                                            />
                                            <textarea
                                                placeholder="Description"
                                                className="item-description"
                                                value={item.description}
                                                onChange={(e) => handleItemChange(e, catIndex, itemIndex, 'description')}
                                            />
                                        </div>
                                        <div className="item-pic-input">
                                            <label htmlFor={`item-pic-input-${catIndex}-${itemIndex}`} className="item-image">
                                                <img src={`data:${item.image.mime};base64,${item.image.base64}`} alt="item-pic" className="item-image"/>
                                            </label>
                                            <input
                                                id={`item-pic-input-${catIndex}-${itemIndex}`}
                                                type="file"
                                                onChange={(e) => handleItemChange(e, catIndex, itemIndex, 'file')}
                                                className="item-image"
                                                style={{display: 'none'}}
                                            />
                                            <button className="delete-button"
                                                    onClick={() => onDeleteItem(catIndex, itemIndex)}><RxCross2/>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button className="save-button" onClick={onSave}>Sauvegarder
                    </button>
                </div>cc
            </div>
            <div className="backgroundRight"></div>

        </div>
    );
}

export default CreateRestaurantView;