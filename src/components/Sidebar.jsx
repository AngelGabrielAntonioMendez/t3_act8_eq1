export const Sidebar = ({ onLogout, activeTab, setActiveTab }) => {
  const menuItems = ['Dashboard', 'Usuarios', 'Productos', 'Reportes', 'Configuración'];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="logo-icon">PW</span>
        <div className="logo-text">
          <strong>PROGRA WEB</strong>
          <span>Sistema Admin</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item} className={activeTab === item ? 'active' : ''}>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault(); 
                  setActiveTab(item); 
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button onClick={onLogout} className="btn-logout-sidebar">
          Cerrar sesión
          <span>Volver al login</span>
        </button>
      </div>
    </aside>
  );
};