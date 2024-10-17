// Assuming this is the script for your form submission (formScript.js or similar)
document.getElementById('medicalForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        sex: document.getElementById('sex').value,
        bloodGroup: document.getElementById('bloodGroup').value,
        medications: document.getElementById('medications').value,
        chronicConditions: document.getElementById('chronicConditions').value,
        emergencyContactName: document.getElementById('emergencyContactName').value,
        emergencyContactPhone: document.getElementById('emergencyContactPhone').value,
        allergies: document.getElementById('allergies').value
    };

    // Store data in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirect to the format selection page
    window.location.href = 'selectFormat.html';
});