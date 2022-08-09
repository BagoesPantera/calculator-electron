import { useEffect, useState } from "react";

export default function Home() {
    const [display, setDisplay] = useState('');
    const [hasOpertaion, setHasOpertaion] = useState(false);
    const [currOperation, setCurrOperation] = useState('');

    const symbols = ['+', '-', 'x', '/'];

    useEffect(() => {
        setDisplay(display);
    }, [display]);

    const onClickNumber = (number) => { 
        setDisplay(display + number);
       
    }

    const onClickOperation = (operation) => {
        if(!hasOpertaion) {
            setDisplay(display + operation);
            setCurrOperation(operation);
            setHasOpertaion(true);
        }
    }

    const onClear = () => {
        setDisplay('');
        setHasOpertaion(false);
        setCurrOperation('');
    }

    const onDelete = () => {
        const lastChar = display.slice(-1);

        if (symbols.includes(lastChar)) {
            setCurrOperation('');
            setHasOpertaion(false);
            setDisplay(display.substring(0, display.length - 1));
        }else {
            setDisplay(display.substring(0, display.length - 1));
        }
    }

    const calculate = () => {
        const num1 = display.substring(0, display.indexOf(currOperation));
        const num2 = display.substring(display.indexOf(currOperation) + 1);

        switch (currOperation) {
            case '+':
                setDisplay(String(parseFloat(num1) + parseFloat(num2)));
                setHasOpertaion(false);
                setCurrOperation('');
                break;
            case '-':
                setDisplay(String(parseFloat(num1) - parseFloat(num2)));
                setHasOpertaion(false);
                setCurrOperation('');
                break;
            case 'x':
                setDisplay(String(parseFloat(num1) * parseFloat(num2)));
                setHasOpertaion(false);
                setCurrOperation('');
                break;
            case '/':
                setDisplay(String(parseFloat(num1) / parseFloat(num2)));
                setHasOpertaion(false);
                setCurrOperation('');
                break;
            default:
                break;
        }
    }

    return(
    <div className="max-w-full h-screen mx-auto bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden" >
        <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
            <div className="w-full py-5 px-6 text-6xl text-white font-thin">{ display }</div>
        </div>
        <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
            <div className="flex w-full">
                <div className="w-2/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white  text-xl font-light" onClick={() => onClear()}>C</button>
                </div>
                
                <div className="w-1/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white  text-2xl font-light"><img className="w-1/4 m-auto" src="../../src/assets/icon/delete.png" alt="" onClick={() => onDelete()} /></button>
                </div>
                <div className="w-1/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white  text-xl font-light" onClick={() => onClickOperation('/')}>/</button>
                </div>
            </div>
            <div className="flex w-full">
                <div className="w-1/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light" onClick={() => onClickNumber('7')}>7</button>
                </div>
                <div className="w-1/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light" onClick={() => onClickNumber('8')}>8</button>
                </div>
                <div className="w-1/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light" onClick={() => onClickNumber('9')}>9</button>
                </div>
                <div className="w-1/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white  text-xl font-light" onClick={() => onClickOperation('x')}>⨉</button>
                </div>
            </div>
            <div className="flex w-full">
                <div className="w-1/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light" onClick={() => onClickNumber('4')}>4</button>
                </div>
                <div className="w-1/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light" onClick={() => onClickNumber('5')}>5</button>
                </div>
                <div className="w-1/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light" onClick={() => onClickNumber('6')}>6</button>
                </div>
                <div className="w-1/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white  text-xl font-light" onClick={() => onClickOperation('-')}>-</button>
                </div>
            </div>
            <div className="flex w-full">
                <div className="w-1/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light" onClick={() => onClickNumber('1')}>1</button>
                </div>
                <div className="w-1/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light" onClick={() => onClickNumber('2')}>2</button>
                </div>
                <div className="w-1/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light" onClick={() => onClickNumber('3')}>3</button>
                </div>
                <div className="w-1/4 border-r border-b border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light" onClick={() => onClickOperation('+')}>+</button>
                </div>
            </div>
            <div className="flex w-full">
                <div className="w-1/4 border-r border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light" onClick={() => onClickNumber('00')}>00</button>
                </div>
                <div className="w-1/4 border-r border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light" onClick={() => onClickNumber('0')}>0</button>
                </div>
                <div className="w-2/4 border-r border-indigo-400">
                    <button className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light" onClick={() => calculate()}>=</button>
                </div>
            </div>
        </div>
    </div>
    )
}