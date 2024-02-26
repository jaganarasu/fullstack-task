//  For the above JSON, iterate over all for loops (for, for in, for of, forEach)
//for method
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

// Iterating over education
resume.education.forEach((edu, index) => {
    console.log("Education " + (index + 1) + ":");
    console.log("Degree: " + edu.degree);
    console.log("Major: " + edu.major);
    console.log("University: " + edu.university);
    console.log("Graduation Year: " + edu.graduation_year);
  });
  
  // Iterating over experience
  resume.experience.forEach((exp, index) => {
    console.log("Experience " + (index + 1) + ":");
    console.log("Title: " + exp.title);
    console.log("Company: " + exp.company);
    console.log("Start Date: " + exp.start_date);
    console.log("End Date: " + (exp.end_date ? exp.end_date : "Present"));
    console.log("Responsibilities:");
    exp.responsibilities.forEach((resp, idx) => {
      console.log("- " + resp);
    });
  });
