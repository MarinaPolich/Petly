import React from "react";
import { StyledDiv, StyledItem } from "./TimeTable.styled";
import { daysOfWeek } from "constants/daysOfWeek";

export default function TimeTable({ workDays, style }) {
  return (
    <StyledDiv style={style}>
      {workDays.map((item, index) => {
        return (
          <StyledItem>
            <span>{daysOfWeek[index]}</span>
            <span>{item.isOpen ? `${item.from}-${item.to}` : "Closed"}</span>
          </StyledItem>
        );
      })}
    </StyledDiv>
  );
}
