"use client"
import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './getCroppedImg';

function ImageCropper() {
    const [imageSrc, setImageSrc] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1); // Стандартное значение масштабирования
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleCrop = async () => {
        const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
        // Здесь можно отправить croppedImage на сервер или обработать его дальше
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {imageSrc && (
                <>
                    <div style={{ position: 'relative', width: '100%', height: 300 }}>
                        <Cropper
                            image={imageSrc}
                            crop={crop}
                            zoom={zoom}
                            aspect={5 / 3} // Фиксированное соотношение 5:3 (500x300)
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                        />
                    </div>
                    <button onClick={handleCrop}>Crop and Save</button>
                </>
            )}
        </div>
    );
}

export default ImageCropper;
