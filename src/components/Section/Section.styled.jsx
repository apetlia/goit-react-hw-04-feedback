import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: ${p => p.theme.colors.black};
`;
