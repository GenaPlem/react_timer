import {useState, useRef, useEffect} from "react";
import {formatTime} from "../utils/formatTime";

export const Timer = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const startTimeRef = useRef(null);
    const intervalRef = useRef(null);

    const handleStart = () => {
        if (!intervalRef.current) {
            const now = Date.now();
            startTimeRef.current = now - elapsedTime; // Устанавливаем начальное время с учётом прошедшего
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 1000);
        }
    };

    const handleStop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const handleReset = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = null;
        startTimeRef.current = null;
        setElapsedTime(0);
    }

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
    }, []);

    const formattedTime = formatTime(elapsedTime);

    return (
        <>
            <h1>{formattedTime}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}