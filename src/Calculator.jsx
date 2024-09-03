import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

function Calculator() {
    const [input, setInput] = useState(''); 

    const handleButtonClick = (value) => {
        if (value === 'AC') {
            setInput(''); 
        } else if (value === 'DEL') {
            setInput(input.slice(0, -1)); 
        } else if (value === '=') {
            try {
               
                setInput(eval(input).toString());
            } catch {
                setInput('Error'); 
            }
        } else {
            setInput(input + value); 
        }
    };

    return (
        <div className="container mt-5">
            <div className="calculator border rounded p-3 bg-light">
                <div className="row mb-4">
                    <Form.Control size="lg" type="text" placeholder="0" value={input} readOnly className='input bg-dark text-light' />
                </div>
                <div className="row mb-2">
                    <div className="col-6">
                        <Button variant="outline-primary" className="w-100" onClick={() => handleButtonClick('AC')}>AC</Button>
                    </div>
                    <div className="col">
                        <Button variant="outline-primary" className="w-100" onClick={() => handleButtonClick('DEL')}>DEL</Button>
                    </div>
                    <div className="col">
                        <Button variant="warning" className="w-100" onClick={() => handleButtonClick('/')}>/</Button>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <Button variant="light" className="w-100" onClick={() => handleButtonClick('7')}>7</Button>
                    </div>
                    <div className="col">
                        <Button variant="light" className="w-100" onClick={() => handleButtonClick('8')}>8</Button>
                    </div>
                    <div className="col">
                        <Button variant="light" className="w-100" onClick={() => handleButtonClick('9')}>9</Button>
                    </div>
                    <div className="col">
                        <Button variant="warning" className="w-100" onClick={() => handleButtonClick('*')}>*</Button>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <Button variant="light" className="w-100" onClick={() => handleButtonClick('4')}>4</Button>
                    </div>
                    <div className="col">
                        <Button variant="light" className="w-100" onClick={() => handleButtonClick('5')}>5</Button>
                    </div>
                    <div className="col">
                        <Button variant="light" className="w-100" onClick={() => handleButtonClick('6')}>6</Button>
                    </div>
                    <div className="col">
                        <Button variant="warning" className="w-100" onClick={() => handleButtonClick('-')}>-</Button>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <Button variant="light" className="w-100" onClick={() => handleButtonClick('1')}>1</Button>
                    </div>
                    <div className="col">
                        <Button variant="light" className="w-100" onClick={() => handleButtonClick('2')}>2</Button>
                    </div>
                    <div className="col">
                        <Button variant="light" className="w-100" onClick={() => handleButtonClick('3')}>3</Button>
                    </div>
                    <div className="col">
                        <Button variant="warning" className="w-100" onClick={() => handleButtonClick('+')}>+</Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Button variant="light" className="w-100" onClick={() => handleButtonClick('0')}>0</Button>
                    </div>
                    <div className="col">
                        <Button variant="light" className="w-100" onClick={() => handleButtonClick('.')}>.</Button>
                    </div>
                    <div className="col-6">
                        <Button variant="success" className="w-100" onClick={() => handleButtonClick('=')}>=</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
