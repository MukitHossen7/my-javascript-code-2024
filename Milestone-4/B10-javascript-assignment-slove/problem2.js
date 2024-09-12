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
// console.log(sendNotification("zihad hossen @ gmail.com"));
console.log(sendNotification("zihad@gmail.com"));
// console.log(sendNotification("farhan34@yahoo.com"));
// console.log(sendNotification("nadim.naem5@outlook.com"));
// console.log(sendNotification("fahim234.hotmail.com"));
// console.log(sendNotification("fahim234.hotmail.com"));
// console.log(sendNotification("sadia8icloud.com"));
// console.log(sendNotification("sadia8icloud.com"));
// console.log(sendNotification("@gmail.com"));
// console.log(sendNotification("zihad"));
