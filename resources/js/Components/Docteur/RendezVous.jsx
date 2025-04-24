import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from "../Receptionniste/Header";
import SideMenu from './SideMenu';
// import SideBarProgramme from './SideBarProgramme';

const DoctorsProgram = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [rendez_vous, setRendez_vous] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/rendez_vouss')
      .then(response => {
        const data = response.data;
        console.log(response);
        setRendez_vous(data);
  
        const events = data.map(rdv => {
          const cleanDate = rdv.date_RDV.split(' ')[0];
          const cleanTime = rdv.temps_RDV.split('.')[0];
          const fullDateTimeString = `${cleanDate}T${cleanTime}`;
  
          const startDate = new Date(fullDateTimeString);
          const endDate = new Date(startDate.getTime() + 30 * 60000);
  
          return {
            title: `${rdv.type_RDV} - ${rdv.patient_nom} ${rdv.doctor_nom} - ${rdv.statut}` ,
            start: startDate.toISOString(),
            end: endDate.toISOString(),
            type: rdv.type
          };
        });
  
        setEvents(events);
        setFilteredEvents(events);
        const uniqueTypes = Array.from(new Set(events.map(a => a.type)));
        setTypes(uniqueTypes);
      })
      .catch(error => console.error(error));
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
    <div>
      <Header title='Programme' />
      <SideMenu />
    <div className="container-programme">
      
      <div style={{ flexGrow: 1, padding: '20px' }} >

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={filteredEvents}
          locale="fr"
          slotMinTime="08:00:00"
          slotMaxTime="23:00:00"
          height="auto"
        />
      </div>
    </div>
    </div>
  );
};

export default DoctorsProgram;
