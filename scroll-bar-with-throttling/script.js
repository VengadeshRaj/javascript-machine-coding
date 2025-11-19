const RECORDS = [
  { company: "Google", location: "Bangalore", type: "Full-Time" },
  { company: "Amazon", location: "Hyderabad", type: "Contract" },
  { company: "Microsoft", location: "Noida", type: "Full-Time" },
  { company: "TCS", location: "Chennai", type: "Internship" },
  { company: "Infosys", location: "Pune", type: "Full-Time" },
  { company: "Wipro", location: "Bangalore", type: "Contract" },
  { company: "Accenture", location: "Mumbai", type: "Full-Time" },
  { company: "IBM", location: "Hyderabad", type: "Remote" },
  { company: "Oracle", location: "Gurgaon", type: "Full-Time" },
  { company: "HCL", location: "Noida", type: "Internship" },
];

const tableEle = document.getElementById("company-table");

const newRowEle = document.createElement("tr");

function createNewTr() {
  return document.createElement("tr");
}

function createNewTdWithValue(value) {
  const td = document.createElement("td");
  td.innerHTML = value;
  return td;
}

function buildTable() {
  for (let i = 0; i < RECORDS.length; i++) {
    const tr = createNewTr();
    tr.appendChild(createNewTdWithValue([RECORDS[i].company]));
    tr.appendChild(createNewTdWithValue([RECORDS[i].location]));
    tr.appendChild(createNewTdWithValue([RECORDS[i].type]));
    tableEle.appendChild(tr);
  }
}

buildTable();
