import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  align-items: center;

  > img{
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column ;
    line-height: 24px;

    a {
    font-size: 14px;
    color: ${({ theme })=> theme.COLORS.GRAY_100};
    }
    strong {
    display: flex ;
    flex-direction: row;
    flex-wrap: nowrap;
    font-size: 18px;
    color: ${({ theme })=> theme.COLORS.GRAY_200};
    }
  }
`;
