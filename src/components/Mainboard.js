import React from 'react'
import styled from '@emotion/styled'
import Pin from './Pin'
import './Mainboard.css'

function Mainboard(props) {
    let {pins} = props;
    console.log(pins)
    return (
        <Wrapper>
            <Container>
            {pins.map((pin, index) => {
                let {urls}=pin;
                return <Pin key={index} urls={urls} />
            })}
               
            </Container>
        </Wrapper>
    )
}

export default Mainboard
export const Wrapper = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    margin-top:1rem;
    display: flex;
    justify-content: center
`
export const Container =styled.div`
    
    column-count:5;
    column-gap: 15px;
    margin: 0 auto;
    height:100%;
    max-width: 1280px;
    width: 90%;
    background-colort: white;
`