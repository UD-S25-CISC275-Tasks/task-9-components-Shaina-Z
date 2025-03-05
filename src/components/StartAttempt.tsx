import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);
    const [inProgress, setProgress] = useState<boolean>(false);
    <span>
            <Button onClick={() => setValue(1 + value)}>Mulligan</Button>
        </span>
    return <div>Start Attempt</div>;
}
