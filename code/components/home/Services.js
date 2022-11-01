// components
import Service from "../util/Service"

export default function Services() {
    return (
        <section id="services" className="services-container">
            <div className="services-header">
                <h2>Services We Offer...</h2>
                <h4>Even though we are based in Circle Pines / Blaine, we proudly serve the greater Twin Cities metro. And we are good at it! Our experience coupled with
                    our skilled team, make sure to get the job done fast and efficient!
                </h4>
            </div>
            <div className="services">
                <Service 
                    image='/towed-car.svg'
                    service='Towing'
                    desc='We specialize in fast and efficient vehicle 
                    towing and winchout services for 
                    any situation!'
                />
                <Service 
                    image='/breakdown.svg'
                    service='Roadside Assistance'
                    desc="From a lockout situation to your car not starting, we've got you covered!"
                />
                <Service 
                    image='/tire-change.svg'
                    service='Tire Change'
                    desc="Got a flat? Our fast and efficient staff will get you back on the road in no time!"
                />
                <Service 
                    image='/battery.svg'
                    service='Jump Start'
                    desc="Need a jump? Our dedicated drivers take care of everything. You don't even need to leave your vehicle guaranteed!"
                />
                <Service 
                    image='/fuel.svg'
                    service='Fuel Delivary'
                    desc="Forget to fill up? With our affordable prices, you wont have to pay big for a little mistake!"
                />
                <Service 
                    image='/lockout.svg'
                    service='Lockout'
                    desc="Locked yourself out? No problem! we perform lockout services in all 7 counties in the metro!"
                />
            </div>
        </section>
    )
}