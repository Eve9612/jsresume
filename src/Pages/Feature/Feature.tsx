import { useState } from 'react';

function Feature() {
    // Step 2: State for inputs and result
    const [num1, setNum1] = useState<number>();
    const [num2, setNum2] = useState<number>();
    const [sum, setSum] = useState<number>(0);

    // Step 3: Function to add numbers
    function addNumbers(){
        const total = Number(num1) + Number(num2); // convert to numbers
        setSum(total); // store the result
    };

    return (
        <div>
            <h1>Feature</h1>

            {/* Step 4: Input fields */}
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                placeholder="Enter first number"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                placeholder="Enter second number"
            />

            {/* Button to trigger addition */}
            <button onClick={addNumbers}>Add</button>

            {/* Display the result */}
            {sum !== null && <p>Sum: {sum}</p>}
        </div>
    );
}

export default Feature;
