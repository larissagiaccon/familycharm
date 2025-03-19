import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <S.Container className="button-component" type="button" {...rest}>
      {children}
    </S.Container>
  );
};

export default Button;
