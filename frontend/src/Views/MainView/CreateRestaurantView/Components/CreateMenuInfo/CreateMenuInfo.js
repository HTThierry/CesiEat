import React, {forwardRef, useImperativeHandle, useState} from 'react';
import "./CreateMenuInfo.css";
import {RxCross2} from "react-icons/rx";

const CreateMenuInfo = forwardRef(({ data, defaultImage, onDataChange }, ref) => {
    const [categories, setCategories] = useState(data);
    const updateData = () => {
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

        onDataChange({ newCategories });
    };


    useImperativeHandle(ref, () => ({
        updateData
    }));


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
        const { files, value } = event.target;
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



    return (
        <div className="create-menu-info">
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
                                        type="double"
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
                                    <label htmlFor={`item-pic-input-${catIndex}-${itemIndex}`}
                                           className="item-image">
                                        <img src={`data:${item.image.mime};base64,${item.image.base64}`}
                                             alt="item-pic" className="item-image"/>
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
        </div>
    );
});

export default CreateMenuInfo;
