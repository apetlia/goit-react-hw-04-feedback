import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: inline-flex;
  gap: 15px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid ${p => p.theme.colors.silver};
  border-radius: 5px;
  cursor: pointer;

  :active {
    background-color: ${p => p.theme.colors.gray};
    color: ${p => p.theme.colors.white};
  }
`;
