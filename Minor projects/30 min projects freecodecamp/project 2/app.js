let data = [
  {
    name: "amit",
    age: "34",
  },
  {
    name: "ankit",
    age: "31",
  },
  {
    name: "mino",
    age: "13",
  },
  {
    name: "ayush",
    age: "43",
  },
  {
    name: "mannu",
    age: "63",
  },
  {
    name: "nannu",
    age: "63",
  },
  {
    name: "kanchan",
    age: "56",
  },
  {
    name: "aff",
    age: "45",
  },
  {
    name: "amit",
    age: "34",
  },
  {
    name: "ankit",
    age: "31",
  },
  {
    name: "mino",
    age: "13",
  },
  {
    name: "ayush",
    age: "43",
  },
  {
    name: "mannu",
    age: "63",
  },
  {
    name: "nannu",
    age: "63",
  },
  {
    name: "kanchan",
    age: "56",
  },
  {
    name: "aff",
    age: "45",
  },
  {
    name: "amit",
    age: "34",
  },
  {
    name: "ankit",
    age: "31",
  },
  {
    name: "mino",
    age: "13",
  },
  {
    name: "ayush",
    age: "43",
  },
  {
    name: "mannu",
    age: "63",
  },
  {
    name: "nannu",
    age: "63",
  },
  {
    name: "kanchan",
    age: "56",
  },
  {
    name: "aff",
    age: "45",
  },
];

const info = document.querySelector("#info");

let details = data.map((item) => {
  return "<div>" + item.name + " is " + item.age + " years old " + "</div>";
});

info.innerHTML = details.join("\n");
