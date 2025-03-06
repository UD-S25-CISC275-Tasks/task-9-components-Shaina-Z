import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("♥️");
    function cycleAlphabetically() {
        if (holiday === "🎄") {
            setHoliday("🇺🇸");
        } else if (holiday === "🇺🇸") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🍀");
        } else if (holiday === "🍀") {
            setHoliday("♥️");
        } else if (holiday === "♥️") {
            setHoliday("🎄");
        }
    }
    function cycleYear() {
        if (holiday === "🎄") {
            setHoliday("♥️");
        } else if (holiday === "♥️") {
            setHoliday("🍀");
        } else if (holiday === "🍀") {
            setHoliday("🇺🇸");
        } else if (holiday === "🇺🇸") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🎄");
        }
    }
    return (
        <div>
            <span>
                <Button onClick={cycleYear}>Advance By Year</Button>
            </span>
            <span>
                <Button onClick={cycleAlphabetically}>
                    Advance By Alphabet
                </Button>
            </span>
            <span>Holiday: {holiday}</span>
        </div>
    );
}
