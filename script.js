const name = "Abhinav Kayastha";
const personal_email = "mailto:abhinavkayastha04@gmail.com";
const linkedin_profile_link = "https://www.linkedin.com/in/abhinav-kayastha/";
const github_profile_link = "https://github.com/abhinav-kayastha";
const description = "Developing RF Software at Nokia.";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "C/C++", "Javascript"],
  },
  {
    category: "Tools",
    items: ["Git", "Linux", "GitLab CI/CD", "GitHub Copilot", "Cursor"],
  },
  { category: "Technologies", items: ["Docker", "Flask"] },
];

const work_experience = [
  {
    company: "Nokia",
    location: "Oulu, Finland",
    role: "Maintenance Engineer",
    start_date: "September 2025",
    end_date: "Now",
    bullets: [
      "Creating scripts to monitor health of base transceiver stations (BTS).",
      "Developing tailormade applications for telecom operators worldwide.",
      "Maintaining and improving CI/CD pipeline infrastructure.",
    ],
  },
];

const education = [
  {
    school: "Metropolia University of Applied Sciences",
    degree: "Bachelor of Engineering",
    major: "IoT - Embedded Devices",
    start_date: "August 2022",
    end_date: "May 2025",
    bullets: ["Graduated a year early.", "GPA: 4.11"],
  },
];

document.getElementById("email").href = personal_email;
document.getElementById("linkedin").href = linkedin_profile_link;
document.getElementById("github").href = github_profile_link;
document.getElementById("description").textContent = description;

const skill_container = document.getElementById("skills_area");

skills.forEach((skill_group) => {
  // creates h3 tag for each category in skills array and adds them in the div
  const heading = document.createElement("h3");
  heading.textContent = `${skill_group.category}`;
  skill_container.appendChild(heading);

  // create unordered list
  const ul = document.createElement("ul");

  // gets each skill from the items array in each element of the skills array and
  // adds them as an item of a list which goes under its respective category
  skill_group.items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  skill_container.appendChild(ul);
});
