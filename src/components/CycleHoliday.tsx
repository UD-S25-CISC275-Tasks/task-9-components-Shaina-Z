import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("");
    function cycleAlphabetically() {}
    function cycleYear() {}
    return <div>Holiday: {holiday}</div>;
}
