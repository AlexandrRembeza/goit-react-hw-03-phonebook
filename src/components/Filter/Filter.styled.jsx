import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 450px;

  background-color: rgb(220, 253, 220);

  padding: 15px 10px;
  margin: 0 auto;
  margin-bottom: 10px;
  border: 3px solid rgb(18, 209, 18);
  border-radius: 10px;
`;

export const Label = styled.label`
  width: 250px;

  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-size: 20px;
  font-weight: 500;

  color: rgb(40, 70, 219);
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 250px;

  font-size: 18px;
  color: rgb(40, 70, 219);

  padding: 10px 15px;
  border: 1px solid rgb(40, 70, 219);
  border-radius: 5px;
  outline: none;

  &:focus {
    outline: 2px solid rgb(40, 70, 219);
  }
`;
