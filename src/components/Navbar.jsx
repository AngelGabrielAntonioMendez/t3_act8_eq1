export const Navbar = ({ user }) => {
  return (
    <header className="navbar">
      <div className="navbar-title">
        <h2>Dashboard</h2>
        <p>Bienvenido de nuevo, {user.firstName} {user.lastName}.</p>
      </div>

      <div className="navbar-actions">
        <div className="search-bar">
          <input type="text" placeholder="Buscar usuarios, productos..." />
        </div>
        
        <div className="user-profile">
          <div className="notification-icon">🔔</div>
          <img src={user.image} alt="Perfil" className="avatar" />
          <div className="user-info">
            <strong>{user.firstName} {user.lastName}</strong>
            <span>Administrador</span>
          </div>
        </div>
      </div>
    </header>
  );
};