# 🚀 Automated Investment Thesis Generator

## 📌 Overview
The **Automated Investment Thesis Generator** is a full-stack web application that analyzes startup pitch decks (PPT/PPTX) and generates a structured investment report.

The system extracts textual content from slides, evaluates startups across key business dimensions, and produces a detailed PDF report with scores, insights, strengths, weaknesses, and investment recommendations.

---

## 🎯 Objective
To automate startup pitch deck evaluation using AI-driven analysis and generate a standardized, data-backed investment thesis for investors, analysts, and academic use.

---

## 🚀 Key Features

- 📂 Upload startup pitch decks (PPT/PPTX)
- 🧾 Extract slide content using Python
- 🧠 Analyze startups across 9 evaluation categories
- 📊 Generate structured scoring system
- 📄 Downloadable PDF investment report
- ⚡ Fast and user-friendly workflow

---

## 🧠 Evaluation Categories

The system evaluates pitch decks based on:

1. Problem Statement  
2. Solution / Product  
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
- Weighted scoring model is applied
- Final score is calculated out of **100**
- Generates final investment recommendation:
  - 🟢 Strong Buy
  - 🟡 Hold
  - 🔴 Pass

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js

### 🔹 Backend
- Node.js
- Express.js

### 🔹 Python Service
- python-pptx (PPT/PPTX text extraction)

### 🔹 PDF Generation
- PDFKit / PDFDocument

---

## 🔄 System Workflow

1. User uploads a PPT/PPTX file  
2. Backend receives and stores the file  
3. Python service extracts slide content  
4. Data is processed and analyzed  
5. Scores and insights are generated  
6. PDF report is created  
7. User downloads the final report  

---

## 📄 Output Report Includes

- 📊 Overall Score (0–100)
- 📌 Investment Recommendation
- 📈 Category-wise Scores
- 💡 Strengths & Weaknesses
- 🧭 Actionable Insights
- 📄 Structured PDF Report

---

## 📸 Output Screenshots
### Generated Investment Report
![Upload Screen](assets/screenshot1.png)

---

## 🧪 Testing Instructions

1. Open the frontend in browser  
2. Upload a sample PPT/PPTX file  
3. Click **Upload**  
4. Wait for processing  
5. Download generated PDF report  

---

## ⚠️ Limitations

- Currently uses mock/logic-based analysis  
- UI is basic and can be improved  
- Limited validation and error handling  

---

## 🚀 Future Enhancements

- 🤖 Integrate AI models (OpenAI / LLM APIs)
- 🔐 Add authentication system
- ☁️ Deploy on cloud (AWS / Render / Netlify)
- 📊 Add analytics dashboard
- 🌐 Multi-language support
- 📈 Advanced scoring models with ML

---

## 🎯 Use Cases

- Venture capital investment analysis  
- Startup evaluation platforms  
- Academic project submissions  
- Business research and consulting  

---

## 💡 Key Learning Outcomes

- Full-stack web development (React + Node.js)
- Python integration with backend systems
- File processing and automation
- AI-based structured analysis design
- PDF report generation workflow

---
