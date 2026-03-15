import PDFDocument from "pdfkit";
import fs from "fs";

export const generatePDF = (data: any) => {
    const doc = new PDFDocument({ margin: 50 });

    const fileName = `${data.firstName}${data.lastName}_${data._id}.pdf`;
    const filePath = `./src/pdfs/${fileName}`; // server file location
    const dbPath = `/pdfs/${fileName}`; // stored in database

    doc.pipe(fs.createWriteStream(filePath));

    // Draw 1pt border around the page
    doc.lineWidth(1)
        .rect(20, 20, doc.page.width - 40, doc.page.height - 40)
        .stroke();

    // Line Spacing
    doc.lineGap(10);

    // Title
    doc.font('Helvetica-Bold').fontSize(25).text('Online Application Form', { align: 'center' });
    doc.moveDown();

    // Personal Information
    doc.font('Helvetica-Bold').fontSize(18).text('Personal Information');

    doc.font('Helvetica-Bold').fontSize(14).text('First Name: ', { continued: true });
    doc.font('Helvetica').text(data.firstName);

    doc.font('Helvetica-Bold').fontSize(14).text('Last Name: ', { continued: true });
    doc.font('Helvetica').text(data.lastName);

    doc.font('Helvetica-Bold').fontSize(14).text('DOB: ', { continued: true });
    doc.font('Helvetica').text(String(data.dob));

    doc.font('Helvetica-Bold').fontSize(14).text('Age: ', { continued: true });
    doc.font('Helvetica').text(String(data.age));

    doc.font('Helvetica-Bold').fontSize(14).text('Gender: ', { continued: true });
    doc.font('Helvetica').text(String(data.gender));

    doc.font('Helvetica-Bold').fontSize(14).text('Email: ', { continued: true });
    doc.font('Helvetica').text(data.email);

    doc.font('Helvetica-Bold').fontSize(14).text('Phone: ', { continued: true });
    doc.font('Helvetica').text(data.phone);

    doc.font('Helvetica-Bold').fontSize(14).text('Address: ', { continued: true });
    doc.font('Helvetica').text(data.address);

    doc.moveDown();

    // Education Details
    doc.font('Helvetica-Bold').fontSize(18).text('Education Details');

    doc.font('Helvetica-Bold').fontSize(14).text('School Name: ', { continued: true });
    doc.font('Helvetica').text(data.schoolName);


    doc.font('Helvetica-Bold').fontSize(14).text('Passed Year: ', { continued: true });
    doc.font('Helvetica').text(String(data.passedYear));

    doc.font('Helvetica-Bold').fontSize(14).text('GPA: ', { continued: true });
    doc.font('Helvetica').text(data.gpa);

    doc.moveDown();

    // Application Details
    doc.font('Helvetica-Bold').fontSize(18).text('Application Details');

    doc.font('Helvetica-Bold').fontSize(14).text('Applied For: ', { continued: true });
    doc.font('Helvetica').text(data.appliedFor);

    doc.font('Helvetica-Bold').fontSize(14).text('Application ID: ', { continued: true });
    doc.font('Helvetica').text(data._id);

    doc.font('Helvetica-Bold').fontSize(14).text('Applied Date: ', { continued: true });
    doc.font('Helvetica').text(data.createdAt);

    doc.moveDown(2);

    // Signature
    doc.font('Helvetica').fontSize(12).text('_____________________', { align: 'left' });
    doc.font('Helvetica').fontSize(11).text("Applicant's Signature", { align: 'left' });

    doc.end();

    return dbPath;
};