document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // ----------------------------
    // Download PDF Functionality
    // ----------------------------

    const downloadBtn = document.getElementById('download-pdf');
    const form = document.getElementById('app-form');

    downloadBtn.addEventListener('click', () => {
        // Validate the form before generating PDF
        if (form.checkValidity()) {
            generatePDF();
        } else {
            // If form is invalid, trigger HTML5 validation
            form.reportValidity();
        }
    });

    function generatePDF() {
        // Ensure jsPDF is loaded
        if (typeof window.jspdf === 'undefined') {
            alert('jsPDF library is not loaded.');
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Extract form data
        const fullName = document.getElementById('full-name').value;
        const gender = document.getElementById('gender').value;
        const nationality = document.getElementById('nationality').value;
        const dob = document.getElementById('dob').value;
        const mkoa = document.getElementById('mkoa').value;
        const wilaya = document.getElementById('wilaya').value;
        const kata = document.getElementById('kata').value;
        const kiwango = document.getElementById('kiwango').value;
        const schoolName = document.getElementById('school-name').value;
        const graduatedYear = document.getElementById('graduated-year').value;
        const parentName = document.getElementById('parent-name').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const applicationDate = document.getElementById('application-date').value;

        // Set PDF Title
        doc.setFontSize(18);
        doc.text('Application Form', 105, 20, null, null, 'center');

        // Set starting Y position
        let y = 30;

        // Add form data
        doc.setFontSize(12);
        doc.text(`1. Full Name of Applicant: ${fullName}`, 10, y);
        y += 10;
        doc.text(`2. Gender: ${gender}`, 10, y);
        y += 10;
        doc.text(`3. Nationality: ${nationality}`, 10, y);
        y += 10;
        doc.text(`4. Date of Birth: ${dob}`, 10, y);
        y += 10;
        doc.text(`5. Location:`, 10, y);
        y += 10;
        doc.text(`   - Mkoa: ${mkoa}`, 15, y);
        y += 10;
        doc.text(`   - Wilaya: ${wilaya}`, 15, y);
        y += 10;
        doc.text(`   - Kata: ${kata}`, 15, y);
        y += 10;
        doc.text(`6. Kiwango cha Elimu: ${kiwango}`, 10, y);
        y += 10;
        doc.text(`7. Name of the School You Have Finished: ${schoolName}`, 10, y);
        y += 10;
        doc.text(`8. Graduated Year: ${graduatedYear}`, 10, y);
        y += 10;
        doc.text(`9. Name of the Parent: ${parentName}`, 10, y);
        y += 10;
        doc.text(`10. Email: ${email}`, 10, y);
        y += 10;
        doc.text(`11. Phone Number: ${phoneNumber}`, 10, y);
        y += 10;
        doc.text(`12. Date of Application: ${applicationDate}`, 10, y);
        y += 20;

        // Save the PDF
        doc.save(`${fullName.replace(/\s+/g, '_')}_Application_Form.pdf`);
    }

    // ----------------------------
    // Optional: Handle Form Submission
    // ----------------------------
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // You can handle form submission here (e.g., send data to a server)
        alert('Application submitted successfully!');
        form.reset();
    });
});
document.getElementById('download-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    // Title
    doc.setFontSize(16);
    doc.text("Form ya Chuo Cha Maendeleo ya Wananchi Msingi", 20, 20);
    doc.setFontSize(12);

    // Draw labels without boxes
    const startY = 40;
    const lineHeight = 10;
    const margin = 10;

    // Function to draw a labeled field
    const drawLabeledField = (label, y) => {
        doc.setFontSize(12);
        doc.text(label, 20, y);
        doc.text("__________________________________________________", 20, y + lineHeight);
    };

    // Grouping Fields
    let currentY = startY;

    // Group 1
    drawLabeledField("Full Name of Applicant:", currentY);
    currentY += lineHeight + 10;

    drawLabeledField("Gender:", currentY);
    currentY += lineHeight + 10;

    drawLabeledField("Nationality:", currentY);
    currentY += lineHeight + 10;

    drawLabeledField("Date of Birth:", currentY);
    currentY += lineHeight + 10;

    drawLabeledField("Location (Mkoa, Wilaya, Kata):", currentY);
    currentY += lineHeight + 10;

    // Group 2
    drawLabeledField("Kiwango cha Elimu:", currentY);
    currentY += lineHeight + 10;

    drawLabeledField("Name of the School Finished:", currentY);
    currentY += lineHeight + 10;

    drawLabeledField("Graduated Year:", currentY);
    currentY += lineHeight + 10;

    // Group 3
    drawLabeledField("Name of Parent:", currentY);
    currentY += lineHeight + 10;

    drawLabeledField("Email:", currentY);
    currentY += lineHeight + 10;

    drawLabeledField("Phone Number:", currentY);
    currentY += lineHeight + 10;

    drawLabeledField("Date of Application:", currentY);

    // Save the PDF
    doc.save("Application_Form.pdf");
});


