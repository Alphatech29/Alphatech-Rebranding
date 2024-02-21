function createCalendar(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const calendarContainer = document.getElementById('calendar-container');
    calendarContainer.innerHTML = ''; // Clear previous content

    // Create table element
    const table = document.createElement('table');

    // Create header row with day names
    const headerRow = table.insertRow();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let day of daysOfWeek) {
      const th = document.createElement('th');
      th.textContent = day;
      headerRow.appendChild(th);
    }

    // Create days in the month
    let currentDay = 1;
    for (let i = 0; i < 6; i++) {
      const row = table.insertRow();
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          // Empty cells before the first day
          const cell = row.insertCell();
          cell.textContent = '';
        } else if (currentDay > daysInMonth) {
          // Stop adding cells if we've reached the end of the month
          break;
        } else {
          // Create cell with the current day
          const cell = row.insertCell();
          cell.textContent = currentDay;
          currentDay++;
        }
      }
    }

    // Append the table to the container
    calendarContainer.appendChild(table);
  }

  // Example: Display the calendar for the current month
  const currentDate = new Date();
  createCalendar(currentDate.getFullYear(), currentDate.getMonth());