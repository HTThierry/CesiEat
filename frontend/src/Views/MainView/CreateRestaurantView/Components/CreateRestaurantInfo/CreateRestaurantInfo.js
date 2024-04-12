import React, {forwardRef, useImperativeHandle, useState} from 'react';
import "./CreateRestaurantInfo.css";


const  CreateRestaurantInfo = forwardRef(({ data, onDataChange }, ref) => {
    const [restaurantInfo, setRestaurantInfo] = useState(data);
    const updateData = () => {

        onDataChange({ restaurantInfo });
    };

    useImperativeHandle(ref, () => ({
        updateData
    }));

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

    return (
        <div className="create-restaurant-info">
            <div className="restaurant-image-input">
                <label htmlFor="restaurant-pic-input" className="restaurant-image">
                    <img src={`data:${restaurantInfo.image.mime};base64,${restaurantInfo.image.base64}`}
                         alt={restaurantInfo.title} className="restaurant-image"/>
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
        </div>
    );
});

export default CreateRestaurantInfo;
