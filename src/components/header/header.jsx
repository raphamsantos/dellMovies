 import React from 'react'
 import styled from 'styled-components'
 import Logo from "../assets/logo.png"

 export const HeaderStyle = styled.header`
     position: fixed;
     background-color: rgba(108, 122, 137 / 1) ;
     backdrop-filter: blur(15px);
     display:flex;
     justify-content:center;
     align-items:center;
     width: 100%;
     
    
     nav{
        width:100%;
        height: 100px;
     }
     ul{
    
         display:flex;
         justify-content: space-evenly;
         align-items: center;
         list-style:none;
         margin-left: 30px;
         height: 35px;
         li{
        padding: 2% 40px;
        border-radius: 20px;
        color: #fff;
        text-shadow: 0px 2px 8px #0000005C;
        cursor: pointer;
        @media(max-width:366px){
        padding: 2% 20px;
        
                    }
                }
         
     }

     a{
         text-decoration:none;
         color:white;
         font-size:1.5rem;
     }
     
     img{
        height:9vh ;
         margin-top: 10px;
               
           
            
        }
 `


 export default function Header(){
     return(
         <HeaderStyle>
             <nav>
                <div>
                <img src={Logo} alt="DELL MOVIES" />
                </div>
                 <ul>
                    <li><a href="#main">Séries</a></li>
                    <li><a href="#filmes">Filmes</a></li>
                     <li><a href='#series'>Filtro</a></li>
                     <li><a href='#series'>Login</a></li>
                    
                 </ul>
            </nav>
         </HeaderStyle>
         
     )
    
 }

