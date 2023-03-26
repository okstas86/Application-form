const formBuilder = document.querySelector("#form-builder");
const startButton = document.querySelector("#start-button");

const formData = [];

function switchStyles() {
  var element = document.body;
  element.classList.toggle("dark");
}

const elements = [
  {
    label: "Are you a student?",
    type: "select",
    options: [
      { text: "Your choice", value: "choice" },
      { text: "Yes", value: "yes" },
      { text: "No", value: "no" },
    ],
  },
  {
    label: "What do you study?",
    type: "input",
    inputType: "text",
  },
  {
    label: "What is your favorite programming language?",
    type: "select",
    options: [
      { text: "Your choice", value: "choice" },
      { text: "Python", value: "python" },
      { text: "JavaScript", value: "javascript" },
      { text: "Java", value: "java" },
      { text: "C#", value: "csharp" },
      { text: "PHP", value: "php" },
    ],
  },
  {
    label: "How long do you study?",
    type: "select",
    options: [
      { text: "Your choice", value: "choice" },
      { text: "1 year", value: "1" },
      { text: "2 years", value: "2" },
      { text: "3 years", value: "3" },
      { text: "4 years", value: "4" },
      { text: "5+ years", value: "5+" },
    ],
    choices: [
      { text: "Your choice", value: "choice" },
      { text: "Yes", value: "yes" },
      { text: "No", value: "no" },
    ],
  },
  {
    label: " Do you already have a degree?",
    type: "select",
    options: [
      { text: "Your choice", value: "choice" },
      { text: "Yes", value: "yes" },
      { text: "No", value: "no" },
    ],
  },
  {
    label: "Did you repeat a year?",
    type: "select",
    options: [
      { text: "Your choice", value: "choice" },
      { text: "Yes", value: "yes" },
      { text: "No", value: "no" },
    ],
  },
  {
    label: "Whitch sport do you like?",
    type: "select",
    options: [
      { text: "Your choice", value: "choice" },
      { text: "Fitness", value: "fitness" },
      { text: "Football", value: "football" },
      { text: "Basketball", value: "basketball" },
      { text: "Volleyball", value: "volleyball" },
      { text: "Running athletics", value: "running athletics" },
    ],
  },
];
function addElement(index) {
  const element = elements[index];

  const div = document.createElement("div");
  if (index === 3) {
    div.setAttribute("id", "bigDiv");
  }
  const label = document.createTextNode(element.label);
  div.appendChild(label);

  if (element.type === "select") {
    const select = document.createElement("select");
    if (element.options) {
      element.options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.text = option.text;
        select.appendChild(optionElement);
      });
    }

    if (element.choices) {
      const select2 = document.createElement("select");
      element.choices.forEach((option) => {
        const optionElement2 = document.createElement("option");
        optionElement2.value = option.value;
        optionElement2.text = option.text;
        select2.id = "mySecondSelect";
        select2.appendChild(optionElement2);
      });
      div.appendChild(select2);
    }

    select.addEventListener("change", () => {
      formData[index] = select.value;
    });
    div.appendChild(select);
  } else if (element.type === "input") {
    const input = document.createElement("input");
    input.type = element.inputType;
    input.addEventListener("input", () => {
      formData[index] = input.value;
    });
    div.appendChild(input);
  }

  const nextButton = formBuilder.querySelector("button");
  if (nextButton) {
    formBuilder.insertBefore(div, nextButton);
  } else {
    formBuilder.appendChild(div);
  }

  if (index < elements.length - 1) {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    formBuilder.appendChild(nextButton);
    nextButton.addEventListener("click", () => {
      if (formData[index] !== undefined) {
        formBuilder.removeChild(nextButton);
        addElement(index + 1);
      } else {
        alert("Please select an option or enter a value");
      }
    });
  } else {
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    formBuilder.appendChild(submitButton);
    submitButton.addEventListener("click", () => {
      if (formData[index] !== undefined) {
        formBuilder.innerHTML = "";
        const message = document.createElement("div");

        console.log(formData);
      } else {
        alert("Please select an option or enter a value");
      }
    });
  }
}

startButton.addEventListener("click", () => {
  formBuilder.removeChild(startButton);
  addElement(0);
});
