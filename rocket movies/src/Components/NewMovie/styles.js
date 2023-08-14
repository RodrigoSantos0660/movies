import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 80px;
  overflow-y: auto;

  border:none;
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 16px;

  > h2 {
    flex: 1;
    text-align: left;
    font-weight: 600;
    font-size: 24px;
    color: white;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }


`;
