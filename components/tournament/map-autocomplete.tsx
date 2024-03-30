import React, { useRef } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import style from "@/styles/scss/app.module.scss";

interface AddressAutocompleteProps {
    onPlaceSelect: (location: { latitude: number; longitude: number }) => void;
    setAddress: (address: string) => void;
    businessAddress:string
}

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({ onPlaceSelect, setAddress,businessAddress }) => {
    const autocompleteRef = useRef<google.maps.places.Autocomplete>();

    const handlePlaceSelect = () => {
        const place = autocompleteRef.current?.getPlace();

        if (!place || !place.geometry || !place.geometry.location) return;

        const location = {
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng(),
        };
        onPlaceSelect(location);
        setAddress(place.formatted_address || '');
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAmqmsf3pVEVUoGAmwerePWzjUClvYUtwM"
            libraries={['places']}
        >
            <Autocomplete
                onLoad={(autocomplete) => {
                    if (autocomplete) autocompleteRef.current = autocomplete;
                }}
                onPlaceChanged={handlePlaceSelect}
                options={{
                    componentRestrictions: { country: 'ng' },
                }}
            >
                <input
                    autoComplete="off"
                    type="text"
                    name="location"
                    id=""
                    className={style.input}
                    placeholder="Enter Location"
                    defaultValue={businessAddress}
                />
            </Autocomplete>
        </LoadScript>
    );
};

export default AddressAutocomplete;
