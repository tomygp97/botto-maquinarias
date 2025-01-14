import { useEffect, useState } from "react";

const useWindowSize = () => {
    const isClient = typeof window !== "undefined";

    const [size, setSize] = useState({
        width: isClient ? window.innerWidth : 0,
        height: isClient ? window.innerHeight : 0,
    });

    useEffect(() => {
        if (!isClient) return;

        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [isClient]);

    return size;
};

export default useWindowSize;
