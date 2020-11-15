import React from 'react';

import { Container, Form, Label, Question, Select, Button } from './styles';

const OnboardingForm: React.FC = () => {
  return (
    <Container>
      <Form>

        <Question>
          <Label htmlFor="favorite_color">Qual a sua cor favorita?</Label>
          <Select name="favorito_color" id="favorito_color">
            <option value="blue">Azul</option>
            <option value="red">Vermelho</option>
            <option value="yellow">Amarelo</option>
          </Select>
        </Question>

        <Question>
          <Label htmlFor="body_size">Qual é o formato do seu corpo?</Label>
          <Select name="favorito_color" id="favorito_color">
            <option value="thin">Magro</option>
            <option value="meso">Mediano</option>
            <option value="fat">Sobrepeso</option>
            <option value="muscle">Musculoso</option>
          </Select>
        </Question>

        <Button type="submit">Pronto</Button>

      </Form>
    </Container>
  );
}

export default OnboardingForm;
