<<<<<<< HEAD
import React, { useEffect } from 'react'
=======
import React, { useEffect, useRef, useState } from 'react'
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Loader = () => {

<<<<<<< HEAD
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progressRef = React.useRef(() => { });
    React.useEffect(() => {
=======
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);

    const progressRef = useRef(() => { });
    
    useEffect(() => {
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
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
<<<<<<< HEAD

            <Box sx={{ width: '100%',mt:"15%" }}>
                <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            </Box>

=======
            <Box sx={{ width: '100%', mt: "15%" }}>
                <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            </Box>
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
        </div>
    )
}

<<<<<<< HEAD
export default Loader
=======
export default Loader;
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
