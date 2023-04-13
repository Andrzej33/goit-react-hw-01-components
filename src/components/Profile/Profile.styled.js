import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin: 1rem;
  width: 300px;
  height: 500px;
  padding: 0.5rem 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 12px 32px 4px rgba(black, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// export const ProfileWrapper = styled.div`
//   background-color: 'orange';
// `;

// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;
