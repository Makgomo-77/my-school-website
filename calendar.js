
document.addEventListener('DOMContentLoaded', function() {
    // Initialize FullCalendar
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },
            events: [
                {
                    title: 'Parent-Teacher Conferences',
                    start: '2023-10-15',
                    allDay: true,
                    backgroundColor: '#28a745',
                    borderColor: '#28a745',
                    display: 'block',
                    extendedProps: {
                        type: 'parent-events',
                        grades: 'all'
                    }
                },
                {
                    title: 'STEM Fair',
                    start: '2023-10-22',
                    allDay: true,
                    backgroundColor: '#17a2b8',
                    borderColor: '#17a2b8',
                    extendedProps: {
                        type: 'academic-events',
                        grades: 'all'
                    }
                },
                {
                    title: 'College Prep Workshop',
                    start: '2023-11-05T18:00:00',
                    end: '2023-11-05T20:00:00',
                    backgroundColor: '#6f42c1',
                    borderColor: '#6f42c1',
                    extendedProps: {
                        type: 'academic-events',
                        grades: 'high'
                    }
                },
                {
                    title: 'Fall Music Concert',
                    start: '2023-11-17T19:00:00',
                    end: '2023-11-17T21:00:00',
                    backgroundColor: '#ffc107',
                    borderColor: '#ffc107',
                    textColor: '#212529',
                    extendedProps: {
                        type: 'arts-events',
                        grades: 'all'
                    }
                },
                {
                    title: 'Thanksgiving Break',
                    start: '2023-11-22',
                    end: '2023-11-24',
                    allDay: true,
                    backgroundColor: '#dc3545',
                    borderColor: '#dc3545',
                    extendedProps: {
                        type: 'holidays',
                        grades: 'all'
                    }
                },
                {
                    title: 'Basketball Game',
                    start: '2023-12-01T16:00:00',
                    end: '2023-12-01T18:00:00',
                    backgroundColor: '#fd7e14',
                    borderColor: '#fd7e14',
                    extendedProps: {
                        type: 'sports-events',
                        grades: 'all'
                    }
                },
                {
                    title: 'Winter Band Performance',
                    start: '2023-12-01T18:30:00',
                    end: '2023-12-01T20:00:00',
                    backgroundColor: '#ffc107',
                    borderColor: '#ffc107',
                    textColor: '#212529',
                    extendedProps: {
                        type: 'arts-events',
                        grades: 'all'
                    }
                },
                {
                    title: 'Winter Break',
                    start: '2023-12-18',
                    end: '2024-01-05',
                    allDay: true,
                    backgroundColor: '#dc3545',
                    borderColor: '#dc3545',
                    extendedProps: {
                        type: 'holidays',
                        grades: 'all'
                    }
                },
                {
                    title: 'Teacher Work Day',
                    start: '2024-01-08',
                    allDay: true,
                    backgroundColor: '#6c757d',
                    borderColor: '#6c757d',
                    extendedProps: {
                        type: 'academic-events',
                        grades: 'all'
                    }
                },
                {
                    title: 'Students Return',
                    start: '2024-01-09',
                    allDay: true,
                    backgroundColor: '#28a745',
                    borderColor: '#28a745',
                    extendedProps: {
                        type: 'academic-events',
                        grades: 'all'
                    }
                },
                {
                    title: 'MLK Day',
                    start: '2024-01-15',
                    allDay: true,
                    backgroundColor: '#dc3545',
                    borderColor: '#dc3545',
                    extendedProps: {
                        type: 'holidays',
                        grades: 'all'
                    }
                },
                {
                    title: 'Mid-Winter Break',
                    start: '2024-02-19',
                    end: '2024-02-23',
                    allDay: true,
                    backgroundColor: '#dc3545',
                    borderColor: '#dc3545',
                    extendedProps: {
                        type: 'holidays',
                        grades: 'all'
                    }
                },
                {
                    title: 'Spring Break',
                    start: '2024-04-01',
                    end: '2024-04-05',
                    allDay: true,
                    backgroundColor: '#dc3545',
                    borderColor: '#dc3545',
                    extendedProps: {
                        type: 'holidays',
                        grades: 'all'
                    }
                },
                {
                    title: 'Memorial Day',
                    start: '2024-05-27',
                    allDay: true,
                    backgroundColor: '#dc3545',
                    borderColor: '#dc3545',
                    extendedProps: {
                        type: 'holidays',
                        grades: 'all'
                    }
                },
                {
                    title: 'Graduation',
                    start: '2024-06-10T18:00:00',
                    end: '2024-06-10T20:00:00',
                    backgroundColor: '#28a745',
                    borderColor: '#28a745',
                    extendedProps: {
                        type: 'academic-events',
                        grades: 'high'
                    }
                }
            ],
            eventClick: function(info) {
                info.jsEvent.preventDefault();
                
                const event = info.event;
                const eventType = event.extendedProps.type;
                const eventGrades = event.extendedProps.grades;
                
                let gradeText = '';
                if (eventGrades === 'elementary') gradeText = 'Elementary School';
                else if (eventGrades === 'middle') gradeText = 'Middle School';
                else if (eventGrades === 'high') gradeText = 'High School';
                else gradeText = 'All Grades';
                
                let typeText = '';
                if (eventType === 'academic-events') typeText = 'Academic Event';
                else if (eventType === 'arts-events') typeText = 'Arts Event';
                else if (eventType === 'sports-events') typeText = 'Sports Event';
                else if (eventType === 'parent-events') typeText = 'Parent Event';
                else if (eventType === 'holidays') typeText = 'Holiday';
                
                let timeText = '';
                if (event.allDay) {
                    timeText = 'All Day';
                } else {
                    timeText = event.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                    if (event.end) {
                        timeText += ' - ' + event.end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                    }
                }
                
                let dateText = '';
                if (event.start) {
                    dateText = event.start.toLocaleDateString([], {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
                }
                
                // Create modal content
                const modalContent = `
                    <div class="modal-header">
                        <h5 class="modal-title">${event.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <p><strong>Date:</strong> ${dateText}</p>
                            </div>
                            <div class="col-md-6">
                                <p><strong>Time:</strong> ${timeText}</p>
                            </div>
                            <div class="col-md-6">
                                <p><strong>Type:</strong> ${typeText}</p>
                            </div>
                            <div class="col-md-6">
                                <p><strong>Grades:</strong> ${gradeText}</p>
                            </div>
                        </div>
                        <p>${event.extendedProps.description || 'More details about this event will be available closer to the date.'}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success">Add to Calendar</button>
                    </div>
                `;
                
                // Create and show modal
                const modal = document.createElement('div');
                modal.className = 'modal fade';
                modal.id = 'eventModal';
                modal.tabIndex = '-1';
                modal.setAttribute('aria-hidden', 'true');
                modal.innerHTML = `
                    <div class="modal-dialog">
                        <div class="modal-content">
                            ${modalContent}
                        </div>
                    </div>
                `;
                
                document.body.appendChild(modal);
                const eventModal = new bootstrap.Modal(modal);
                eventModal.show();
                
                // Remove modal from DOM after it's hidden
                modal.addEventListener('hidden.bs.modal', function() {
                    document.body.removeChild(modal);
                });
            }
        });
        
        calendar.render();
        
        // Filter events based on checkboxes and select
        function filterEvents() {
            const academicChecked = document.getElementById('academic-events').checked;
            const sportsChecked = document.getElementById('sports-events').checked;
            const artsChecked = document.getElementById('arts-events').checked;
            const parentChecked = document.getElementById('parent-events').checked;
            const holidaysChecked = document.getElementById('holidays').checked;
            const gradeLevel = document.getElementById('grade-level-filter').value;
            
            calendar.getEvents().forEach(function(event) {
                const eventType = event.extendedProps.type;
                const eventGrades = event.extendedProps.grades;
                
                let typeVisible = false;
                if ((eventType === 'academic-events' && academicChecked) ||
                    (eventType === 'sports-events' && sportsChecked) ||
                    (eventType === 'arts-events' && artsChecked) ||
                    (eventType === 'parent-events' && parentChecked) ||
                    (eventType === 'holidays' && holidaysChecked)) {
                    typeVisible = true;
                }
                
                let gradeVisible = false;
                if (gradeLevel === 'all' || eventGrades === 'all' || eventGrades === gradeLevel) {
                    gradeVisible = true;
                }
                
                if (typeVisible && gradeVisible) {
                    event.setProp('display', 'auto');
                } else {
                    event.setProp('display', 'none');
                }
            });
        }
        
        // Add event listeners for filters
        document.querySelectorAll('.filters-card input[type="checkbox"]').forEach(function(checkbox) {
            checkbox.addEventListener('change', filterEvents);
        });
        
        document.getElementById('grade-level-filter').addEventListener('change', filterEvents);
    }
});