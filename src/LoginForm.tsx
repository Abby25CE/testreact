import React, { useState } from "react";

export function LoginForm({
  onSubmit,
}: {
  onSubmit: (data: { username: string; password: string }) => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  const validateForm = () => {
    const newErrors: { username?: string; password?: string } = {};

    if (!username.trim()) {
      newErrors.username = "El usuario es obligatorio";
    }

    if (!password.trim()) {
      newErrors.password = "La contraseña es obligatoria";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit({ username: username.trim(), password: password.trim() });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuario *</label>
        <input
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            // Limpiar error cuando el usuario empiece a escribir
            if (errors.username) {
              setErrors((prev) => ({ ...prev, username: undefined }));
            }
          }}
          required
          aria-invalid={!!errors.username}
          aria-describedby={errors.username ? "username-error" : undefined}
        />
        {errors.username && (
          <span
            id="username-error"
            role="alert"
            style={{ color: "red", fontSize: "14px" }}
          >
            {errors.username}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="password">Contraseña *</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            // Limpiar error cuando el usuario empiece a escribir
            if (errors.password) {
              setErrors((prev) => ({ ...prev, password: undefined }));
            }
          }}
          required
          aria-invalid={!!errors.password}
          aria-describedby={errors.password ? "password-error" : undefined}
        />
        {errors.password && (
          <span
            id="password-error"
            role="alert"
            style={{ color: "red", fontSize: "14px" }}
          >
            {errors.password}
          </span>
        )}
      </div>

      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
