import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setValue] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    return (
        <>
            <>
                <span>
                    <Button
                        onClick={() => setValue(1 + attempts)}
                        disabled={inProgress}
                    >
                        Mulligan
                    </Button>
                </span>
                <span>
                    <Button
                        onClick={() => setProgress(true)}
                        disabled={inProgress || attempts < 0}
                    >
                        Start Quiz
                    </Button>
                </span>
            </>
            <span>
                <Button
                    onClick={() => setProgress(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
                <span>Number of attempts:{attempts}</span>
            </span>
        </>
    );
}
