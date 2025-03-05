import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
     function flipQuestion(): void {
        if(type==="short_answer_question"){
            setType("multiple_choice_question");
        }else{
            setType("short_answer_question");
        }
  }
    return <div>
    <Button onClick={flipQuestion}>Change Type</Button>
    {type==="short_answer_question" && <div>Short Answer</div>
    || type==="multiple_choice_question"&&<div>Multiple Choice</div>}  
  </div>;
}

