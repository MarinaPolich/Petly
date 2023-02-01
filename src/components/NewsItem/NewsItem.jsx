import React from 'react'
import { Description, StyledLi, StyledNewsHeader, Date, Link, FlexBox } from './NewsItem.styled'
import  moment from 'moment'


export default function NewsItem({item}) {
    
   return (
  <StyledLi>
    <StyledNewsHeader>{item.title}</StyledNewsHeader>
    <Description>{item.description}</Description>
    <FlexBox>
    <Date>{item.date && moment(item.date).format("YYYY/MM/DD")}</Date>
    <Link rel="noopener noreferrer" target="_blanc" href={item.url}>Read more</Link>
    </FlexBox>
 </StyledLi>
  )
}
