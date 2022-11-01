import { useState, useCallback } from 'react';
import { DistanceMatrixService } from '@react-google-maps/api';
import DisplayResult from './DisplayResult';

export default function CalculatePrice(props) {
    
    // trip details
    const service = props.service;
    const vehicleType = props.vehicleType;
    const currentCoords = props.currentCoords;
    const destinationCoords = props.destinationCoords;
    const currentAddress = props.currentAddress;
    const destinationAddress = props.destinationAddress;
    const clientName = props.clientName;
    const phoneNumber = props.phoneNumber;
    const clientEmail = props.clientEmail;
    const fuelType = props.fuelType;

    let callBackResponse = null;

    let distance = 0;
    let distanceKM = '';
    let duration = '';

    const [distanceState, setDistanceState] = useState('');
    const [distanceValueState, setDistanceValueState] = useState(0);
    const [durationState, setDurationState] = useState('');

    const directionsCallback = useCallback((response, status) => {
        console.log(status)
        if (response !== null) {
          if (status == 'OK') {
            callBackResponse = response;
            let results = response.rows[0].elements;
            let element = results[0];
            let distanceValue = element.distance.value;
            let distanceKMT = element.distance.text;
            let durationValue = element.duration.text;
            distance = distanceValue;
            distanceKM = distanceKMT;
            duration = durationValue;
            setDistanceState(distanceKM);
            setDistanceValueState(distance);
            setDurationState(duration);
          } else {
            console.log('response: ', response)
          }
        }
      }, [callBackResponse])

    return (
        <div className="total-price-container">
                <div className="total-price-container">
                    <DistanceMatrixService 
                        options={{
                            origins: [currentCoords, currentAddress],
                            destinations: [destinationCoords, destinationAddress],
                            travelMode: "DRIVING"
                        }}
                        callback={directionsCallback}
                    />
                    <DisplayResult 
                      service={service}
                      vehicleType={vehicleType}
                      currentAddress={currentAddress}
                      currentCoords={currentCoords}
                      destinationAddress={destinationAddress}
                      destinationCoords={destinationCoords}
                      distance={distanceValueState}
                      distanceInKM={distanceState}
                      duration={durationState}
                      clientName={clientName}
                      phoneNumber={phoneNumber}
                      clientEmail={clientEmail}
                      fuelType={fuelType}
                    />
                </div>
        </div>
    )
}
