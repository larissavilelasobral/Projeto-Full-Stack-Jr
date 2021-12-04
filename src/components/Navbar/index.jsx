import React from 'react'
import Logo from '../../assets/Img/seta-direita.png'
import * as S from './styles';

const Navbar = () => {
  return (
    <S.Nav>
      <S.DivNav>
        <S.Img className='nav-logo' src={Logo} alt='Logo' />
        <S.P>Gestão de Projetos</S.P>
      </S.DivNav>
      <S.Ul>
        <S.Li>HOME</S.Li>
        <S.Li>ABOUT US</S.Li>
        <S.Li>CONTATC US</S.Li>
        <S.Li>LOGIN/CADASTRO</S.Li>
      </S.Ul>
    </S.Nav>
  )
}

export default Navbar;
