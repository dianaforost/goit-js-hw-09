import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    differenceInTime(selectedDates[0]);
  },
};

const inputEl = document.querySelector('input#datetime-picker');
const btnStart = document.querySelector('[data-start]');
flatpickr(inputEl, options);
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

btnStart.setAttribute('disabled', true);

let timerId;
let timeDifference = 0;
const currentDate = new Date();

function differenceInTime(selectedDates) {
  if (currentDate > selectedDates) {
    btnStart.setAttribute('disabled', true);
    return Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    btnStart.removeAttribute('disabled');
  }
  timeDifference = selectedDates.getTime() - currentDate;
  timeDifferenceInMs = convertMs(timeDifference);
  updateDate(timeDifferenceInMs);
}

function updateDate(timeDifferenceInMs) {
  days.textContent = timeDifferenceInMs.days;
  hours.textContent = timeDifferenceInMs.hours;
  minutes.textContent = timeDifferenceInMs.minutes;
  seconds.textContent = timeDifferenceInMs.seconds;
}

btnStart.addEventListener('click', startTiming);

function startTiming() {
  btnStart.setAttribute('disabled', true);
  timeDifference -= 1000;
  if (seconds.textContent <= 0 && minutes.textContent <= 0) {
    Notiflix.Notify.success('The end');
    clearInterval(timerId);
  } else {
    timeDifferenceInMs = convertMs(timeDifference);
    updateDate(timeDifferenceInMs);
  }
}

btnStart.addEventListener('click', () => {
  timerId = setInterval(startTiming, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
