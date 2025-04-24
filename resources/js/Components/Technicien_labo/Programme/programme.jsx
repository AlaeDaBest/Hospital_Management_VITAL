import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Programme = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    axios.get('http://localhost:8000/tech_labo/programme', {
      withCredentials: true 
    })
      .then(res => {
        console.log("Réponse brute:", res.data);

        const analyses = res.data.map(analyse => {
          const cleanDate = analyse.analyse_date.split(' ')[0]; // "2025-04-21"
          const cleanTime = analyse.analyse_heure.split('.')[0]; // "15:39:58"
          const fullDateTimeString = `${cleanDate}T${cleanTime}`;

          console.log("Datetime utilisé:", fullDateTimeString);

          const startDate = new Date(fullDateTimeString);
          const endDate = new Date(startDate.getTime() + 30 * 60000); // 30 minutes après

          return {
            title: `${analyse.type} - ${analyse.patient_nom} - ${analyse.tech_nom}`,
            start: startDate.toISOString(),
            end: endDate.toISOString(),
            type: analyse.type
          };
        });

        console.log("Événements formatés:", analyses);

        setEvents(analyses);
        setFilteredEvents(analyses);

        const uniqueTypes = Array.from(new Set(analyses.map(a => a.type)));
        setTypes(uniqueTypes);
      })
      .catch(err => {
        console.error("Erreur lors du chargement du programme:", err);
      });
  }, []);

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setSelectedType(value);
    if (value === "all") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.type === value));
    }
  };

  return (
    <div className="container-programme">
      <div style={{ flexGrow: 1, padding: '20px' }} >
        <h2 style={{ marginBottom: '20px', color: '#1C4966' }}>Programme du Technicien</h2>

        <div className='select'>
          <label className='select-label'>Groupe par :</label>
          <select className='select-type' value={selectedType} onChange={handleTypeChange}>
            <option value="all">Tous</option>
            <option value="Microbiologie">Microbiologie</option>
            <option value="Biochimie">Biochimie</option>
            <option value="Hématologique">Hématologique</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={filteredEvents}
          locale="fr"
          slotMinTime="08:00:00"
          slotMaxTime="18:00:00"
          height="auto"
        />
      </div>
    </div>
  );
};

export default Programme;
