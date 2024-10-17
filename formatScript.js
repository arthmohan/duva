document.getElementById('exportJSON').addEventListener('click', function() {
    // Retrieve form data from localStorage
    const formData = JSON.parse(localStorage.getItem('formData'));

    // Ensure full data is available in formData
    if (!formData) {
        alert('No form data found. Please fill out the form first.');
        return;
    }

    // Convert form data to JSON string
    const jsonData = JSON.stringify(formData, null, 2);

    // Show the QR code section and download button for JSON
    document.getElementById('qrSection').style.display = 'block';
    document.getElementById('downloadFile').style.display = 'block';

    // Generate the QR code with the full JSON data
    const qr = new QRious({
        element: document.getElementById('qrcode'),
        value: jsonData,  // Pass the full JSON string
        size: 200
    });

    // Set up the download for the JSON file
    const downloadButton = document.getElementById('downloadFile');
    downloadButton.addEventListener('click', function() {
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'medical-info.json';  // Download the JSON file
        a.click();
        URL.revokeObjectURL(url);
    });

    // Set up the download for the QR code
    const downloadQRButton = document.getElementById('downloadQR');
    downloadQRButton.addEventListener('click', function() {
        const qrCanvas = document.getElementById('qrcode');
        const qrURL = qrCanvas.toDataURL('image/png');  // Convert QR to PNG
        const a = document.createElement('a');
        a.href = qrURL;
        a.download = 'medical-info-qr.png';  // Download the QR code
        a.click();
    });
});

// Clear and restart button logic
document.getElementById('clearAndRestart').addEventListener('click', function() {
    localStorage.clear();  // Clear the form data
    window.location.href = 'index.html';  // Redirect back to the form page
});