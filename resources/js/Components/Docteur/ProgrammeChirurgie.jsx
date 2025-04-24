import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from "../Receptionniste/Header";
import SideMenu from './SideMenu';
import { Link, NavLink } from 'react-router-dom';
import SideBarChirurgie from '../Receptionniste/SideBarChirurgie';

const ChirurgieProgram_M = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [chirurgies, setChirurgies] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/chirurgies')
      .then(response => {
        const data = response.data;
        console.log(response);
        setChirurgies(data);
  
        const events = data.map(c => {
          const cleanDate = c.date.split(' ')[0];
          const cleanTime = c.temps.split('.')[0];
          const fullDateTimeString = `${cleanDate}T${cleanTime}`;
  
          const startDate = new Date(fullDateTimeString);
          const endDate = new Date(startDate.getTime() + 30 * 60000);
  
          return {
            title: `${c.type} - ${c.patient_nom} ${c.doctor_nom} - ${c.statut}` ,
            start: startDate.toISOString(),
            end: endDate.toISOString(),
            type: c.type
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
      <Header title='Chirurgies' />
      <SideMenu />
      {/* <SideBarChirurgie/> */}
      
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

export default ChirurgieProgram_M;
