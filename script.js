function setTime() {
    const date = new Date();

    // Day Name
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayNum = date.getDay();
    const dayName = dayNames[dayNum];

    // Hour Calculation
    let hour = date.getHours();
    const amPm = hour < 12 ? 'AM' : 'PM';
    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;

    // Minutes Calculation
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Seconds Calculation
    let seconds = date.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Get Date
    let dateMonthYear = date.toString();
    dateMonthYear = `${dateMonthYear.slice(4, 10)}, ${dateMonthYear.slice(11, 15)}`;


    // console.log(`${hour}:${minutes}:${seconds} ${amPm}  ${dayName} ${dateMonthYear}`);

    document.getElementById('hours').innerText = `${hour}`;
    document.getElementById('minutes').innerText = `${minutes}`;
    document.getElementById('seconds').innerText = `${seconds}`;
    document.getElementById('day').innerText = `${dayName}`;
    document.getElementById('date').innerText = `${dateMonthYear}`;

    setTimeout(setTime, 1000);
}

setTime();
