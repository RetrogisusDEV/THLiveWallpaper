const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const dateElement = document.getElementById('date');

function updateTime() {
    const now = new Date();
    const timeFormatter = new Intl.DateTimeFormat('es', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    const [hours, minutes] = timeFormatter.format(now).split(':');
    const dateFormatter = new Intl.DateTimeFormat('es', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    hoursElement.textContent = hours
    minutesElement.textContent = minutes
    dateElement.textContent = dateFormatter.format(now);
}

setInterval(updateTime, 1000);
updateTime();