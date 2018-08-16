export default class ResumeRepository {
  static skills = {
    mathematics: {
      category: "Mathematics",
      list: [
        {
          id: 0,
          name: "Group theory",
          description:
            "Two semesters of classes, one semester of research related to group extensions, specifically on the converse of the splitting lemma."
        },
        {
          id: 1,
          name: "Financial modeling & stochastic calculus",
          description:
            "Experience with Monte Carlo methods for modeling long-term performance of constant-volatility stocks and bonds."
        },
        {
          id: 2,
          name: "Number theory"
        },
        {
          id: 3,
          name: "Multivariate & vector calculus"
        },
        {
          id: 4,
          name: "Linear algebra"
        }
      ]
    },
    development: {
      category: "Software Development",
      list: [
        {
          id: 0,
          name: "Front-end web development",
          description:
            "Experience with Javascript frameworks Aurelia and Vue.js, CSS preprocessers, responsive and mobile-first web design, and design trends and patterns."
        },
        {
          id: 1,
          name: "ASP.NET Core MVC",
          description:
            "Experience using ASP.NET Core MVC and its RESTful Web API to build powerful, computation-heavy, concurrent web applications."
        },
        {
          id: 2,
          name: "Python"
        },
        {
          id: 3,
          name: "Java"
        },
        {
          id: 4,
          name: "iOS development",
          description:
            "Familiarity with iOS development using both Swift and Objective-C."
        },
        {
          id: 5,
          name: "Unity game development",
          description:
            "Familiarity with game development using the Unity game engine with C#. Familiarity with basic 3D modeling."
        }
      ]
    },
    communication: {
      category: "Communication",
      list: [
        {
          id: 0,
          name: "Ability to write clearly and precisely",
          description:
            "Written papers, documentation, long Internet comments that I probably shouldn't have, and mathematical proofs."
        },
        {
          id: 1,
          name: "Intermediate-level French"
        },
        {
          id: 2,
          name: "Novice-level Chinese"
        }
      ]
    },
    engineering: {
      category: "Engineering",
      list: [
        {
          id: 0,
          name: "Software Engineering",
          description:
            "Knowledge of software engineering principles and design patterns, and a passion for clean, fast, maintainable code."
        },
        {
          id: 1,
          name: "Marine Engineering",
          description:
            "Involved member of Virginia Tech SailBOT design team, designed and built autonomous sailboat. Nominally a member of the electrical and computer engineering subteam, helped across subteams designing and building a rigging system, designing a rudder system, scaling sail plans and boat designs, and solving various other engineering problems."
        }
      ]
    }
  };

  static experience = {
    industry: {
      category: "Industry",
      list: [
        {
          id: 0,
          name: "2018 Summer Internship",
          description:
            "8-week software development internship at PIEtech, Inc., creators of the financial planning software MoneyGuidePro. Front and back-end web development with the Aurelia Javascript framework and ASP.NET Core MVC Web API. Created three web applications on a teams of four or five interns, with two or three developers per team."
        }
      ]
    },
    freelance: {
      category: "Freelance",
      list: [
        {
          id: 0,
          name: "Cabell Design Studio",
          description:
            "Developed a professional portofolio website from scratch with jQuery, the Sass preprocesser, and AJAX on a standard LAMP stack (although no MySQL). See projects page for more information."
        }
      ]
    }
  };

  static education = {
    undergraduate: {
      category: "Undergraduate",
      list: [
        {
          id: 0,
          name: "2017-2019 (Planned) Virginia Tech",
          description:
            "Currently working towards a B.S. in mathematics with a minor in computer science. Planned graduation three semesters early."
        }
      ]
    },
    highSchool: {
      category: "High School",
      list: [
        {
          id: 0,
          name:
            "2013-2017 Maggie L. Walker Governor's School for Government and International Studies",
          description:
            "Completed advanced curriculum including classes in multivariate calculus, mathematical proofs, linear algebra, business information technology, and calculus-based physics."
        }
      ]
    }
  };
}
