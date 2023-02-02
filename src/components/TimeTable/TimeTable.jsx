import React from "react";
import { StyledDiv } from "./TimeTable.styled";
import { daysOfWeek } from "constants/daysOfWeek";

export default function TimeTable({workDays}) {
  return (
    <StyledDiv>

      { workDays.map((item, index)=> {
        return <p>{daysOfWeek[index]}<span>{item.isOpen ? `${item.from} - ${item.to}` : "Closed"}</span></p>
      })}
     
    </StyledDiv>
  );
}
