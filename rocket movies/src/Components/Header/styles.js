import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid ${({ theme })=> theme.COLORS.GRAY_200};

  display: flex;
  justify-content: space-between;
  align-items: center;
 
  padding: 0 90px;
  background-color: ${({ theme })=> theme.BACKGROUND_900};
`;

export const Profile = styled.div`
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
    font-size: 18px;
    color: ${({ theme })=> theme.COLORS.GRAY_200};
    }
  }
`;