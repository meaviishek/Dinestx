import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Terminal = () => {
    const navigate = useNavigate();
    const [inputUser, setInputUser] = useState('');
    const [output, setOutput] = useState([]);
    const [loading, setLoading] = useState(false);
    const [awaitingConfirmation, setAwaitingConfirmation] = useState(false); // State for confirmation prompt
    const scrollRef = useRef(null);

    const InputItem = [
        { 
            input: "--h", 
            description: "Usage: --ca to create your account. Don't use [] bracket",
            output: [
                {
                    
                    "[--ca]": "Create your Dinestx Account" ,
                    "[--da]": "Delete your Account",
                    "[--up]": "Update Profile",
                    "[--s]": "Services",
                    "[--cu]": "Contact Us",
                }
            ]
        },
        { input: "--ca", description: "", route: "/" },
        { input: "--da", description: "Learn more about us", route: "/about" },
        { input: "--s", description: "Service", route: "/about" },
        { input: "--cu", description: "Contact Us", route: "/about" },
        { input: "Clear", description: "" }
    ];

    const handleUserInput = () => {
        if (awaitingConfirmation) {
            if (inputUser === "y"||"Y") {
                setOutput(prevOutput => [...prevOutput, "Wait for a while... We are creating your account"]);
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    navigate(InputItem.find(item => item.input === "Create Account").route);
                }, 1500);
            } else if (inputUser.toLowerCase() === "n") {
                setOutput(prevOutput => [...prevOutput, "Account creation canceled."]);
            } else {
                setOutput(prevOutput => [...prevOutput, "Invalid input. Please type 'Y' or 'N'."]);
                return;
            }
            setAwaitingConfirmation(false);
            setInputUser("");
            return;
        }

        const matchedItem = InputItem.find(item => item.input.toLowerCase() === inputUser.toLowerCase());

        if (matchedItem) {
            if (matchedItem.input === "--h") {
                const helpOutput = matchedItem.output
                    .map(item => Object.entries(item).map(([command, description]) => `${command}: ${description}`))
                    .flat();
                setOutput(prevOutput => [...prevOutput, `$ ${inputUser}`, matchedItem.description, ...helpOutput]);
            } else if (matchedItem.input === "--ca") {
                setOutput(prevOutput => [...prevOutput, `$ ${inputUser}`, matchedItem.description]);
                setAwaitingConfirmation(true);
            } else if (matchedItem.input === "") {

            } else if (matchedItem.input === "Clear") {
                setOutput([]);
            } else {
                setLoading(true);
                setOutput(prevOutput => [...prevOutput, `$ ${inputUser}`, `Navigating to ${matchedItem.description}`]);
                setTimeout(() => {
                    setLoading(false);
                    navigate(matchedItem.route);
                }, 1500);
            }
        } else {
            setOutput(prevOutput => [...prevOutput, `$ ${inputUser}`, "Command not found. Please try again."]);
        }
        setInputUser(""); // Clear input field after processing
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleUserInput();
        }
    };

    useEffect(() => {
        setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }, 100);
    }, [output]);

    return (
        <div className='justify-items-center my-36'>
            <div className="text-white font-mono w-[600px]">
                <div className='bg-gray-700 p-2 rounded-t-3xl'>
                    <div className="flex justify-between items-center mx-3">
                        <div className='flex items-center gap-3'>
                            <div className="flex space-x-2 text-red-500">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            </div>
                            <p className="text-green-400 flex gap-3">Dinestx</p>
                        </div>
                        <p className="text-sm">bash</p>
                    </div>
                </div>
                <div 
                    className="bg-gray-900 p-6 rounded-b-3xl space-y-1 h-[400px] overflow-y-auto hide-scrollbar" 
                    ref={scrollRef}
                >
                    <p className="text-green-400 flex gap-3">@Dinestx<span className='text-gray-300'>-h for help</span></p>
                    {output.map((line, index) => (
                        <p key={index} className="text-white">{line}</p>
                    ))}
                    {loading && (
                        <div className='animate-spin text-white flex items-center w-2 h-2'>/
                        </div>
                    )}
                    <div className='flex items-center gap-1.5'>
                        <p className="text-green-400">$ Dinestx ~ </p>
                        {awaitingConfirmation ? (
                            <div className=''>
                                <p className="text-white inline">Do you want to use Terminal (Y/N): </p>
                                <input
                                    className='bg-transparent border-none outline-none text-blue-500 focus:outline-none inline w-14'
                                    value={inputUser}
                                    onChange={(e) => setInputUser(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    autoFocus
                                />
                            </div>
                        ) : (
                            <input
                                className='bg-transparent border-none outline-none text-blue-500 focus:outline-none'
                                value={inputUser}
                                onChange={(e) => setInputUser(e.target.value)}
                                onKeyPress={handleKeyPress}
                                autoFocus
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terminal;
