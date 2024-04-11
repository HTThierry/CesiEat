import React, {forwardRef, useImperativeHandle, useState} from 'react';
import "./CreateCardInfo.css";


const CardInfo = forwardRef(({ data, onDataChange }, ref) => {
    const [cardInfo, setCardInfo] = useState(data);
    const updateData = () => {
        onDataChange({ cardInfo });
    };

    useImperativeHandle(ref, () => ({
        updateData
    }));


    const handleCardInfoChange = (event) => {
        const { name, value, type } = event.target;

        if (type === 'file') {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                const read = reader.result;
                const [prefix, base64Data] = read.split("base64,");
                const mimeType = prefix.split(':')[1].split(';')[0];

                setCardInfo(prev => ({
                    ...prev,
                    image: {
                        mime: mimeType,
                        base64: base64Data
                    },
                }));
            };

            reader.onerror = () => {
                console.error("There was an error reading the file!");
            };

            reader.readAsDataURL(file);
        }
        else {
            setCardInfo(prev => ({ ...prev, [name]: value }));
        }
    }

    return (
        <div className="create-card-info">
            <div className="cards">
                <div className="restaurant-card">
                    <div className="promotion-div">
                        <input
                            type="text"
                            placeholder="promotions"
                            name="promotions"
                            className="restaurant-description"
                            value={cardInfo.promotions}
                            onChange={handleCardInfoChange}
                        />
                    </div>
                    <label htmlFor="card-pic-input" className="restaurant-image">
                        <img src={`data:${cardInfo.image.mime};base64,${cardInfo.image.base64}`}
                             alt={cardInfo.title} className="restaurant-image"/>
                    </label>
                    <input
                        id="card-pic-input"
                        type="file"
                        name="photo"
                        className="restaurant-image"
                        onChange={handleCardInfoChange}
                        style={{display: 'none'}}
                    />

                    <div className="restaurant-info">
                        <div className="restaurant-name-and-rating">
                            <input
                                type="text"
                                placeholder="Title"
                                name="title"
                                className="restaurant-name"
                                value={cardInfo.title}
                                onChange={handleCardInfoChange}
                            />
                            <div className="restaurant-rating">{5}</div>
                        </div>
                        <div className="restaurant-meta">
                            <input
                                type="text"
                                placeholder="deliveryFee"
                                name="deliveryFee"
                                className="restaurant-delivery-fee"
                                value={cardInfo.deliveryFee}
                                onChange={handleCardInfoChange}
                            />
                            <input
                                type="text"
                                placeholder="deliveryTime"
                                name="deliveryTime"
                                className="restaurant-delivery-time"
                                value={cardInfo.deliveryTime}
                                onChange={handleCardInfoChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="restaurant-card">
                    <div className="promotion-div">
                        {cardInfo.promotions && <div className="promotion-banner">{cardInfo.promotions}</div>}
                    </div>
                    <img src={`data:${cardInfo.image.mime};base64,${cardInfo.image.base64}`} alt={cardInfo.name}
                         className="restaurant-image"/>
                    <div className="restaurant-info">
                        <div className="restaurant-name-and-rating">
                            <h3 className="restaurant-name">{cardInfo.title}</h3>
                            <div className="restaurant-rating">{5}</div>
                        </div>
                        <div className="restaurant-meta">
                            <span className="restaurant-delivery-fee">Frais de livraison : {cardInfo.deliveryFee} $</span>
                            <span className="restaurant-delivery-time">{cardInfo.deliveryTime} min</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CardInfo;
