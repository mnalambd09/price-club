import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', Price: 0, features: [
            'Awesome Feather',
            'Extra Feather',
            'Unnecessary Feather',
            'Will never use Feature',
            'Hudai Feature',
            'Ajarira Feature'
        ]},
        { id: 2, name: 'Medium', Price: 9.99, features: [
            'Everthing on Free',
            'Extra Feather',
            'Unnecessary Feather',
            'Will never use Feature',
            'Hudai Feature',
            'Ajarira Feature'
        ] },
        { id: 3, name: 'Premium', Price: 19.99, features: [
            'Everything on Premium',
            'Extra Feather',
            'Unnecessary Feather',
            'Will never use Feature',
            'Hudai Feature',
            'Ajarira Feature'
        ] },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 text-white py-10'>Best Deal of the City</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;