import React, { useRef, useEffect } from 'react';

const DesmosCalculator = () => {
    const calculatorContainer = useRef(null);

    useEffect(() => {
        if (calculatorContainer.current) {
            // eslint-disable-next-line no-undef
            const calculator = Desmos.GraphingCalculator(calculatorContainer.current);
            // You can customize the calculator here if needed
        }
    }, []);

    return <div ref={calculatorContainer} style={{ width: '600px', height: '400px' }} />;
};

export default DesmosCalculator;

