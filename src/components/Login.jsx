import { useState } from 'react';

export const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Validaciones de campos vacíos
    const errors = {};
    if (!username.trim()) errors.username = 'El correo o usuario es obligatorio.';
    if (!password.trim()) errors.password = 'La contraseña es obligatoria.';
    
    setValidationErrors(errors);

    // Si hay errores, detenemos la ejecución
    if (Object.keys(errors).length > 0) return;

    // 2. Iniciar petición a la API
    setIsLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // La API devuelve un status 400 si las credenciales fallan
        throw new Error('Usuario o contraseña incorrectos');
      }

      // 3. Si todo es correcto, pasamos los datos del usuario al componente padre
      onLogin(data);
      
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        
        {/* Lado izquierdo: Formulario */}
        <div className="login-form-section">
          <div className="logo-section">
            <span className="logo-icon">PW</span>
            <div className="logo-text">
              <strong>PROGRA WEB</strong>
              <span>Sistema Administrativo</span>
            </div>
          </div>

          <div className="titles">
            <h1>Bienvenido</h1>
            <p>Inicia sesión para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {errorMsg && <div className="error-alert">{errorMsg}</div>}

            <div className="form-group">
              <label htmlFor="username">Correo electrónico o Usuario</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ej: emilys"
                className={validationErrors.username ? 'input-error' : ''}
              />
              {validationErrors.username && <span className="error-text">{validationErrors.username}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ej: emilyspass"
                className={validationErrors.password ? 'input-error' : ''}
              />
              {validationErrors.password && <span className="error-text">{validationErrors.password}</span>}
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Recordarme
              </label>
              <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" disabled={isLoading} className="btn-primary">
              {isLoading ? 'Verificando...' : 'Entrar'}
            </button>
          </form>

          <div className="register-link">
            ¿No tienes una cuenta? <a href="#">Regístrate</a>
          </div>
        </div>

        {/* Lado derecho: Ilustración decorativa (Mockup) */}
        <div className="login-illustration">
           {/* Aquí puedes colocar una imagen de fondo o CSS para simular la tarjeta azul de tu diseño */}
           <div className="illustration-content">
              {/* Representación abstracta del mockup */}
              <div className="mock-card">
                 <div className="mock-line"></div>
                 <div className="mock-chart"></div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};