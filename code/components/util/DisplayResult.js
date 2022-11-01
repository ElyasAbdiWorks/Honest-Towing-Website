import { useState } from "react";
import emailjs from "emailjs-com";

const apiKey = process.env.EMAILJS_API_KEY;
export default function DisplayResult(props) {
    // props
    const service = props.service;
    const vehicleType = props.vehicleType;
    const currentAddress = props.currentAddress;
    const destinationAddress = props.destinationAddress;
    const clientName = props.clientName;
    const phoneNumber = props.phoneNumber;
    const clientEmail = props.clientEmail;
    const tripDuration = props.duration;
    const fuelType = props.fuelType;

    const [showQuote, setShowQuote] = useState(true)
    const [confirmDetails, setConfirmDetails] = useState(false);
    const showConfirmDetails = () => {
      setShowQuote(false);
      setConfirmDetails(true);
    }
    const [customerMessage, setCustomerMessage] = useState('');
    const [showConfirmMessage, setShowConfirmMessage] = useState(false);
    
    const [orderError, setOrderError] = useState(false);

    // constants
    const fuelDelivaryRegBasePrice = 60;
    const fuelDelivaryRegBasePrice10 = 120;
    const fuelDelivaryDiesel = 98;
    const fuelDelivaryDiesel10 = 296;
    const fuelDelivaryMultiplier = 3;

    const jumpstartBasePrice = 45;
    const jumpstartMultiplier = 4;

    const vehicleTowingBasePrice = 120;
    const vehicleTowingMultiplier = 10;
  
    const lockoutBasePrice = 65;
    const lockoutMultiplier = 3;

    const tireChangeBasePrice = 115;
    const tireChangeMultiplier = 3;

    const taxPercentage = 1.07;

    let distanceInMiles = props.distance / 1609.344;

    let subTotal;
    let tax;
    let finalPrice;

    const calculate = (service) => {
      if (service === "Towing") {
        finalPrice = vehicleTowingBasePrice + (vehicleTowingMultiplier * distanceInMiles);
        console.log("running service");
      } else if (service === "FuelDelivary") {
        if (fuelType === '2gal87') {
          finalPrice = fuelDelivaryRegBasePrice + (fuelDelivaryMultiplier * distanceInMiles);
        } else if (fuelType === '10gal87') {
          finalPrice = fuelDelivaryRegBasePrice10 + (fuelDelivaryMultiplier * distanceInMiles);
        } else if (fuelType === '2galDiesel') {
          finalPrice = fuelDelivaryDiesel + (fuelDelivaryMultiplier * distanceInMiles);
        } else if (fuelType === '10galDiesel') {
          finalPrice = fuelDelivaryDiesel10 + (fuelDelivaryMultiplier * distanceInMiles);
        }
        console.log("running fuel delivary");
      } else if (service === 'Tirechange') {
        finalPrice = tireChangeBasePrice + (tireChangeMultiplier * distanceInMiles);
      } else if (service === 'Jumpstart') {
        finalPrice = jumpstartBasePrice + (jumpstartMultiplier * distanceInMiles);
      } else if (service === 'Lockout') {
        finalPrice = lockoutBasePrice + (lockoutMultiplier * distanceInMiles);
      } else console.log("error! calculate method not running");

      subTotal = finalPrice;
      finalPrice *= taxPercentage;
      tax = finalPrice - subTotal;
    }

    calculate(service);

    let displayFuel;
    if (fuelType === '2gal87') displayFuel = '2 gallons of 87 octane (regular)';
    else if (fuelType === '10gal87') displayFuel = '10 gallons of 87 octane (regular)';
    else if (fuelType === '2galDiesel') displayFuel = '2 gallons of Diesel';
    else if (fuelType === '10galDiesel') displayFuel = '10 gallons of Diesel';

    let displayService;
    if (service === 'Towing') displayService = 'Towing';
    else if (service === 'FuelDelivary') displayService = 'Fuel Delivary';
    else if (service === 'Jumpstart') displayService = 'Jump Start';
    else if (service === 'Tirechange') displayService = 'Tire Change';
    else if (service === 'Lockout') displayService = 'Lockout';

    const sendOrder = (e) => {
      e.preventDefault();
      let today = new Date();
      let month = today.getMonth() + 1;
      let date = today.getDate();
      let year = today.getFullYear();
      let hours = today.getHours();
      let minutes = today.getMinutes();

      let meridium = hours > 12 ? "PM" : "AM";
      hours = hours >= 12 ? hours - 12 : hours + 1;

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      let time = hours + ':' + minutes + ' ' + meridium + ' ' + month + '/' + date + '/' + year;
      
      let earnings = '$' + finalPrice.toFixed(2);
      let orderSubtotal = '$' + subTotal.toFixed(2);
      let orderTax = '$' + tax.toFixed(2);

      let tripDistance = distanceInMiles.toFixed(2) + ' mi';

      let orderDestinationAddress = props.destinationAddress;
      if (service != 'Towing') {
        orderDestinationAddress = 'n/a'
      }

      let equitment;
      let orderVehicleType;
      if (service === 'FuelDelivary') {
        equitment = displayFuel;
        orderVehicleType = 'n/a'
      } else {
        equitment = 'n/a';
        orderVehicleType = vehicleType;
      }

      let fromOffice;
      if (service != 'Towing') fromOffice = 'From Office';

      let orderNotes = customerMessage;
      let notes;
      orderNotes.length > 1 ? notes = orderNotes : notes = 'none'

      let templateParams = {
        time: time,
        clientName: clientName,
        phoneNumber: phoneNumber,
        clientEmail: clientEmail,
        service: displayService.toUpperCase(),
        currentAddress: currentAddress,
        destinationAddress: orderDestinationAddress,
        tripDistance: tripDistance,
        tripDuration: tripDuration,
        vehicleType: orderVehicleType,
        finalPrice: earnings,
        equitment: equitment,
        subtotal: orderSubtotal,
        tax: orderTax,
        fromOffice: fromOffice,
        orderNotes: notes,
      }

      emailjs.send('online-orders', 'orderID', templateParams, apiKey)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          setConfirmDetails(false);
          setShowConfirmMessage(true);
      }, function(error) {
          console.log('FAILED...', error);
          setConfirmDetails(false);
          setShowConfirmMessage(true);
          setOrderError(true);
      });

      
    }

    return (
        <div className="display-quote-container">
          {showQuote === true && 
            <>
              <h4>Here is your quote {clientName}!</h4>
              <div className="quote">
                <div className="quote-info">
                  <p className="bold">Service Requested</p>
                  <p>{displayService}</p>
                </div>
                { service === 'Towing' &&
                    <div className="quote-info">
                      <p className="bold">Vehicle Type</p>
                      <p>{vehicleType.toUpperCase()}</p>
                    </div>
                }
                <div className="quote-info">
                  <p className="bold">Current Location</p>
                  <p>{currentAddress}</p>
                </div>
                {service === "Towing" && 
                  <div>
                    <div className="quote-info">
                      <p className="bold">Destination</p>
                      <p>{destinationAddress}</p>
                    </div>
                    <div className="quote-info">
                        <p className="bold">Distance</p>
                        <p>{distanceInMiles.toFixed(2)} mi</p>
                      </div>
                  </div>
                }
                <div className="price-container flex flex-col">
                  <p className="totals">SUB TOTAL</p>
                  <p className="price">${subTotal.toFixed(2)}</p>
                  <p className="totals">TAX</p>
                  <p className="price">${tax.toFixed(2)}</p>
                  <div className="final-price">
                    <p className="final">TOTAL</p>
                    <p className="total-price">${finalPrice.toFixed(2)}</p>
                    <button onClick={showConfirmDetails} className="order_btn">order</button>
                  </div>
                </div>
              </div>
            </>
          }

            {confirmDetails === true &&
              <form className="confirm-details" onSubmit={sendOrder}>
                <h4>Confirm Details</h4>
                <div className="quote">
                  <div className="quote-info">
                    <p className="bold">Name</p>
                    <p>{clientName}</p>
                  </div>
                  <div className="quote-info">
                    <p className="bold">Phone Number</p>
                    <p>{phoneNumber}</p>
                  </div>
                  <div className="quote-info">
                    <p className="bold">Email</p>
                    <p>{clientEmail}</p>
                  </div>
                  <div className="quote-info">
                    <p className="bold">Service Requested</p>
                    <p>{displayService}</p>
                  </div>
                  {service === 'FuelDelivary' && (
                     <div>
                      <div className="quote-info">
                        <p className="bold">Fuel Type</p>
                        <p>{displayFuel}</p>
                      </div>
                    </div>
                  )}
                  {service === 'Towing' && 
                    <div className="quote-info">
                      <p className="bold">Vehicle Type</p>
                      <p>{vehicleType.toUpperCase()}</p>
                    </div>
                  }
                  <div className="quote-info">
                    <p className="bold">Current Location</p>
                    <p>{currentAddress}</p>
                  </div>
                  {service === "Towing" && 
                    <div>
                      <div className="quote-info">
                        <p className="bold">Destination</p>
                        <p>{destinationAddress}</p>
                      </div>
                    </div>
                  }
                  <div className='quote-info'>
                    <p className='bold'>Additional Information?</p>
                    <textarea
                      value={customerMessage}
                      onChange={(e) => {
                        setCustomerMessage(e.target.value)
                      }}
                      placeholder='please add any additional information you would like to let dispath know!'
                    >
                    </textarea>
                  </div>
                </div>           
                <button className="confirm_btn">confirm</button>
              </form>
            }
            {showConfirmMessage === true && 
              <div>
                {orderError != true ? 
                <>
                  <h4>Order Sent!</h4> 
                  <p>You should expect a phone call by one of our team members shortly!</p>
                </>
                 : <>
                  <h4>oops!</h4> 
                  <p>Sorry, There was a problem processing your order. Please check back later</p>
                 </>}
                
              </div>
            }
        </div>
    )
}
