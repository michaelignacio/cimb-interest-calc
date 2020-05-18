import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  margin: 5px;
`

export default Row