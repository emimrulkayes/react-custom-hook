import { useEffect, useState } from "react";

export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        };
        function handleOffLine() {
            setIsOnline(false);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffLine);

        return() => {
            window.addEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffLine);
        }
    }, [])
    return isOnline;
}

