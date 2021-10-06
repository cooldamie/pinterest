/* eslint-disable react/jsx-no-undef */
import React,{ useState} from 'react'
import { IconButton } from '@material-ui/core'
import styled from '@emotion/styled'
import { Notifications, Textsms,Face, KeyboardArrowDown, Search, CameraOutlined } from '@material-ui/icons'
// import { PersonAddOutlined } from '@material-ui/icons'


function Header(a) {
    const[input,setInput]=useState("");
    const onSearchSubmit = (e) => {
        e.preventDefault();
        a.onSubmit(input);
   }

    return (
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <CameraOutlined />
                </IconButton>

            </LogoWrapper>
            <HomePageButton>
                <a href="/">Home</a>
            </HomePageButton>
            <FollowingButton>
                <a href="/" >Blog </a>
            </FollowingButton>
            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <Search />
                    </IconButton>
                
                    <form>
                        <input type="text" onChange={(e) => setInput(e.target.value)}/>
                        <button type="submit" onClick={onSearchSubmit} />
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>
                <IconButton>
                    <Notifications />
                </IconButton>
                <IconButton>
                    <Textsms />
                </IconButton>
                <IconButton>
                    <Face />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDown />
                </IconButton>

           </IconsWrapper>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
display:flex;
align-items: center;
height:3.5rem;
padding: 12px 4px 4px 16px;
color: #a9a9a9;
background-color: white;
`
const LogoWrapper =styled.div`
    .MuiSvgIcon-root{
        color:#e60023;
        font-size: 2rem;
        cursor: pointer;
    }
`
const HomeButton =styled.div`
display:flex;
height: 3.4rem;
min-width:7rem;
align-items: center;
justify-content:center;
cursor: pointer;
`
const HomePageButton =styled(HomeButton)`

background-color: white;
:hover {
   background-color :#f7f7f7;

}
border-radius:25px;
a {
    text-decoration: none;
    color: gray;
    font-weight: 700;
}
`
const FollowingButton =styled(HomeButton)`

background-color: white;
:hover {
   background-color :#f7f7f7;
   color: red;
}
border-radius:25px;
a {
    text-decoration: none;
    color: gray;
    font-weight: 700;
} 
`
const SearchWrapper =styled.div`
    flex:1;
`

const SearchBarWrapper=styled.div`
    background-color:#efefef;
    display: flex;
    height: 2.5rem;
    width: 98%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;
    margin-right: 30px;

    form {
        display: flex;
        flex: 1;
    }

    form > input {
       background-color: transparent; 
       font-size: 1rem;
       margin-left: 5px;
       width: 100%;
       border: none;
       color: gray;
       font-weight: 500;
       :focus {
           outline:none;
       }
    }

    form > button {
        display: none;
    }
`
const IconsWrapper =styled.div`

`