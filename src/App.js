import './App.css';
const contact = [
  { id: "1", name: "LI Ka Kin Keith", mobile: "68958166", email: "keithli026@gmail.com" }
];

const workExperience = [
  {
    id: "1",
    position: "Frontend web developer",
    company: "Pantarei Designed Limited",
    year: "Aug 2021 - present",
    description: [
      { detail: "Assisted system design, performed implementation, development, testing and problem diagnosis of web-based application", id: "d1"},
      { detail: "Enhanced system development and provided on-going maintenance support", id: "d2"},
      { detail: "Proposed workable ideas and approaches to solve business and technical problems", id: "d3"},
      { detail: "Worked with project team for project launch and deployment", id: "d4"}
    ]
  },
  {
    id: "2",
    position: "E-commerce Assistant",
    company: "Hap Hoi Leung Technology (Shenzhen) Co., LTD, Shenzhen",
    year: "May 2019 - Mar 2020",
    description: [
      { detail: "Optimized titles and content of products to increase exposure", id: "d1"},
      { detail: "Analyzed market trends and post-launch data on weekly basis", id: "d2"},
      { detail: "Executed marketing and promotional strategies on Taobao and Amazon", id: "d3"},
      { detail: "Monitored stock level and arranged stock replenishment", id: "d4"},
      { detail: "Communicated with manufacturers and distributors to ensure smooth logistic", id: "d5"}
    ]
  },
  {
    id: "3",
    position: "Operations Assistant",
    company: "HK Kong Wai Trading Co., Hong Kong",
    year: "Oct 2014 - Sep 2017",
    description: [
      { detail: "Provided administrative support and performed general merchandising duties", id: "d1"},
      { detail: "Followed up on purchase orders with customers and vendors and handled inquiries", id: "d2"},
      { detail: "Facilitated client invoicing and collected payments in company financial system", id: "d3"},
      { detail: "Assisted in product design and quality control as assigned by manager", id: "d4"},
      { detail: "Ensured all service work and records are up to date and documented", id: "d5"}
    ]
  },
];

const education = [
  { id: "1", year: "2011 - 2014", university: "City University of Hong Kong", major: "BEng (Hons) in Information Engineering" }
];

const skill = [
  { id: "1", progamming: "C, Java, HTML5, CSS3, JavaScript, jQuery, SQL, PHP", framework: "React, Angular, Ionic 5, Drupal 9, Bootstrap 5, Gitlab" }
];

const language = "Native in Cantonese, Good in English and Mandarin";

function Header1() {
  const contactInfo = contact.map(item => {
    return (
      <div className="contacts" key={ item.id }>
        <h1>{item.name}</h1>
        <div>
          <p>{item.mobile}</p>
          <p>{item.email}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      {contactInfo}
    </>
  );
}

function MainContent() {
  return (
    <>
      <h2>Work Experience</h2>
      {workExperience.map(el => {
        return (
          <div className="experience" key={el.id}>
            <div>
              <p>{el.position}</p>
              <p>{el.year}</p>
            </div>
            <p>{el.company}</p>
            <ul>
              {el.description.map(element => {
                return (
                  <li key={element.id}>{element.detail}</li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <h2>Education</h2>
      {education.map(el => {
        return (
          <div className="education" key={el.id}>
              <div><p>{el.year}</p></div>
              <div>
                <p>{el.university}</p>
                <p>{el.major}</p>
              </div>
          </div>
        );
      })}

      <h2>Technical Skills</h2>
      {skill.map(el => {
        return (
          <div className="skills" key={el.id}>
            <p>{el.progamming}</p>
            <p>{el.framework}</p>
          </div>
        );
      })}

      <h2>Languages</h2>
      <p>{language}</p>
    </>
  );
}
function App() {
  return (
    <>
      <Header1 />
      <MainContent />
    </>
  );
}

export default App;
