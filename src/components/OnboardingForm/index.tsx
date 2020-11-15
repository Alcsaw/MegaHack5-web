import React from 'react';

import { Container, Form, Question } from './styles';

const OnboardingForm: React.FC = () => {
  return (
    <Container>
      <Form>

        <label htmlFor="favorite_color">
          <Question>Qual a sua cor favorita?</Question>
        </label>
        <select name="favorito_color" id="favorito_color">
          <option value="blue">Azul</option>
          <option value="red">Vermelho</option>
          <option value="yellow">Amarelo</option>
        </select>
      </Form>
    </Container>
  );
}

export default OnboardingForm;
