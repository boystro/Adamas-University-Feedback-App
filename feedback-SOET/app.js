import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js"
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js"

// Removed API keys for security reasons
const firebaseConfig = {
    apiKey: undefined,
    authDomain: undefined,
    projectId: undefined,
    storageBucket: undefined,
    messagingSenderId: undefined,
    appId: undefined,
    measurementId: undefined,
    databaseURL: undefined
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const feedbackForm  = document.getElementById("main-form");

const program = feedbackForm.elements['prog'];
const studentProgQuality = feedbackForm.elements['stu-quality'];
const studentProgExpectations = feedbackForm.elements['stu-expect'];
const studentProgRating = feedbackForm.elements['stu-rate'];

function submitFeedbackForm() {
    set(ref(database, "forceps2022soet/" + program.value + "/" + Math.random()*10**20 + "/"), {
        submitTime: new Date().toString(),
        quality: studentProgQuality.value,
        epxectations: studentProgExpectations.value,
        rating: studentProgRating.value,
    })
    .then(() => {console.log("success");displayFormSuccess();})
    .catch(e => {console.error(e);displayFormFailed();});
}

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitFeedbackForm();
});

const feedbackFormMsg = document.getElementById("form-message")
function displayFormSuccess() {
    studentProgExpectations.value = '';
    studentProgQuality.value = '';
    studentProgRating.value = '';
    
    feedbackFormMsg.classList.add("success");
    feedbackFormMsg.getElementsByTagName('SPAN')[0].innerText = "Feedback Received: ";
    feedbackFormMsg.getElementsByTagName('SPAN')[1].innerText = program.value;
}

function displayFormFailed() {
    feedbackFormMsg.classList.add("failed");
    feedbackFormMsg.getElementsByTagName('SPAN')[0].innerText = "Failed";
    feedbackFormMsg.getElementsByTagName('SPAN')[1].innerText = "Please Try Again";
}

const clubForm = document.getElementById("club-form");

const clubStuName = clubForm.elements['stu-name'];
const clubStuEmail = clubForm.elements['stu-email'];
const clubStuCourse = clubForm.elements['stu-course'];
const clubChoice_1 = clubForm.elements['club-1'];
const clubChocie_2 = clubForm.elements['club-2'];

function submitClubForm() {
    set(ref(database, "forceps2022soet/clubSelection/"  + Math.random()*10**20), {
        name: clubStuName,
        email: clubStuEmail,
        course: clubStuCourse,
        choice1: clubChoice_1,
        choice2: clubChocie_2,
    })
    .then(() => {console.log("success"); clubFormSubmitSuccess();})
    .catch(e => {console.error(e); clubFormSubmitFailed();});
}

clubForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitClubForm();
})

const clubFormMsg = document.getElementById("club-form-message")
function clubFormSubmitSuccess() {
    clubStuName.value = '';
    clubStuEmail.value = '';
    clubStuCourse.value = '';
    clubChoice_1.value = '';
    clubChocie_2.value = '';

    clubFormMsg.classList.add("success");
    clubFormMsg.getElementsByTagName('SPAN')[0].innerText = "Success";
    clubFormMsg.getElementsByTagName('SPAN')[1].innerText = "Club Choice Received";
}

function clubFormSubmitFailed() {
    clubFormMsg.classList.add("failed");
    clubFormMsg.getElementsByTagName('SPAN')[0].innerText = "Failed";
    clubFormMsg.getElementsByTagName('SPAN')[1].innerText = "Please Try Again";
}

const pastFeedbackForm  = document.getElementById("past-main-form");

const pastProgram = pastFeedbackForm.elements['past-prog'];
const pastStudentProgQuality = pastFeedbackForm.elements['past-stu-quality'];
const pastStudentProgExpectations = pastFeedbackForm.elements['past-stu-expect'];
const pastStudentProgRating = pastFeedbackForm.elements['past-stu-rate'];

function pastSubmitFeedbackForm() {
    set(ref(database, "forceps2022/" + pastProgram.value + "/" + Math.random()*10**20 + "/"), {
        submitTime: new Date().toString(),
        quality: pastStudentProgQuality.value,
        epxectations: pastStudentProgExpectations.value,
        rating: pastStudentProgRating.value,
    })
    .then(() => {console.log("success");pastDisplayFormSuccess();})
    .catch(e => {console.error(e);pastDisplayFormFailed();});
}

pastFeedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    pastSubmitFeedbackForm();
});

const pastFeedbackFormMsg = document.getElementById("past-form-message")
function pastDisplayFormSuccess() {
    pastStudentProgExpectations.value = '';
    pastStudentProgQuality.value = '';
    pastStudentProgRating.value = '';
    
    pastFeedbackFormMsg.classList.add("success");
    pastFeedbackFormMsg.getElementsByTagName('SPAN')[0].innerText = "Feedback Received: ";
    pastFeedbackFormMsg.getElementsByTagName('SPAN')[1].innerText = pastProgram.value;
}

function pastDisplayFormFailed() {
    pastFeedbackFormMsg.classList.add("failed");
    pastFeedbackFormMsg.getElementsByTagName('SPAN')[0].innerText = "Failed";
    pastFeedbackFormMsg.getElementsByTagName('SPAN')[1].innerText = "Please Try Again";
}