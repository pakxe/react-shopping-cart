import * as S from './Header.style';

import BACK from '../../assets/chevron-back.svg';
import { useNavigate } from 'react-router-dom';

type HeaderType = 'logo' | 'back';

interface HeaderProps {
  type?: HeaderType;
}

const Header = ({ type = 'logo' }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.PrefixButton onClick={() => navigate(-1)}>
        {type === 'logo' ? <S.Logo>SHOP</S.Logo> : <S.SvgContainer src={BACK} alt="go back" />}
      </S.PrefixButton>
      <S.Suffix></S.Suffix>
    </S.Header>
  );
};

export default Header;
