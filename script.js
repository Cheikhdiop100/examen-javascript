// Fonction pour prévisualiser la photo sélectionnée
function previewPhoto() {
    const file = document.getElementById('photo').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photo = document.getElementById('cv-photo');
            photo.src = e.target.result;
            photo.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

// Fonction pour générer le CV avec les valeurs saisies
function generateCV() {
    document.getElementById('cv-lastname').innerText = document.getElementById('lastname').value;
    document.getElementById('cv-firstname').innerText = document.getElementById('firstname').value;
    document.getElementById('cv-birthdate').innerText = "Date de naissance : " + document.getElementById('birthdate').value;
    document.getElementById('cv-birthplace').innerText = "Lieu de naissance : " + document.getElementById('birthplace').value;
    document.getElementById('cv-email').innerText = document.getElementById('email').value;
    document.getElementById('cv-phone').innerText = document.getElementById('phone').value;
    document.getElementById('cv-job').innerText = document.getElementById('job').value;
    document.getElementById('cv-experience').innerText = document.getElementById('experience').value;
    document.getElementById('cv-skills').innerText = document.getElementById('skills').value;
    document.getElementById('cv-education').innerText = document.getElementById('education').value;
}

// Fonction pour télécharger le CV en PDF
function downloadPDF() {
    const element = document.getElementById('cv-preview');
    html2pdf().from(element).save('Mon_CV.pdf');
}  