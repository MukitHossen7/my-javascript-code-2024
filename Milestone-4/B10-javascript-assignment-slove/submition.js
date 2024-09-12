function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }
  let savings = income - expenses;
  let tax = savings * 0.2;
  return tax;
}

function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  let mail = email.split("");
  let index = mail.indexOf("@");
  let userName = mail.slice(0, index).join("");
  let domainName = mail.slice(index + 1).join("");
  if (!userName) {
    return "Invalid Email";
  } else if (!domainName) {
    return "Invalid Email";
  }
  let message = `${userName} sent you an email from ${domainName}`;
  return message;
}

function checkDigitsInName(name) {
  if (!(typeof name === "string")) {
    return "Invalid Input";
  }
  let num = "0123456789";
  for (let words of name) {
    if (num.includes(words)) {
      return true;
    }
  }
  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  } else if (Array.isArray(obj)) {
    return "Invalid Input";
  }

  let parentProfession = 0;
  if (obj.testScore > 50) {
    return "Invalid Input";
  }
  if (obj.schoolGrade > 30) {
    return "Invalid Input";
  }
  if (obj.isFFamily) {
    parentProfession = 20;
  }
  let finalResult = obj.testScore + obj.schoolGrade + parentProfession;
  if (finalResult >= 80) {
    return true;
  }
  return false;
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let length = waitingTimes.length;
  let totalTime = 0;
  for (let times of waitingTimes) {
    totalTime += times;
  }
  let averageInterviewTime = Math.round(totalTime / length);
  let serialNo = serialNumber - 1;
  let interviewPending = serialNo - length;
  if (interviewPending <= 0) {
    return 0;
  }
  let isratWaitingTime = averageInterviewTime * interviewPending;
  return isratWaitingTime;
}
