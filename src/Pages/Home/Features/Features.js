import React from 'react';
import icon1 from '../../../images/icons/image 33 (Traced).png';
import icon2 from '../../../images/icons/satisfied 1 (Traced) (2).png';
import icon3 from '../../../images/icons/technical-support 1 (Traced).png';
import icon4 from '../../../images/icons/secure-payment 1 (Traced).png';
const Features = () => {
    return (
        <div className="feature-section my-20">
            <div className="container gap-x-8 flex flex-wrap md:flex-nowrap mx-auto features">
                <div className="single-feature pt-20 pb-14 px-20 w-full md:w-1/4 shadow-md rounded-lg">
                    <img style={{ width: '115px', height: 'auto', margin: 'auto' }} src={icon1} alt="" />
                    <h2 className="text-center text-lg font-bold mt-5 mb-2">DELIVERY IN EUROPE</h2>
                    <p className="text-center">Do you not live in the Netherlands? No problem, we deliver anywhere in Europe!</p>
                </div>

                <div className="single-feature pt-20 pb-14 px-20 w-full md:w-1/4 shadow-md rounded-lg">
                    <img style={{ width: '115px', height: 'auto', margin: 'auto' }} src={icon2} alt="" />
                    <h2 className="text-center text-lg font-bold mt-5 mb-2">SATISFIED OR REFUNDED</h2>
                    <p className="text-center">Is there something wrong? Good news, you have 14 days to change your mind</p>
                </div>
                <div className="single-feature pt-20 pb-14 px-20 w-full md:w-1/4 shadow-md rounded-lg">
                    <img style={{ width: '115px', height: 'auto', margin: 'auto' }} src={icon3} alt="" />
                    <h2 className="text-center text-lg font-bold mt-5 mb-2">AFTER SALES SERVICE</h2>
                    <p className="text-center">Need help ? Our customer service is available from Monday to Saturday from 10 a.m. to 6 p.m.</p>
                </div>
                <div className="single-feature pt-20 pb-14 px-20 w-full md:w-1/4 shadow-md rounded-lg">
                    <img style={{ width: '115px', height: 'auto', margin: 'auto' }} src={icon4} alt="" />
                    <h2 className="text-center text-lg font-bold mt-5 mb-2">SECURE PAYMENT</h2>
                    <p className="text-center"> We use SSL encryption for Secure Payments</p>
                </div>

            </div>
        </div>
    );
};

export default Features;