import {useState, useRef, useEffect} from "react";

export const Timer = () => {
    const [timerValue, setTimerValue] = useState(0);
    const intervalRef = useRef(null);

    const handleStart = () => {
        if (intervalRef.current === null) {
            intervalRef.current = setInterval(() => {
                setTimerValue((prevState) => prevState + 1);
            }, 1000);
        }
    };

    const handleStop = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const handleReset = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setTimerValue(0);
        }
    }

    useEffect(() => {
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        }
    }, []);

    return (
        <>
            <p>{timerValue}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}