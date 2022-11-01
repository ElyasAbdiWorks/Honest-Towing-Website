import { useState } from 'react';
import { useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

// components
import CalculatePrice from './CalculatePrice';

const libraries = ["places"]
const apiKey = process.env.GOOGLE_MAPS_API_KEY
// const apiKeyToString = apiKey.toString();

export default function Calculator() {
    const { isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries,
    })

    const [service, setService] = useState("");
    const [askService, setAskService] = useState(true);

    const [vehicleType, setVehicleType] = useState('');
    const [askVehicleType, setAskVehicleType] =  useState(false);

    const [fuel, setFuel] = useState('');
    const [askFuel, setAskFuel] = useState(false);

    const [askCurrentLocation, setAskCurrentLocation] = useState(false);
    const [askDestination, setAskDestination] = useState(false);

    const [currentAddress, setCurrentAddress] = useState('');
    const [destinationAddress, setDestinationAddress] = useState('');
    const [currentCoords, setCurrentCoords] = useState({
        lat: null,
        lng: null
    });
    const [destinationCoords, setDestinationCoords] = useState({
        lat: null,
        lng: null
    });

    const officeAddress = '3521 88th Ave NE, Circle Pines, MN 55014';

    const [clientName, setClientName] = useState('');
    const [askClientName, setAskClientName] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [askPhoneNumber, setAskPhoneNumber] = useState(false);

    const [clientEmail, setClientEmail] = useState('');
    const [askClientEmail, setAskClientEmail] = useState(false);

    const handleCurrentLocationSelect = async value => {
        setCurrentAddress(value);
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setCurrentCoords(latLng);
    }
    const handleDestinationLocationSelect = async value => {
        setDestinationAddress(value);
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setDestinationCoords(latLng);
    }

    const [calculate, setCalculate] = useState(false);

    const onAskServiceSubmit = (e) => {
        e.preventDefault();
        setAskService(false);
        if (service === "Towing") {
            setAskCurrentLocation(true);
        } 
        else if (service === "FuelDelivary") {
            setAskCurrentLocation(true);
        }
        else if (service === 'Tirechange') {
            setAskCurrentLocation(true);
        }
        else if (service === 'Jumpstart') {
            setAskCurrentLocation(true);
        }
        else if (service === 'Lockout') {
            setAskCurrentLocation(true);
        }
    }

    const onCurrentLocationSubmit = (e) => {
        e.preventDefault();
        if (currentAddress == '') {
            alert("oops.. You forgot to enter an address!");
        } else {
            setAskCurrentLocation(false);
            if (service === "Towing") {
                setAskDestination(true);
            } else if (service === "FuelDelivary") {
                handleDestinationLocationSelect(officeAddress);
                setAskFuel(true);
            } else {
                handleDestinationLocationSelect(officeAddress);
                setAskVehicleType(true);
            }
        }
    }

    const onDestinationSubmit = (e) => {
        e.preventDefault();
        setAskDestination(false);
        if (service === "Towing") {
            setAskVehicleType(true);
        }
    }

    const onAskFuelSubmit = (e) => {
        e.preventDefault();
        setAskFuel(false);
        setAskClientName(true);
    }

    const onVehicleTypeSubmit = (e) => {
        e.preventDefault();
        setAskVehicleType(false);
        setAskClientName(true);
    }

    const onClientNameSubmit = (e) => {
        e.preventDefault();
        setAskClientName(false);
        if (clientName === 'Admin' || clientName === 'admin' || clientName === 'ADMIN') setCalculate(true)
        else setAskPhoneNumber(true);
    }

    const onPhoneNumberSubmit = (e) => {
        e.preventDefault();
        setAskPhoneNumber(false);
        setAskClientEmail(true);
    }

    const onClientEmailSubmit = (e) => {
        e.preventDefault();
        setAskClientEmail(false);
        setCalculate(true);
    }

    // back button
    const goBack = () => {
        if (askCurrentLocation == true) {
            setAskCurrentLocation(false);
            setAskService(true);
        } else if (askFuel === true) {
            setAskFuel(false);
            setAskCurrentLocation(true);
        } else if (askDestination == true) {
            setAskDestination(false);
            setAskCurrentLocation(true);
        } else if (askVehicleType == true) {
            setAskVehicleType(false);
            if (service == "Towing") {
                setAskDestination(true);
            } else {
                setAskCurrentLocation(true);
            }
        } else if (askClientName == true) {
            setAskClientName(false)
            setAskVehicleType(true);
        } else if (askPhoneNumber == true) {
            setAskPhoneNumber(false)
            setAskClientName(true);
        } else if (askClientEmail == true) {
            setAskClientEmail(false)
            setAskPhoneNumber(true);
        } else if (calculate == true) {
            setCalculate(false);
            setAskClientEmail(true);
        }
    }

    return (
        <div className="quote-calculator-container">
            {askService == true &&             
                <div className="get-service-container flex flex-col flex-ai-c">
                    <form onSubmit={onAskServiceSubmit} className="flex flex-col">
                        <h4>How can we help you?</h4>
                        <select 
                            value={service}
                            onChange={(e) => {
                                setService(e.target.value);
                            }}
                            required
                        >
                            <option value="" disabled defaultValue>choose a service</option>
                            <option value="Towing">Vehicle Towing</option>
                            <option value="Tirechange">Tire Change</option>
                            <option value="Jumpstart">Jump Start</option>
                            <option value="FuelDelivary">Fuel Delivary</option>
                            <option value="Lockout">Lock Out</option>
                        </select>
                        <button className="calc_btn">next</button>
                    </form>
                </div>
            }
            {askCurrentLocation == true && (
                <div className="current-location-container">
                    <h4>Where is the vehicle?</h4>
                    <form onSubmit={onCurrentLocationSubmit}>
                        <PlacesAutoComplete 
                            value={currentAddress}
                            onChange={setCurrentAddress}
                            onSelect={handleCurrentLocationSelect}
                        >
                            {
                                ({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                    <div>
                                        <input {...getInputProps({
                                            placeholder: "enter location"
                                        })}/>
                                        <div className="suggestions">
                                            {suggestions.map(suggestion => {
                                                const style = {
                                                    padding: "13px",
                                                    cursor: "pointer",
                                                    backgroundColor: suggestion.active ? "#d3d7e4" : "#EDEDED"
                                                }
                                                return (
                                                    <div {...getSuggestionItemProps(suggestion, {style})}>
                                                        {suggestion.description}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )
                            }
                        </PlacesAutoComplete>
                        <button onClick={goBack} className="back_btn">back</button>
                        <button type="submit" className="calc_btn">next</button>
                    </form>

                </div>
            )}
            {askDestination ==  true && (
                <div className="ask-destination-container">
                    <h4>Where do you want your vehicle towed to?</h4>
                    <PlacesAutoComplete 
                        value={destinationAddress}
                        onChange={setDestinationAddress}
                        onSelect={handleDestinationLocationSelect}
                    >
                        {
                            ({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                <div>
                                    <input {...getInputProps({
                                        placeholder: "enter drop off location"
                                    })}/>
                                    <div className="suggestions">
                                        {suggestions.map(suggestion => {
                                            const style = {
                                                padding: "13px",
                                                cursor: "pointer",
                                                backgroundColor: suggestion.active ? "#d3d7e4" : "#EDEDED"
                                            }
                                            return (
                                                <div {...getSuggestionItemProps(suggestion, {style})}>
                                                    {suggestion.description}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )
                        }
                    </PlacesAutoComplete>
                    <button onClick={goBack} className="back_btn">back</button>
                    <button onClick={onDestinationSubmit} className="calc_btn">next</button>
                    
                </div>
            )}
            {askFuel === true && 
                <div>
                    <form onSubmit={onAskFuelSubmit}>
                        <h4>What kind of fuel do you need?</h4>
                        <select
                            value={fuel}
                            onChange={(e) => setFuel(e.target.value)}
                            required
                        >
                            <option value="" disabled defaultValue>choose a fuel type</option>
                            <option value="2gal87">2 gallons of regular (87 octane)</option>
                            <option value="10gal87">10 gallons of regular (87 octane)</option>
                            <option value="2galDiesel">2 gallons of diesel</option>
                            <option value="10galDiesel">10 gallons of diesel</option>
                        </select>
                        <div className="flex flex-reverse">
                            <button className="calc_btn">next</button>
                            <button onClick={goBack} className="back_btn">back</button>
                        </div>
                    </form>
                </div>
            }
            {askVehicleType == true && (
                <div className="get-service-container flex flex-col flex-ai-c">
                    <form onSubmit={onVehicleTypeSubmit} className="flex flex-col">
                        <h4>What kind of vehicle do you have?</h4>
                        <select 
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                            required
                        >
                            <option value="" disabled defaultValue>choose a vehicle type</option>
                            <option value="sedan">Sedan</option>
                            <option value="coupe">Coupe</option>
                            <option value="suv">SUV</option>
                            <option value="motorcycle">Motorcycle</option>
                            <option value="midsize">Mid-Size Truck</option>
                            <option value="fullsize">Full Size Truck</option>
                            <option value="heavyduty">Heavy Duty Truck</option>
                        </select>
                        <div className="flex flex-reverse">
                            <button className="calc_btn">next</button>
                            <button onClick={goBack} className="back_btn">back</button>
                        </div>
                    </form>
                </div>
            )}
            {askClientName == true && 
                <div className="get-cleint-info">
                    <form onSubmit={onClientNameSubmit} className="get-name flex flex-col">
                        <h4>What is your name?</h4>
                        <input 
                            placeholder="enter your full name"
                            type="text"
                            required
                            onChange={(e) => setClientName(e.target.value)}
                            value={clientName}
                        />
                        <div className="flex flex-reverse">
                            <button className="calc_btn">next</button>
                            <button onClick={goBack} className="back_btn">back</button>
                        </div>
                    </form>
                </div>
            }
            {askPhoneNumber == true && 
                <div className="get-cleint-info">
                    <form onSubmit={onPhoneNumberSubmit} className="get-name flex flex-col">
                        <h4>{clientName}, what is your phone number?</h4>
                        <p>Please enter your 10 digit phone number with no spaces or dashes</p>
                        <input 
                            placeholder="enter your phone number"
                            type="tel"
                            pattern="[0-9]{10}"
                            required
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                        />
                        <div className="flex flex-reverse">
                            <button className="calc_btn">next</button>
                            <button onClick={goBack} className="back_btn">back</button>
                        </div>
                    </form>
                </div>
            }
            {askClientEmail == true && 
                <div className="get-cleint-info">
                    <form onSubmit={onClientEmailSubmit} className="get-name flex flex-col">
                        <h4>{clientName}, what is your email?</h4>
                        <input 
                            placeholder="enter your email"
                            type="email"
                            required
                            onChange={(e) => setClientEmail(e.target.value)}
                            value={clientEmail}
                        />
                        <div className="flex flex-reverse">
                            <button className="calc_btn">next</button>
                            <button onClick={goBack} className="back_btn">back</button>
                        </div>
                    </form>
                </div>
            }
            {/* --- CALCULATE --- */}
            {calculate == true && (
                <div className='calculated-price'>
                    <CalculatePrice 
                        service={service}
                        vehicleType={vehicleType}
                        currentAddress={currentAddress}
                        currentCoords={currentCoords}
                        destinationAddress={destinationAddress}
                        destinationCoords={destinationCoords}
                        clientName={clientName}
                        phoneNumber={phoneNumber}
                        clientEmail={clientEmail}
                        fuelType={fuel}
                    />
                    <button onClick={goBack} className="back_btn margin-top-1vh">back</button>
                </div>
            )}
        </div>
    )
}