
function loadData() {
  fetch('assets/data.json')
    .then(response => response.json())
    .then(data => {
      const days = data.map(item => item.day);
      const amount = data.map(item => item.amount);
      const dayElements = document.querySelectorAll('.day');
      const levels = document.querySelectorAll('.level');
      const currentDate = new Date();
      const currentDay = currentDate.getDay();

      levels.forEach((level, index) => {
        level.style.height = `${amount[index] * 2}px`;
        
        if ((currentDay) === index+1){
          level.style.backgroundColor = 'var(--active-color)';
        } 
      });

      dayElements.forEach((element, index) => {
        element.textContent = days[index];
      });
    });
}



loadData();


