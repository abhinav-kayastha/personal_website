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
      "Architected and deployed 12 distinct automation scripts and internal tools to monitor health of base transceiver stations (BTS).",
      "Developing tailormade applications for global telecom operators.",
      "Maintaining and improving CI/CD pipeline infrastructure.",
    ],
  },
];

const education = [
  {
    school: "Metropolia University of Applied Sciences",
    degree: "Bachelor of Engineering, Information Technology",
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
  // creates h4 tag for each category in skills array and adds them in the div
  const heading = document.createElement("h4");
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

const work_container = document.getElementById("work_experiences");

work_experience.forEach((work) => {
  const heading = document.createElement("h4");
  heading.textContent = `${work.role} | ${work.company} - ${work.location} (${work.start_date} - ${work.end_date})`;
  work_container.appendChild(heading);

  const ul = document.createElement("ul");

  work.bullets.forEach((bullet_text) => {
    const li = document.createElement("li");
    li.textContent = bullet_text;
    ul.appendChild(li);
  });

  work_container.appendChild(ul);
});

const education_container = document.getElementById("education");

education.forEach((school) => {
  const heading = document.createElement("h4");
  heading.textContent = `${school.degree} (${school.major}) | ${school.school} (${school.start_date} - ${school.end_date})`;
  education_container.appendChild(heading);

  const ul = document.createElement("ul");

  school.bullets.forEach((bullet_text) => {
    const li = document.createElement("li");
    li.textContent = bullet_text;
    ul.appendChild(li);
  });

  education_container.appendChild(ul);
});
