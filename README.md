# 🚀 Automated Investment Thesis Generator

## 📌 Overview
The **Automated Investment Thesis Generator** is a full-stack web application designed to analyze startup pitch decks (PPT/PPTX) and generate a structured investment report.

The system extracts textual content from presentation slides, evaluates the startup across multiple business dimensions, and produces a detailed PDF report including scores, insights, strengths, weaknesses, and investment recommendations.

---

## 🎯 Objective
To automate the evaluation of startup pitch decks using AI-driven analysis and provide a standardized, data-backed investment thesis for investors and analysts.

---

## 🚀 Key Features
- 📂 Upload startup pitch decks (PPT/PPTX)
- 🧾 Extract slide content using Python
- 🧠 Analyze startup across 9 evaluation categories
- 📊 Generate scores and qualitative insights
- 📄 Create downloadable PDF investment report
- ⚡ Fast and simple user workflow

---

## 🧠 Evaluation Categories

The system evaluates pitch decks based on:

1. Problem Statement  
2. Solution/Product  
3. Market Opportunity  
4. Business Model  
5. Competitive Landscape  
6. Team  
7. Traction / Milestones  
8. Financial Projections  
9. Clarity & Presentation  

---

## 📊 Scoring System

- Each category is scored from **0 to 10**
- Weighted scoring system is applied
- Final score is calculated out of **100**

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js

### 🔹 Backend
- Node.js
- Express.js

### 🔹 Python Service
- python-pptx (for extracting text from PPT slides)

### 🔹 PDF Generation
- pdfkit / pdfkit alternative (PDFDocument)
- 

## 🔄 Workflow

1. User uploads a PPT/PPTX file  
2. Backend receives and stores the file  
3. Python service extracts slide text  
4. Extracted data is analyzed (AI or logic-based)  
5. Scores and insights are generated  
6. PDF report is created  
7. User downloads the report  

---

## 📄 Output Report Includes

- ✅ Overall Score (0–100)  
- ✅ Investment Recommendation (Strong Buy / Hold / Pass)  
- ✅ Category-wise Scores  
- ✅ Strengths and Weaknesses  
- ✅ Actionable Recommendations  
- ✅ Structured PDF Format 
---

## 🧪 Testing Instructions

1. Open the frontend in browser  
2. Upload a sample PPT file  
3. Click **Upload**  
4. Wait for processing  
5. Check generated PDF in backend folder  


## ⚠️ Limitations

- Uses mock analysis (can be replaced with real AI)  
- Basic UI design  
- Limited validation and error handling  

---

## 🚀 Future Enhancements

- 🤖 Integrate real AI (OpenAI / Grok API)  
- 🔐 Add authentication system  
- ☁️ Deploy using cloud platforms (AWS, Render, Netlify)  
- 📊 Add dashboard for report history  
- 🌐 Multi-language support  
- 📈 Advanced analytics and scoring improvements  

---

## 🎯 Use Cases

- Startup evaluation by investors  
- Venture capital firms  
- Business analysts  
- Academic and learning projects  

---

## 💡 Key Learning Outcomes

- Full-stack development (React + Node.js)  
- File handling and processing  
- Python integration with backend  
- AI-based text analysis  
- PDF report generation  
