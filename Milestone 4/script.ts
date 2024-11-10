// Select form and output elements
const resumeForm = document.getElementById('resumeform') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

// Select input fields
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const addressInput = document.getElementById('address') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const pictureInput = document.getElementById('picture') as HTMLInputElement;

// Output fields
const displayPicture = document.getElementById('displayPicture') as HTMLImageElement;
const displayName = document.getElementById('displayName') as HTMLHeadingElement;
const displayPhone = document.getElementById('displayPhone') as HTMLParagraphElement;
const displayEmail = document.getElementById('displayEmail') as HTMLParagraphElement;
const displayAddress = document.getElementById('displayAddress') as HTMLParagraphElement;
const displaySkills = document.getElementById('displaySkills') as HTMLParagraphElement;
const displayEducation = document.getElementById('displayEducation') as HTMLParagraphElement;
const displayExperience = document.getElementById('displayExperience') as HTMLParagraphElement;

// Function to update the resume output dynamically
const updateResume = () => {
  // Display picture if uploaded
  if (pictureInput.files && pictureInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      displayPicture.src = e.target?.result as string;
    };
    reader.readAsDataURL(pictureInput.files[0]);
  }

  // Inject form data into resume output fields
  displayName.innerText = nameInput.value;
  displayEmail.innerText = emailInput.value;
  displayPhone.innerText = phoneInput.value;
  displayAddress.innerText = addressInput.value;
  displaySkills.innerText = skillsInput.value;
  displayEducation.innerText = educationInput.value;
  displayExperience.innerText = experienceInput.value;

  // Show the resume output
  resumeOutput.style.display = 'block';
};

// Attach input event listeners to update resume in real-time
[nameInput, emailInput, phoneInput, addressInput, skillsInput, educationInput, pictureInput, experienceInput].forEach(input => {
  input.addEventListener('input', updateResume);
});

// Display resume on form submission (optional)
resumeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  updateResume();
});
