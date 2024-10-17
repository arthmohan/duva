document.getElementById("medicalForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        history: document.getElementById('history').value
    };

    document.getElementById("exportSection").style.display = "block";

    document.getElementById("exportJSON").addEventListener("click", function () {
        downloadFile(JSON.stringify(formData), 'data.json', 'application/json');
    });

    document.getElementById("exportCSV").addEventListener("click", function () {
        const csvData = `Name,Age,Gender,Medical History\n${formData.name},${formData.age},${formData.gender},${formData.history}`;
        downloadFile(csvData, 'data.csv', 'text/csv');
    });

    generateQRCode(JSON.stringify(formData));
});

function downloadFile(data, filename, type) {
    const file = new Blob([data], { type: type });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function generateQRCode(data) {
    const canvas = document.getElementById("qrcode");
    const qrCode = new QRious({
        element: canvas,
        value: data,
        size: 200
    });
    document.getElementById("qrSection").style.display = "block";

    document.getElementById("downloadQR").addEventListener("click", function () {
        const link = document.createElement("a");
        link.download = 'qrcode.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}