// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const Programme= ({ medecinId }) => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:8000/api/medecins/${medecinId}/rendez-vous`)
//       .then(res => {
//         const rdvs = res.data.map(rdv => ({
//           title: rdv.description || 'Rendez-vous',
//           start: rdv.date_heure,
//           end: new Date(new Date(rdv.date_heure).getTime() + rdv.duree * 60000)
//         }));
//         setEvents(rdvs);
//       });
//   }, [medecinId]);

//   return (
//     <FullCalendar
//       plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//       initialView="timeGridWeek"
//       events={events}
//       locale="fr"
//     />
//   );
// };

// export default Programme;
