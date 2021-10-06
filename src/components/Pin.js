
import React from 'react'
import styled from '@emotion/styled'


function Pin(props) {
    let {urls}=props
    return (
        <Wrapper>
        <Container>
            <img src={urls.regular} alt="pin"/>
        </Container>
        </Wrapper>
    )
}

export default Pin

export const Wrapper= styled.div`
    display: inline-flex;
    padding: 0.5rem;

`
export const Container= styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 14.75rem;
    
    
    img {
        width: 100%;
        cursor: zoom-in;
        object-fit: cover;
        border-radius: 10px 25px 10px 25px;
        opacity: 80%;
        filter: grayscale(50%);
        :hover{
            opacity: 300%;
            filter: grayscale(0%);
        }
    }
`
