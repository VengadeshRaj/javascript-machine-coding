const FAQS = [
  {
    question: "What is this application about?",
    answer:
      "This application helps users manage their tasks efficiently and stay organized.",
  },
  {
    question: "How do I create a new account?",
    answer:
      "Click on the Sign Up button on the top right and fill in your details to register.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use industry-standard encryption and security practices to protect your data.",
  },
  {
    question: "Can I access this on mobile?",
    answer:
      "Yes, the application is fully responsive and works on mobile, tablet, and desktop devices.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "Go to the login page and click on 'Forgot Password', then follow the instructions sent to your email.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with access to all premium features.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact support through the Help section or email us at support@example.com.",
  },
];

const faqField = document.getElementById("faq");

function createFAQ() {
  for (let i = 0; i < FAQS.length; i++) {
    const faqItem = document.createElement("div");
    faqItem.className = "accordian";
    const qus = document.createElement("div");
    qus.className = "question-accordian";
    const accordButton = document.createElement("span");
    accordButton.innerHTML = "+"
    accordButton.className = "accordian-button";
    qus.appendChild(accordButton)
    const ans = document.createElement("div");
    qus.innerHTML = FAQS[i].question;
    ans.innerHTML = FAQS[i].answer;
    faqItem.appendChild(qus);
    faqItem.appendChild(ans);
    faqField.appendChild(faqItem);
  }
}

createFAQ();
