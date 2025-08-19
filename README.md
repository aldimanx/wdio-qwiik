# Sauce demo Qwiik automation project

This project automates native Android app testing using **WebdriverIO** and **Cucumber**

---

## 🧪 Tech Stack

- **WebdriverIO** (v8+)
- **Cucumber BDD**

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/aldimanx/wdio-qwiik.git
cd qwiik-automation
```

### 2. Install Dependencies

```bash
npm install
```

---

## 🧾 Project Structure

```
.
├── app/                   # Contains the .apk file (manually placed)
├── features/              # Cucumber feature files
├── step-definitions/      # Step definitions
├── pageobjects/           # page object models
├── wdio.conf.js           # WebdriverIO config
```

---

## ✅ Run All Tests Locally

```bash
npx wdio run wdio.conf.js
```

### Optional: Run specific test

```bash
npx wdio run wdio.conf.js --spec ./features/file.feature
```

### Optional: Run with specific tags

```bash
TAG=@login npx wdio run wdio.conf.js
```

---

## 📦 Environment Setup (Local)

- Node.js >= 18

---

## 📬 Contact

For questions or contributions, feel free to open an issue or PR.

---
