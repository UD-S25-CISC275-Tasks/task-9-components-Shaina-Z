import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftdie, setLeftDie] = useState<number>(0);
    const [rightdie, setRightDie] = useState<number>(0);
    return (
        <>
            <span>
                <Button onClick={() => setLeftDie(d6)}>Roll Left</Button>
            </span>
            <span>
                <Button onClick={() => setRightDie(d6)}>Roll Right</Button>
            </span>
            <span>
                {(leftdie === 1 && rightdie == 1 && <div>Lose</div>) ||
                    (leftdie === rightdie && leftdie !== 1 && (
                        <div>Win</div>
                    ))}{" "}
            </span>
        </>
    );
}
