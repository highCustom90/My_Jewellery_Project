import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Loader = () => {

    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);

    const progressRef = useRef(() => { });
    
    useEffect(() => {
        progressRef.current = () => {
            if (progress === 100) {
                setProgress(0);
                setBuffer(10);
            } else {
                setProgress(progress + 1);
                if (buffer < 100 && progress % 5 === 0) {
                    const newBuffer = buffer + 1 + Math.random() * 10;
                    setBuffer(newBuffer > 100 ? 100 : newBuffer);
                }
            }
        };
    });

    useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            <Box sx={{ width: '100%', mt: "15%" }}>
                <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            </Box>
        </div>
    )
}

export default Loader;