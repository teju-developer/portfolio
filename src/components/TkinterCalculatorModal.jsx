import React, { useState } from 'react';
import { X, Calculator, RotateCcw } from 'lucide-react';

export default function TkinterCalculatorModal({ isOpen, onClose }) {
  const [display, setDisplay] = useState('0');
  const [prevVal, setPrevVal] = useState(null);
  const [operation, setOperation] = useState(null);
  const [clearOnNext, setClearOnNext] = useState(false);

  if (!isOpen) return null;

  const handleDigit = (digit) => {
    if (display === '0' || clearOnNext) {
      setDisplay(String(digit));
      setClearOnNext(false);
    } else {
      setDisplay(display + digit);
    }
  };

  const handleOp = (op) => {
    setPrevVal(parseFloat(display));
    setOperation(op);
    setClearOnNext(true);
  };

  const handleEqual = () => {
    if (operation === null || prevVal === null) return;
    const current = parseFloat(display);
    let result = 0;
    switch (operation) {
      case '+':
        result = prevVal + current;
        break;
      case '-':
        result = prevVal - current;
        break;
      case '*':
        result = prevVal * current;
        break;
      case '/':
        result = current !== 0 ? prevVal / current : 'Error';
        break;
      default:
        return;
    }
    setDisplay(String(result));
    setPrevVal(null);
    setOperation(null);
    setClearOnNext(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevVal(null);
    setOperation(null);
    setClearOnNext(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-sm rounded-2xl bg-[#0b1020] border border-cyan-500/40 p-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-cyan-400" />
            <h4 className="text-sm font-mono font-bold text-white">
              Tkinter Calculator (Live Demo)
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Calculator Display */}
        <div className="mb-4 p-3 rounded-xl bg-[#030611] border border-cyan-500/30 text-right">
          <div className="text-[10px] font-mono text-slate-500 h-4">
            {prevVal !== null ? `${prevVal} ${operation}` : ''}
          </div>
          <div className="text-2xl font-mono font-bold text-cyan-300 tracking-wider overflow-x-auto">
            {display}
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-2 font-mono text-sm">
          <button
            onClick={handleClear}
            className="col-span-2 p-3 rounded-lg bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-red-300 font-bold"
          >
            CLEAR
          </button>
          <button
            onClick={() => handleOp('/')}
            className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold"
          >
            /
          </button>
          <button
            onClick={() => handleOp('*')}
            className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold"
          >
            &times;
          </button>

          <button onClick={() => handleDigit('7')} className="p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white">7</button>
          <button onClick={() => handleDigit('8')} className="p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white">8</button>
          <button onClick={() => handleDigit('9')} className="p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white">9</button>
          <button onClick={() => handleOp('-')} className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold">-</button>

          <button onClick={() => handleDigit('4')} className="p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white">4</button>
          <button onClick={() => handleDigit('5')} className="p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white">5</button>
          <button onClick={() => handleDigit('6')} className="p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white">6</button>
          <button onClick={() => handleOp('+')} className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold">+</button>

          <button onClick={() => handleDigit('1')} className="p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white">1</button>
          <button onClick={() => handleDigit('2')} className="p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white">2</button>
          <button onClick={() => handleDigit('3')} className="p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white">3</button>
          <button
            onClick={handleEqual}
            className="row-span-2 p-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold flex items-center justify-center text-lg"
          >
            =
          </button>

          <button onClick={() => handleDigit('0')} className="col-span-2 p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white">0</button>
          <button onClick={() => handleDigit('.')} className="p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white">.</button>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-center text-slate-400">
          Source: <a href="https://github.com/teju-developer/calculater.py" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">github.com/teju-developer/calculater.py</a>
        </div>
      </div>
    </div>
  );
}
