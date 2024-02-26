//  For the above JSON, iterate over all for loops (for, for in, for of, forEach)
//for of
const resume = {
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    },
    "education": [
      {
        "degree": "Bachelor of Science",
        "major": "Computer Science",
        "university": "University of Anytown",
        "graduation_year": 2015
      },
      {
        "degree": "Master of Science",
        "major": "Data Science",
        "university": "University of Somewhere",
        "graduation_year": 2017
      }
    ],
    "experience": [
      {
        "title": "Software Engineer",
        "company": "Tech Co",
        "start_date": "2017-01-01",
        "end_date": "2020-12-31",
        "responsibilities": [
          "Developed web applications using React.js and Node.js",
          "Collaborated with cross-functional teams to deliver high-quality software products",
          "Participated in code reviews and provided constructive feedback"
        ]
      },
      {
        "title": "Data Scientist",
        "company": "Data Corp",
        "start_date": "2021-01-01",
        "end_date": null,
        "responsibilities": [
          "Performed data analysis and visualization using Python and R",
          "Built machine learning models for predictive analytics",
          "Communicated findings to stakeholders through reports and presentations"
        ]
      }
    ]
  }; 

  for (let [key, value] of Object.entries(resume)) {
    console.log(key + ": " + value);
  }
//output
//name: John Doe
//email: john.doe@example.com
// phone: 123-456-7890
// address: 123 Main Street, Cityville, USA
// summary: Experienced software engineer with a passion for creating efficient and scalable web applications.
// experience: [object Object],[object Object]
// education: [object Object]
// skills: JavaScript,React,Node.js,Python,SQL,Git