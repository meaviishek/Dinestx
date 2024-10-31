import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Terminal = () => {
    const navigate = useNavigate();
    const [inputUser, setInputUser] = useState('');
    const [output, setOutput] = useState([]);
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef(null); // Ref for auto-scrolling

    const InputItem = [
        { 
            input: "help", 
            output: [
                {
                    "Create Account": "Show help documentation",
                    "Delete Account": "Show help documentation",
                    "Update Profile": "Show help documentation",
                }
            ]
        },
        { input: "Create Account", description: " ", route: "/" },
        { input: "Delete Account", description: "Learn more about us", route: "/about" },
        { input: "Service", description: "Learn more about us", route: "/about" },
        { input: "Contact", description: "Learn more about us", route: "/about" }
    ];

    const handleUserInput = () => {
        const matchedItem = InputItem.find(item => item.input.toLowerCase() === inputUser.toLowerCase());

        if (matchedItem) {
            if (matchedItem.input === "help") {
                const helpOutput = matchedItem.output.map(item => 
                    Object.entries(item).map(([command, description]) => `${command}: ${description}`)
                ).flat();
                setOutput(prevOutput => [...prevOutput, `$ ${inputUser}`, ...helpOutput]);
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
        // Wrap scrolling logic in a timeout to ensure output has fully updated
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
                            <p className="text-green-400 flex gap-3">@Dinestx</p>
                        </div>
                        <p className="text-sm">bash</p>
                    </div>
                </div>
                <div 
                    className="bg-gray-800/25 p-6 rounded-b-3xl space-y-1 h-[250px] overflow-y-auto hide-scrollbar" 
                    ref={scrollRef} // Ref for auto-scrolling
                >
                    <p className="text-green-400 flex gap-3">@Dinestx<span className='text-gray-300'>--help</span></p>
                    {output.map((line, index) => (
                        <p key={index} className="text-white">{line}</p>
                    ))}
                    {loading && (
                        <div className='animate-spin text-white flex items-center w-2 h-2'>/
                        </div>
                    )}
                    <div className='flex items-center gap-1.5'>
                        <p className="text-green-400">$ Dinestx ~ </p>
                        <input
                            className='bg-transparent border-none outline-none text-blue-500 focus:outline-none'
                            value={inputUser}
                            onChange={(e) => setInputUser(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terminal;
