// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-assistant-professor-appointment-in-applied-mathematics-amp-amp-statistics-at-johns-hopkins-university",
          title: 'Assistant Professor appointment in Applied Mathematics &amp;amp;amp; Statistics at Johns Hopkins University.',
          description: "",
          section: "News",},{id: "news-co-organizer-of-the-icml-2026-workshop-on-structured-probabilistic-inference-amp-amp-generative-modeling-in-seoul-south-korea-watch-the-recording-here",
          title: 'Co-organizer of the ICML 2026 Workshop on Structured Probabilistic Inference &amp;amp;amp; Generative Modeling...',
          description: "",
          section: "News",},{id: "news-talk-at-the-msr-new-england-generative-modeling-and-sampling-summer-workshop-in-cambridge-ma",
          title: 'Talk at the MSR New England Generative Modeling and Sampling Summer Workshop in...',
          description: "",
          section: "News",},{id: "news-talk-at-the-molecules-in-motion-learning-molecular-ensembles-and-dynamics-from-experiment-workshop-part-of-the-bay-area-light-sources-joint-users-meeting-at-slac-national-accelerator-laboratory",
          title: 'Talk at the Molecules in Motion: Learning Molecular Ensembles and Dynamics from Experiment...',
          description: "",
          section: "News",},{id: "news-talk-at-the-johns-hopkins-university-applied-mathematics-and-statistics-seminar",
          title: 'Talk at the Johns Hopkins University Applied Mathematics and Statistics seminar.',
          description: "",
          section: "News",},{id: "news-talk-at-the-johns-hopkins-university-electrical-and-computer-engineering-ece-seminar",
          title: 'Talk at the Johns Hopkins University Electrical and Computer Engineering (ECE) seminar.',
          description: "",
          section: "News",},{id: "news-talk-at-the-johns-hopkins-university-minds-seminar",
          title: 'Talk at the Johns Hopkins University MINDS seminar.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%77%75%38%36@%6A%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/LuhuanWu", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=j7iGhYUAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/hlws_bot", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
