import React, { useState } from 'react';
import "./CreateRestaurantVIew.css";
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import BlackHeader from "../../Components/Headers/BlackHeader";
import Footer from "../../Components/Footer/Footer";
import defaultPic from "./Default.png";

function CreateRestaurantView() {
    const [restaurantInfo, setRestaurantInfo] = useState({
        photo: defaultPic,
        title: '',
        description: ''
    });
    const [categories, setCategories] = useState([
        { name: '', items: [{ name: '', price: '', description: '', pic: defaultPic }] }
    ]);

    const handleInfoChange = (event) => {
        const { name, value, type } = event.target;

        if (type === 'file') {
            const file = event.target.files[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                setRestaurantInfo(prev => ({ ...prev, [name]: imageUrl }));
            }
        } else {
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

    const isCategoryEmpty = (category) => {
        return !category.name && (!category.items || category.items.every(item => isItemEmpty(item)));
    };

    const isItemEmpty = (item) => {
        return !item.name && !item.price && !item.description && item.pic === defaultPic;
    };


    const handleItemChange = (event, catIndex, itemIndex, field) => {
        const newCategories = [...categories];
        newCategories[catIndex].items[itemIndex][field] = event.target.value;
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

    const addItem = (catIndex) => {
        const newCategories = [...categories];
        newCategories[catIndex].items.push({ name: '', price: '', description: '', pic: defaultPic });
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
        setCategories([...categories, { name: '', items: [{ name: '', price: '', description: '', pic: defaultPic }] }]);
    };

    const removeCategory = (index) => {
        const newCategories = categories.filter((_, catIndex) => catIndex !== index);
        setCategories(newCategories);
    };


    return (
        <div className="create-restaurant-view CesiEatsMedium">
            <BlackHeader
                leftIcons={
                    <div className="left-icons">
                        <Navbar/>
                    </div>
                }
                rightIcons={
                    <div className="right-icons">
                        <Link to="/cart">
                            <MdOutlineShoppingCart color="#fff" size="40px"/>
                        </Link>
                        <Link to="/profile/information">
                            <CgProfile color="#fff" size="40px"/>
                        </Link>
                    </div>
                }
            />

            <div className="restaurant-profile">

                <div className="restaurant-image-input">
                    <label htmlFor="restaurant-pic-input" className="restaurant-image">
                        <img src={restaurantInfo.photo} alt={restaurantInfo.title} className="restaurant-image"/>
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
                                            <label htmlFor="item-pic-input" className="item-image">
                                                <img src={item.pic} alt="item-pic" className="item-image"/>
                                            </label>
                                            <input
                                                id="item-pic-input"
                                                type="file"
                                                onChange={(e) => handleItemChange(e, catIndex, itemIndex, 'pic')}
                                                className="item-image"
                                                style={{display: 'none'}}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="backgroundRight"></div>

            <Footer/>
        </div>
    );
}

export default CreateRestaurantView;
