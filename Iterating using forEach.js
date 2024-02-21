

// using forEach loop:


let myResume=
    [
    {
        "name": "KARTHIK P",
        "email": "dhonikarthik1998@gmail.com",
        "phone": 7904460148,
        "degree": "B.Sc Computer",
        "address": "26/D briyant nagar 4th street",
        "postalCode": 628008,
        "city": "Tuticorin",
        "state": "Tamilnadu",
        "country": "India"

    },
    
      {
        "company": "Caterpillar PVT",
        "position": "IT Helpdesk",
        "startDate": "09-09-2021",
        "endDate": "Till today",
        "summary": "I am a hardware engineer  ",
      },
    
  
      {
        "institution": "Kamaraj college of arts and science",
        "department": "computer science",
        "studyType": "fulltime",
        "batch start year": 2016,
        "batch end year": 2019,
        "gpa": 7.5,
      },
    
  
      {
        "name": "javascript",
        "level": "beginner",
      },
    
   
      {
        "language": "Tamil,English",
      },
    
   
      {
        "name": "script writer,Gamer",
      }
]

let output=Object.values(myResume);
output.forEach(function(output) {
    console.log(output);
});