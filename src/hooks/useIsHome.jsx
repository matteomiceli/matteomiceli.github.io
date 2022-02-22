import { useEffect, useState } from "react";

export default function useScreenMetrics() {
    const [isHome, setIsHome] = useState(true);
    const [screenWidth, setScreenWidth] = useState();
    const [screenHeight, setScreenHeight] = useState(
        typeof window !== "undefined" ? window.innerHeight : ""
    );
    const [posX, setPosX] = useState();
    const [posY, setPosY] = useState();
    const [pageWidth, setPageWidth] = useState();
    const [pageHeight, setPageHeight] = useState();

    useEffect(() => {
        if (window) {
            const { innerWidth, innerHeight, scrollY } = window;
            const { clientHeight, clientWidth } = document.body;
            setScreenHeight(innerHeight);
            setScreenWidth(innerWidth);
            setPageHeight(clientHeight);
            setPageWidth(clientWidth);

            if (scrollY > screenHeight / 2) {
                setIsHome(false);
            }

            window.addEventListener("resize", (e) => {
                const { innerWidth, innerHeight } = window;
                const { clientHeight, clientWidth } = document.body;
                setScreenHeight(innerHeight);
                setScreenWidth(innerWidth);
                setPageHeight(clientHeight);
                setPageWidth(clientWidth);
            });

            window.addEventListener("scroll", (e) => {
                const { scrollY } = window;
                setTimeout(() => {
                    if (Math.round(scrollY) >= screenHeight / 2) {
                        setIsHome(false);
                    } else {
                        setIsHome(true);
                    }
                }, 10);
            });

            return () => {
                window.addEventListener("resize", (e) => {});
                window.addEventListener("scroll", (e) => {});
            };
        }
    }, []);
    return isHome;
}
