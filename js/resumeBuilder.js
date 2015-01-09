//Main Id Element selectors 
var $header = $('#header'),
    $contact = $('#topContacts'),
    $experience = $('#workExperience'),
    $projects = $('#projects'),
    $education = $('#education'),
    $connect = $('#letsConnect'),
    $footer = $('#footerContacts');


/*
      Building BIO (JSON Object) & Render
*/



bio = {
  "name": "Daniel Pérez Arrieta",
  "role": "Front-End Developer",
  "welcomeMessage": "Don't hesitate, hire me!",
  "contacts": {
    "mobile number": "+34.555-25-34-34",
    "email": "daniel@myemail.com",
    "github": "http://github.com/DanielPerezArrieta",
    "twitter": "http://twitter.com/DanielPerezArrieta",
    "location": "Madrid, Spain"
  },
  "skills": [ 
    "HTML","Javascript","CSS2/3","Programming Skills"
  ],
  "pic": "images/superLopez.jpg",
  render: function(){
    var init = {
      addHeader: function(){
          $header
        .prepend(FormattedHTMLheaderRole)
        .prepend(FormattedHTMLheaderName);
      },
      addContacts: function($elem) {
        for (data in bio.contacts) {
          FormattedHTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%", data);
          FormattedHTMLcontactGeneric = FormattedHTMLcontactGeneric.replace("%data%", bio.contacts[data]);
          $elem.append(FormattedHTMLcontactGeneric);
        }
      },
      addPicAndSkills: function(){
        $header
          .append(FormattedHTMLbioPic)
          .append(FormattedWelcomeMsg)
          .append(HTMLskillsStart);  

        for (data in bio.skills) {
          FormattedHTMLskills = HTMLskills.replace("%data%", bio.skills[data]);
          $header.append(FormattedHTMLskills);
        }
      }
    },
     //Bio and Contact header vars
    FormattedHTMLheaderName = HTMLheaderName.replace("%data%", bio["name"]), 
    FormattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio["role"]),
    FormattedHTMLcontactGeneric,
    FormattedHTMLbioPic = HTMLbioPic.replace("%data%", bio["pic"]),
    FormattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]),
    FormattedHTMLskills;
    
    init.addHeader();
    init.addContacts($contact);
    init.addPicAndSkills();
    //add Contact info at Footer 
    init.addContacts($footer);

  } 

}

/*
      Building Work (JSON Object) & Render
*/

work = {
  "jobs": [
    {
        "employer": "eBit I+D",
        "title": "Training-on-the-job on Data Base Adminitration with Oracle",
        "location": "Palma de Mallorca, Spain",
        "dates worked": "September 2000 - March 2001",
        "description": "The training-on-the-job program was aimed to provide necessary skills on Data Base Administration."
    },
    {
        "employer": "RWTH Aachen University",
        "title": "Scientific Assistant",
        "location": "Aachen, Germany",
        "dates worked": "November 2001 - March 2002",
        "description": "In the framework of the final degree project, I was invited to continue on the research and assist in the research activities of an advanced Mobile Modulation Scheme based on multi-input and multi-output antenna configuration for the development of the Joint Transmission Modulation Scheme."

    },  
    {
        "employer": "Altran",
        "title": "Consultant Engineer",
        "location": "Madrid, Spain",
        "dates worked": "Novembre 2005 - July 2010",
        "description": "In the context of Consultancy Services, the main activities were based on providing technical assistancy for customers as Motorola, Lucent Alcatel, Telefonica I+D and Telefonica International Whole Sales."

    },
    {
        "employer": "Bit|Up.com, Independent Digital Studio",
        "title": "Founder",
        "location": "Madrid, Spain",
        "dates worked": "March 2013 until the time being",
        "description": "Technical leading creativity for web based (http/Restful) technology services."

    },        
  ],
  render: function() {
    
    var FormattedHTMLworkEmployer, FormattedHTMLworkTitle, FormattedHTMLworkDates, FormattedHTMLworkLocation, FormattedHTMLworkDescription,
        $entry,
        init = {
          formatData: function() {
            FormattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[data].employer);
            FormattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[data].title);
            FormattedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs[data].location);
            FormattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.jobs[data]["dates worked"]);
            FormattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs[data].description);            
          },
          renderData: function(){
            $entry.append(FormattedHTMLworkEmployer+FormattedHTMLworkTitle)
              .append(FormattedHTMLworkDates)
              .append(FormattedHTMLworkLocation)
              .append(FormattedHTMLworkDescription);
          },
          createDiv: function() {
            $experience.append(HTMLworkStart);    
            $entry = $experience.find('.work-entry');
          }
        };    


    init.createDiv();
    for (data in work.jobs) {
      //Define right data to be appended to Work Experience
      init.formatData();
      // Append Data to work-entry div
      init.renderData();
    }    
  }
}

/*
      Building Projects (JSON Object) & Render
*/

projects = {
  "projects": [
    {
      "title": "Wordpress Microsite for Education Ministry of Spain",
      "dates worked": "July 2014",
      "description": "In the framework of Iberoamerican relations, the microsite was aimed to strengthen communication and cooperation in the field of museology sciences.",
      "images": ["images/projects/project-1.jpg", "images/projects/project-1-2.jpg"]

    },
    {
      "title": "Altapavina Wordpress Site.",
      "dates worked": "September 2014",
      "description": "Corporative website of Altapavina Vineyards.",
      "images": ["images/projects/project-2.jpg", "images/projects/project-2-2.jpg"]

    },
    {
      "title": "Foods and Wines From Spain",
      "dates worked": "December 2014",
      "description": "CSS Programming Redesign of ICEX (Ministry of investment and Spain Exportations) Foods & Wines From Spain website.",
      "images": ["images/projects/project-3.jpg", "images/projects/project-3-2.jpg"]

    },
  ],
  render: function() {
    var FormattedHTMLprojectTitle, FormattedHTMLprojectDates, FormattedHTMLprojectDescription, FormattedHTMLprojectImage,
        $entry, myProjects = projects.projects,
        init = {
          formatProjects: function() {
            FormattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%",myProjects[data].title);
            FormattedHTMLprojectDates = HTMLprojectDates.replace("%data%",myProjects[data]["dates worked"]);
            FormattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%",myProjects[data].description);
          },
          renderProjects: function(){
            $entry.append(FormattedHTMLprojectTitle)
              .append(FormattedHTMLprojectDates)
              .append(FormattedHTMLprojectDescription);
          },
          startElement: function(){
            $projects.append(HTMLprojectStart); 
            $entry = $projects.find('.project-entry'); 
          },
          formatSkill: function(){
            FormattedHTMLprojectImage = HTMLprojectImage.replace("%data%",myProjects[data]["images"][img]);
          },
          renderSkill: function() {
            $entry.append(FormattedHTMLprojectImage);
          }

        };

      init.startElement();

      for (data in myProjects) {
        // get Data from JSON Object
        init.formatProjects();
        // Append Data into the Projects section
        init.renderProjects();
        //run through array and append images
        for (img in myProjects[data]["images"]){
          //get Image element from array
          init.formatSkill();
          //Append Image to Image placeholder
          init.renderSkill();
        }
      }    
  }

}

/*
      Building Education (JSON Object) & Render
*/

education = {
  "schools": [
    {
      "name": "Balearic Islands University",
      "location": "Palma de Mallorca, Spain",
      "degree": "BSc. in Communications Engineering (3 years Program)",
      "majors": ["Information Technology"],
      "dates attended": "September 1997 - June 2000",
      "url": "http://www.uib.es/"
    },
    {
      "name": "RWTH Aachen University",
      "location": "Aachen, Germany",
      "degree": "MSc. in Communications Engineering (2 years Program)",
      "majors": ["Wireless Communications"],
      "dates attended": "September 2003 - June 2005",
      "url": "http://www.rwth-aachen.de/"
    }
  ],
  "onlineCourses": [
    {
      "title": "HTML and CSS",
      "school": "Code School",
      "dates attended": "September 2013",
      "url": "https://www.codeschool.com/paths/html-css"

    },
    {
      "title": "Git Basics and Advanced",
      "school": "Code School",
      "dates attended": "September 2013",
      "url": "https://www.codeschool.com/paths/git"

    },
    {
      "title": "Javascript",
      "school": "Code School",
      "dates attended": "October 2013",
      "url": "https://www.codeschool.com/paths/javascript"

    },        
    {
      "title": "Front-End Developer Nanodegree",
      "school": "Udacity",
      "dates attended": "November 2014 - now",
      "url": "https://www.udacity.com/course/nd001"

    }       
  ],
  render: function(){
    var FormattedHTMLschoolName, FormattedHTMLschoolDegree, FormattedHTMLschoolDates, FormattedHTMLschoolLocation, FormattedHTMLschoolMajor,
        FormattedHTMLonlineTitle, FormattedHTMLonlineSchool, FormattedHTMLonlineDates, FormattedHTMLonlineURL,
        myEducation = education.schools,
        myOnlineCourses = education.onlineCourses,
        init = {
          addschool: function(){
            for (school in myEducation) {
              //Get Formatted data into corresponding vars
              init.formatSchoolData();
              //Append Data to placeholders
              init.renderSchoolData();
            }            
          },
          formatSchoolData: function(){
            FormattedHTMLschoolName = HTMLschoolName.replace("%data%",myEducation[school].name);
            FormattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%",myEducation[school].degree);
            FormattedHTMLschoolDates= HTMLschoolDates.replace("%data%",myEducation[school]["dates attended"]);
            FormattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%",myEducation[school].location);
            FormattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%",myEducation[school].majors);            
          },
          renderSchoolData: function() {
            $entry.append(FormattedHTMLschoolName+FormattedHTMLschoolDegree)
              .append(FormattedHTMLschoolDates)
              .append(FormattedHTMLschoolLocation)
              .append(FormattedHTMLschoolMajor);            
          },
          startElement: function(){
            $education.append(HTMLschoolStart);
            $entry = $education.find('.education-entry');            
          },
          startOnlineCourses: function(){
            $entry.append(HTMLonlineClasses);
          },
          addOnline: function() {
            for (course in myOnlineCourses) {
              //Format data
              init.formatOnlineData();
              //Append Data to placeholders
              init.renderOnlineData();
            }            
          },
          formatOnlineData: function(){
            FormattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%",myOnlineCourses[course].title);
            FormattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%",myOnlineCourses[course].school);
            FormattedHTMLonlineDates = HTMLonlineDates.replace("%data%",myOnlineCourses[course]["dates attended"]);
            FormattedHTMLonlineURL = HTMLonlineURL.replace("%data%",myOnlineCourses[course].url);            
          },
          renderOnlineData: function() {
            $entry.append(FormattedHTMLonlineTitle+FormattedHTMLonlineSchool)
              .append(FormattedHTMLonlineDates)
              .append(FormattedHTMLonlineURL); 
          }
        };  

    init.startElement(); 
    //add Shool Education
    init.addschool();
    //Online Courses Entry Header Element
    init.startOnlineCourses();
    //add Online Courses Info
    init.addOnline();
  }
}




/* *********** Builder Code ***************/

var $map = $('#mapDiv'),
    addMap = function(){
      $map.append(googleMap);
    };

/**
 * BIO BLOCK
 */

bio.render();

  
//======

/**
 * WORK BLOCK
 */

work.render();

// =================

/**
 * PROJECTS BLOCK
 */

projects.render();

// =================

/**
 * EDUCATION BLOCK
 */

education.render();

// =================

// Add Google Map 
addMap();
