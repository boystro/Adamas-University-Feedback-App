const programsButton = document.getElementById("btn-programs");
const clubsButton = document.getElementById("btn-clubs");
const auMapButton = document.getElementById("btn-au-map");

const programSection = document.getElementById("schedule-details");
const feedbackForm = document.getElementById("feedback-details");

const clubsSection = document.getElementById("club-details");
const clubFrom = document.getElementById("club-selection-form");

const auMapSection = document.getElementById("au-map");

programsButton.addEventListener('click', event => {
    event.preventDefault();

    feedbackForm.style.display = programSection.style.display ="flex";
    clubsSection.style.display = clubFrom.style.display = "none";
    auMapSection.style.display = "none";
    
    programsButton.classList.add("selected");
    clubsButton.classList.remove("selected");
    auMapButton.classList.remove("selected");
})

clubsButton.addEventListener('click', event => {
    event.preventDefault();

    feedbackForm.style.display = programSection.style.display ="none";
    clubsSection.style.display = clubFrom.style.display = "flex"
    auMapSection.style.display = "none";

    programsButton.classList.remove("selected");
    clubsButton.classList.add("selected");
    auMapButton.classList.remove("selected");
})

auMapButton.addEventListener('click', event => {
    event.preventDefault();

    feedbackForm.style.display = programSection.style.display ="none";
    clubsSection.style.display = clubFrom.style.display = "none";
    auMapSection.style.display = "flex";

    programsButton.classList.remove("selected");
    clubsButton.classList.remove("selected");
    auMapButton.classList.add("selected");
})

programsButton.classList.toggle("selected");
clubsSection.style.display = clubFrom.style.display = "none";