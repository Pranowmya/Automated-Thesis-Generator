const express = require("express");
const multer = require("multer");
const cors = require("cors");
const { exec } = require("child_process");
const fs = require("fs");
const PDFDocument = require("pdfkit");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
    const filePath = req.file.path;

    exec(`python ../python-service/extract.py ${filePath}`, (err, stdout) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error processing PPT");
        }

        const analysis = {
            score: 80,
            recommendation: "Hold",
            strengths: ["Strong idea", "Good market", "Clear solution"],
            weaknesses: ["No revenue", "Weak team", "No traction"]
        };

        const fileName = "Investment_Report.pdf";
        generatePDF(analysis, fileName);

        res.json({ message: "Report Generated", file: fileName });
    });
});

function generatePDF(data, fileName) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(fileName));

    doc.fontSize(18).text("Investment Thesis Report");

    doc.moveDown();
    doc.text(`Score: ${data.score}`);
    doc.text(`Recommendation: ${data.recommendation}`);

    doc.moveDown();
    doc.text("Strengths:");
    data.strengths.forEach(s => doc.text("- " + s));

    doc.moveDown();
    doc.text("Weaknesses:");
    data.weaknesses.forEach(w => doc.text("- " + w));

    doc.end();
}

app.listen(5000, () => console.log("Server running on port 5000"));
