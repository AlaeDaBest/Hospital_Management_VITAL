// NotificationComponent.jsx
import React, { useState, useEffect } from "react";
import { Bell, CheckCircle, XCircle, Clock, Calendar, User, Stethoscope } from "lucide-react";

function Notification() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch appointments data from your existing API
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      // Use your existing endpoint
      const response = await fetch('http://127.0.0.1:8000/rendez-vous');
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des rendez-vous');
      }
      
      const data = await response.json();
      setAppointments(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Navigate between appointments
  const nextAppointment = () => {
    if (appointments.length > 0) {
      setCurrentIndex((prevIndex) => 
        prevIndex === appointments.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevAppointment = () => {
    if (appointments.length > 0) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? appointments.length - 1 : prevIndex - 1
      );
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  // Get status icon based on appointment status
  const getStatusIcon = (status) => {
    switch(status?.toLowerCase()) {
      case 'confirmé':
        return <CheckCircle color="#22c55e" size={24} className="status-icon" />;
      case 'annulé':
        return <XCircle color="#ef4444" size={24} className="status-icon" />;
      case 'programmé':
        return <Clock color="#eab308" size={24} className="status-icon" />;
      default:
        return <Clock color="#6366f1" size={24} className="status-icon" />;
    }
  };

  // Get status color based on appointment status
  const getStatusClass = (status) => {
    switch(status?.toLowerCase()) {
      case 'confirmé':
        return 'confirmed';
      case 'annulé':
        return 'cancelled';
      case 'programmé':
        return 'scheduled';
      default:
        return 'default';
    }
  };

  // Get appointment message based on status
  const getStatusMessage = (status) => {
    switch(status?.toLowerCase()) {
      case 'confirmé':
        return 'Le patient a confirmé son rendez-vous.';
      case 'annulé':
        return 'Le rendez-vous a été annulé.';
      case 'programmé':
        return 'Rendez-vous programmé avec le médecin.';
      default:
        return 'Statut du rendez-vous: ' + (status || 'inconnu');
    }
  };

  // Render loading state
  if (loading) {
    return (
      <div className="notification-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          Chargement des rendez-vous...
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="notification-container">
        <div className="error">Erreur: {error}</div>
        <button onClick={fetchAppointments} className="refresh-button">
          Réessayer
        </button>
      </div>
    );
  }

  // Render empty state
  if (appointments.length === 0) {
    return (
      <div className="notification-container">
        <div className="empty">
          <Calendar size={48} color="#9ca3af" />
          <p>Aucun rendez-vous trouvé</p>
        </div>
        <button onClick={fetchAppointments} className="refresh-button">
          Actualiser
        </button>
      </div>
    );
  }

  // Get current appointment
  const currentAppointment = appointments[currentIndex];

  return (
    <div className="notification-container">
      {/* Floating bell with pulse effect */}
      <div className="bell-container">
        <div className="bell-icon pulse">
          <Bell size={32} color="#6366f1" strokeWidth={1.5} />
        </div>
      </div>
      
      <div className="notification-content">
        <h1 className="notification-title">Notification Rendez-vous</h1>
        
        <div className="appointment-count">
          <span className="count-badge">{currentIndex + 1} / {appointments.length}</span>
        </div>
        
        <div className="status-container">
          <div className={`status-box ${getStatusClass(currentAppointment.statut)}`}>
            <div className="status-content">
              {getStatusIcon(currentAppointment.statut)}
              <div className="status-text">
                <p className="status-heading">Rendez-vous {currentAppointment.statut || 'programmé'}</p>
                <p className="status-message">{getStatusMessage(currentAppointment.statut)}</p>
              </div>
            </div>
            
            <div className="appointment-details">
              <div className="detail-item">
                <Calendar size={16} className="detail-icon" />
                <span className="detail-label">Date:</span> 
                <span>{formatDate(currentAppointment.rendez_vous_date)}</span>
              </div>
              <div className="detail-item">
                <Clock size={16} className="detail-icon" />
                <span className="detail-label">Heure:</span> 
                <span>{currentAppointment.rendez_vous_heure}</span>
              </div>
              <div className="detail-item">
                <User size={16} className="detail-icon" />
                <span className="detail-label">Patient:</span> 
                <span>{currentAppointment.patient?.nom || `malak`}</span>
                </div>
              <div className="detail-item">
                <Stethoscope size={16} className="detail-icon" />
                <span className="detail-label">Médecin:</span> 
                <span>{currentAppointment.doctor?.nom || `drpunt`}</span>
                </div>
              <div className="detail-item">
                <span className="detail-label">Type:</span> 
                <span className="type-badge">{currentAppointment.type || 'consultation'}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="navigation-buttons">
          <button onClick={prevAppointment} className="nav-button prev-button">
            &lt; Précédent
          </button>
          <button onClick={nextAppointment} className="nav-button next-button">
            Suivant &gt;
          </button>
        </div>
        
        <button onClick={fetchAppointments} className="refresh-button">
          <span className="refresh-icon">↻</span> Actualiser
        </button>
      </div>
      
      <style jsx>{`
        .notification-container {
          max-width: 450px;
          margin: 32px auto;
          padding: 28px;
          border-radius: 12px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          background-image: linear-gradient(135deg, #eff6ff 0%, #eef2ff 100%);
          position: relative;
          overflow: hidden;
        }
        
        .notification-container::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0) 70%);
          border-radius: 50%;
          z-index: 0;
        }
        
        .bell-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
          position: relative;
        }
        
        .bell-icon {
          position: absolute;
          top: -16px;
          background-color: #ffffff;
          padding: 8px;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .pulse {
          animation: pulse-animation 2s infinite;
        }
        
        @keyframes pulse-animation {
          0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.6); }
          70% { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
          100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
        }
        
        .notification-content {
          text-align: center;
          padding-top: 16px;
          position: relative;
          z-index: 1;
        }
        
        .notification-title {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #1f2937;
          text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5);
        }
        
        .appointment-count {
          margin-bottom: 16px;
        }
        
        .count-badge {
          display: inline-block;
          padding: 4px 12px;
          font-size: 14px;
          color: #6366f1;
          background-color: rgba(99, 102, 241, 0.1);
          border-radius: 9999px;
          font-weight: 500;
        }
        
        .status-container {
          transition: all 0.3s ease-in-out;
          margin-bottom: 20px;
        }
        
        .status-box {
          padding: 18px;
          border-radius: 10px;
          text-align: left;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .status-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .confirmed {
          background-color: #f0fdf4;
          border-left: 4px solid #4ade80;
        }
        
        .cancelled {
          background-color: #fef2f2;
          border-left: 4px solid #f87171;
        }
        
        .scheduled {
          background-color: #fefce8;
          border-left: 4px solid #facc15;
        }
        
        .default {
          background-color: #f3f4f6;
          border-left: 4px solid #9ca3af;
        }
        
        .status-content {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 14px;
          border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
        }
        
        .status-icon {
          margin-right: 12px;
        }
        
        .status-text {
          display: flex;
          flex-direction: column;
        }
        
        .status-heading {
          color: #1f2937;
          font-weight: 600;
          margin: 0;
          font-size: 16px;
        }
        
        .status-message {
          color: #4b5563;
          font-size: 14px;
          margin: 4px 0 0 0;
        }
        
        .appointment-details {
          background-color: rgba(255, 255, 255, 0.5);
          padding: 14px;
          border-radius: 8px;
          font-size: 14px;
        }
        
        .detail-item {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .detail-icon {
          margin-right: 8px;
          opacity: 0.6;
        }
        
        .detail-label {
          font-weight: 500;
          margin-right: 8px;
          color: #4b5563;
          min-width: 65px;
        }
        
        .type-badge {
          display: inline-block;
          padding: 2px 8px;
          background-color: rgba(99, 102, 241, 0.1);
          color: #6366f1;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .navigation-buttons {
          display: flex;
          justify-content: space-between;
          margin: 0 10px;
        }
        
        .nav-button {
          background-color: white;
          border: 1px solid #e5e7eb;
          color: #4b5563;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 500;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
        
        .nav-button:hover {
          background-color: #f9fafb;
          transform: translateY(-1px);
        }
        
        .refresh-button {
          margin-top: 20px;
          background-color: #4f46e5;
          color: white;
          padding: 10px 18px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          box-shadow: 0 2px 4px rgba(79, 70, 229, 0.3);
        }
        
        .refresh-button:hover {
          background-color: #4338ca;
          transform: translateY(-2px);
        }
        
        .refresh-icon {
          display: inline-block;
          margin-right: 6px;
          font-size: 16px;
        }
        
        .loading, .error, .empty {
          padding: 30px;
          text-align: center;
          color: #6b7280;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 200px;
        }
        
        .error {
          color: #ef4444;
        }
        
        .loading-spinner {
          border: 3px solid rgba(99, 102, 241, 0.2);
          border-radius: 50%;
          border-top: 3px solid #6366f1;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
          margin-bottom: 15px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .empty p {
          margin-top: 15px;
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
}

export default Notification;












