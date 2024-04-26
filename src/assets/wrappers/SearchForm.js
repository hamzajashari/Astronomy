import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 2rem;
  .form {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .form-row {
  grid-column: span 2; /* Each row spans both columns */
}
  .form-input {
    margin-bottom: 1rem;
  }

`;

export default Wrapper;
