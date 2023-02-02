import React from 'react'
import { Description, StyledLi, StyledNewsHeader, Date, Link, FlexBox } from './NewsItem.styled'
import  moment from 'moment'
import { cutString } from 'helpers/cutString'


export default function NewsItem({item}) {
    
   return (
  <StyledLi>
    <StyledNewsHeader>{cutString(item.title, 40)}</StyledNewsHeader>
    <Description>{cutString(item.description, 222) }</Description>
    <FlexBox>
    <Date>{item.date && moment(item.date).format("YYYY/MM/DD")}</Date>
    <Link rel="noopener noreferrer" target="_blanc" href={item.url}>Read more</Link>
    </FlexBox>
 </StyledLi>
  )
}
