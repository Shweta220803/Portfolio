// Sample data for skills and education
const skillsData = ["JavaScript", "HTML", "CSS", "Bootstrap"];
const educationData = [
  { institution: "Government Polytechnic", degree: "Diploma in Computer Science & engineering", year: "2019-2022" },
  { institution: "Dev Bhoomi Uttarakhand University", degree: "B.tech in Computer Science & engineering", year: "2022-2025" }
];

// Function to add skills to the Skills section
function addSkills() {
  const skillsList = document.getElementById("skills-list");
  
  skillsData.forEach(skill => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
  });
}

// Function to add education details to the Education section
function addEducation() {
  const educationList = document.getElementById("education-list");
  
  educationData.forEach(edu => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${edu.institution}</strong>, ${edu.degree}, ${edu.year}`;
    educationList.appendChild(listItem);
  });
}

// Call the functions to populate the sections
addSkills();
addEducation();

window.onload = function() {
    addSkills();
    addEducation();
  };
  