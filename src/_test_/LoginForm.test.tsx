import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { LoginForm } from "../LoginForm";

// Mock de los datos de prueba
const mockTestData = [
  { username: "", password: "" },
  { username: "test1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "testuser", password: "" },
  { username: "Hola", password: "PASWORD" },
];

describe("LoginForm (con datos de prueba)", () => {
  mockTestData.forEach(({ username, password }) => {
    test(`envía el formulario con usuario: ${username}`, () => {
      const mockSubmit = jest.fn();

      render(<LoginForm onSubmit={mockSubmit} />);

      const usernameInput = screen.getByLabelText(/usuario/i);
      const passwordInput = screen.getByLabelText(/contraseña/i);
      const submitButton = screen.getByRole("button", {
        name: /iniciar sesión/i,
      });

      fireEvent.change(usernameInput, { target: { value: username } });
      fireEvent.change(passwordInput, { target: { value: password } });
      fireEvent.click(submitButton);

      expect(mockSubmit).toHaveBeenCalledWith({ username, password });
      expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
