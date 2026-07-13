import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { DataTable } from './DataTable';

export const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('Productos');

  return (
    <div className="dashboard-layout">
      {}
      <Sidebar 
        onLogout={onLogout} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      <div className="dashboard-main">
        <Navbar user={user} />

        <div className="dashboard-content">
          {}
          {activeTab === 'Productos' && <DataTable />}
          
          {activeTab !== 'Productos' && (
            <div className="welcome-card">
              <h3>Sección de {activeTab}</h3>
              <p>Esta vista es simulada. Ve a la pestaña <strong>Productos</strong> para ver la tabla interactiva de la Fase 3.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};