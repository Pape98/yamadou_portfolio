/* 
  Empty string for github link means repo is part of private organization
  And I cannot fork it.
*/

const data = {
  communityGarden: {
    title: 'Community Garden',
    summary:
      'A self-tracking application that lets user track data with a community in visualize data in a qualitative way. ',
    githubLink: '',
    year: '2022 - Present',
    tags: 'iOS,Swift,SwiftUI,SpriteKit,Firebase,React,Redux',
    description: `This application is a work in progress for my master's research. The idea is to create a virrual environment where
                  each member of the community is tracking something different. The environment's changes are directly tied to the user's actions.
                  Is the user making progress? Are they meetings their goals. In our scenario, each user will be growing their own garden with trees
                  and flowers. The growth of their garden is dependent on them getting for example a certain number of steps. The community view is
                  presented not on the user's phone, but on a big ambient display, allowing users to walk by and visualizing the general state of 
                  people which is direct mapping to the general state of the communit garden. My research aims to find ways of qualitative 
                  and metaphorical ways of visualizing data and see the impacts (and maybe the benefits) of tracking as a community.`,
    isTeamProject: false,
    isWorkInProgress: true,
    preview: '',
    images: [],
  },
  forestryBoard: {
    title: 'Community Forest Board Tree Tour',
    summary: `A informational application that updates inhabitants of Aurburn and Lewsiton (ME) about the Community Forest Board and their activities
      and news.`,
    githubLink: '',
    year: '2022 - Present',
    tags: 'React,Redux,Firebase',
    description: `The goal is to create an experience to introduce people to the notable trees of Lewiston and Auburn (virtual tree tour) and create
                  Community Forest Board Website & identity. Features include ablity to add information about trees, virtual tree tour guide
                  leveraging google map, and the ability to add news,events, and activies for the board staff and administrators.`,
    preview: 'https://i.ibb.co/jhQtVh2/virtual-tour.png',
    isTeamProject: true,
    isWorkInProgress: true,
    images: ['https://i.ibb.co/jhQtVh2/virtual-tour.png'],
  },
  qualitativeAnalysisTool: {
    title: 'Qualitative Analysis Tool',
    summary:
      'An academic research tool to search through tagged interview quotes.',
    githubLink: 'https://github.com/Pape98/Qualitative-Analysis-Tool',
    year: '2022',
    tags: 'React,Redux,Firebase,Drive API',
    description: `For my master's research, I had to conduct some user interviews and analyze the data. Analyzing consisted
          adding codes/tags to important quotes in order to generate categories and subsequently themes. The tagging
          process was done using Google Docs by just adding comments to quotes. The next step was to combine all the 
          quotes with similar codes/tags. Instead of manuallay combining the quotes, I extracted all the quotes along
          with their tags from different documenst using the Google Drive API and created this interface to be able 
          to quickly search access quotes with wanted tags.`,
    isTeamProject: false,
    isWorkInProgress: false,
    preview:
      'https://i.ibb.co/SN66bwp/Screen-Shot-2022-05-16-at-9-37-47-AM.png',
    images: [
      'https://i.ibb.co/SN66bwp/Screen-Shot-2022-05-16-at-9-37-47-AM.png',
      'https://i.ibb.co/YtBb79Q/Screen-Shot-2022-05-16-at-9-38-00-AM.png',
      'https://i.ibb.co/MCM44JG/Screen-Shot-2022-05-16-at-9-38-40-AM.png',
    ],
  },
  employeeRelationshipManagement: {
    title: 'Employee Relationship Management Tool',
    summary: 'An employee relationship management tool for managers.',
    githubLink: 'https://github.com/Teogonzalez5/connectus-ui',
    year: '2021',
    tags: 'React,Microsoft Azure,Redux,NodeJS,PostgreSQL',
    description: `This prototype demonstrates the concept of pre 1:1 and post 1:1. Managers get to schedule 
                  meetings with their employees, take notes, and transfer those notes to the following 
                  meetings. Both manager and employee can take personal notes about each other. This prototype
                  was used by a startup (wwww.joinconnectus.com) to present the concept to investors and raise 
                  funds. The startup now over 500 users and has been accepted into accelerator programs.`,
    isTeamProject: true,
    isWorkInProgress: false,
    preview:
      'https://i.ibb.co/nBXw2GW/Screen-Shot-2022-05-15-at-4-57-30-PM.png',
    images: [
      'https://i.ibb.co/pnH5VfG/connectus1.png',
      'https://i.ibb.co/b55ScBz/Screen-Shot-2022-05-15-at-4-55-16-PM.png',
      'https://i.ibb.co/LpHDZk6/Screen-Shot-2022-05-15-at-4-55-49-PM.png',
      'https://i.ibb.co/nBXw2GW/Screen-Shot-2022-05-15-at-4-57-30-PM.png',
      'https://i.ibb.co/bLS7nWf/Screen-Shot-2022-05-15-at-4-54-52-PM.png',
    ],
  },
  itcVox: {
    title: 'ITC Vox',
    summary:
      'A system for Dartmouth College that allows faculty and staff to submit news, events, and announcements.',
    githubLink: '',
    year: '2021',
    tags: 'React,Redux,NodeJS,Ruby on Rails,PostgreSQL',
    description: `Vox is a system for Dartmouth College that allows faculty and staff to submit news,
                  events, and announcements. These submissions are then collated into daily digest emails.
                  Each person receives an email with content targeted just for them, based on their
                  membership to a set of target groups. The Dartmouth Office of Communications is able to
                  log into our system and approve or reject submissions for the Vox Daily, as well as send
                  out rejection emails detailing why the submission was not approved. The Office of
                  Communications can then compile the daily briefing in the order they wish and send Vox
                  out to the Dartmouth community.`,
    isTeamProject: true,
    isWorkInProgress: false,
    preview:
      'https://i.ibb.co/z8NSNdZ/Screen-Shot-2022-05-16-at-9-58-25-AM.png',
    images: [
      'https://i.ibb.co/z8NSNdZ/Screen-Shot-2022-05-16-at-9-58-25-AM.png',
      'https://i.ibb.co/x7w2qxS/Screen-Shot-2022-05-16-at-9-58-00-AM.png',
      'https://i.ibb.co/Z19yn4D/Screen-Shot-2022-05-16-at-9-58-08-AM.png',
    ],
  },
  insectInvasion: {
    title: 'Insect Invasion Model',
    summary:
      'Vox is a system for Dartmouth College that allows faculty and staff to submit news, events, and announcements.',
    githubLink: 'isjdjdi',
    year: '2021',
    tags: 'React,Redux,NodeJS,PostgreSQL',
    description:
      'Fugiat duis dolor minim aute ad anim. Officia deserunt dolore consectetur sint ea pariatur deserunt veniam velit. Minim commodo do irure eu deserunt cupidatat cillum velit eu magna.',
    isTeamProject: true,
    isWorkInProgress: false,
    preview:
      'https://i.ibb.co/85hGJMP/Screen-Shot-2022-05-15-at-5-44-36-PM.png',
    images: [
      'https://i.ibb.co/F4yYyJm/Screen-Shot-2022-05-15-at-5-44-18-PM.png',
      'https://i.ibb.co/85hGJMP/Screen-Shot-2022-05-15-at-5-44-36-PM.png',
      'https://i.ibb.co/bKHHjRr/Screen-Shot-2022-05-15-at-5-44-50-PM.png',
      'https://i.ibb.co/80X5Q5z/Screen-Shot-2022-05-15-at-5-43-58-PM.png',
    ],
  },
  signLanguage: {
    title: 'Sign Language AR',
    summary: 'A virtual reality game to teach non-deaf people sign language.',
    githubLink: '',
    year: '2021',
    tags: 'Virtual Reality,C#,Unity Engine',
    description: `A virtual reality application that teaches sign language through gamification. 
                  Players have the option to sign both letters and words. The player is in a 
                  space scene and a robot serves as the teacher and provides visual feedback. 
                  Moreover, the game also includes an onboarding system and different learning 
                  modules.`,
    isTeamProject: true,
    isWorkInProgress: false,
    preview:
      'https://i.ibb.co/sbKcrQh/Screen-Shot-2022-05-16-at-2-08-46-AM.png',
    images: [
      'https://i.ibb.co/9y3FpJL/Screen-Shot-2022-05-16-at-2-09-35-AM.png',
      'https://i.ibb.co/H7nB7hx/Screen-Shot-2022-05-16-at-2-09-18-AM.png',
      'https://i.ibb.co/sbKcrQh/Screen-Shot-2022-05-16-at-2-08-46-AM.png',
      'https://i.ibb.co/3p5mCTC/Screen-Shot-2022-05-16-at-2-08-38-AM.png',
      'https://i.ibb.co/1K8sgpF/Screen-Shot-2022-05-16-at-2-08-14-AM.png',
    ],
  },
  daliChallenge: {
    title: 'Fake Social Media Platform',
    summary:
      'A social media platform called Dalibook created for the DALI Lab at Dartmouth College.',
    githubLink: 'isjdjdi',
    year: '2020',
    tags: 'NodeJS,Express',
    description: `A social media platformn that is just for DALI members at Darmouth. 
                  This website was created to complete a developer challenege. The 
                  interface design and features mimic facebook. Users can create 
                  posts, view other posts, check other profiles, search for other 
                  DALI members.`,
    isTeamProject: false,
    isWorkInProgress: false,
    preview:
      'https://i.ibb.co/tcKDGqj/Screen-Shot-2022-05-15-at-5-26-26-PM.png',
    images: [
      'https://i.ibb.co/tcKDGqj/Screen-Shot-2022-05-15-at-5-26-26-PM.png',
      'https://i.ibb.co/phYN9zZ/Screen-Shot-2022-05-15-at-5-26-34-PM.png',
      'https://i.ibb.co/hVHn1JT/Screen-Shot-2022-05-15-at-5-26-42-PM.png',
      'https://i.ibb.co/jyRm0sx/Screen-Shot-2022-05-15-at-5-27-21-PM.png',
      'https://i.ibb.co/Kjsrj2D/Screen-Shot-2022-05-15-at-5-27-44-PM.png',
      'https://i.ibb.co/0f7x5ZJ/Screen-Shot-2022-05-15-at-5-26-16-PM.png',
    ],
  },
  careAssist: {
    title: 'CareAssist: Assistive Technology',
    summary:
      'An interface for nursing home caretakers to get live updates of the status of their patients with dementia.',
    githubLink: 'https://github.com/Pape98/CareAssist-Web-Interface',
    year: '2020',
    tags: 'NodeJS,ExpressJS,MongoDB,PassportJS,Here API',
    description: `An interface that allows caretakers to manage their patients. Caretakers can 
                  add personal and health information related to their patients, send reminders 
                  to take medication, and visualize different health metrics through a dashboard. 
                  A geofence is also implemented, sending an alert to the caretaker when a patient 
                  is out of the geofence (tracking done using wearable worn by patient)`,
    isTeamProject: true,
    isWorkInProgress: false,
    preview:
      'https://i.ibb.co/3vzhvnK/Screen-Shot-2022-05-15-at-5-19-22-PM.png',
    images: [
      'https://i.ibb.co/3vzhvnK/Screen-Shot-2022-05-15-at-5-19-22-PM.png',
      'https://i.ibb.co/MhSzZQp/Screen-Shot-2022-05-15-at-5-19-30-PM.png',
      'https://i.ibb.co/85q24bK/Screen-Shot-2022-05-15-at-5-19-40-PM.png',
      'https://i.ibb.co/Gv1TC6K/Screen-Shot-2022-05-15-at-5-19-47-PM.png',
      'https://i.ibb.co/pn0HhHp/Screen-Shot-2022-05-15-at-5-20-00-PM.png',
    ],
  },
  videoTaggingTool: {
    title: 'Video Tagging Tool',
    summary:
      "A tool to categorize, tag with keywords, and add timestamps to math videos for Texas A&M's Math department.",
    githubLink: 'https://github.com/Pape98/TOPS-Video-Tool',
    year: '2019-2020',
    tags: 'Ruby on Rails,MongoDB,Phusion Passenger',
    description: `The department was going through an archive of videos (3000 hours). 
                  This application replaced their previously used spreadsheets and forms and 
                  provided a single repo to both edit and retrieve information.
                  Features include the abiltity to authenticate, add metadata to videos, attach 
                  worksheets and documents to videos, review videos by filling out usability 
                  rubric, and search through videos based on different fields and keywords.`,
    isTeamProject: false,
    isWorkInProgress: false,
    preview:
      'https://i.ibb.co/DV1gYZT/Screen-Shot-2022-05-15-at-5-07-13-PM.png',
    images: [
      'https://i.ibb.co/DV1gYZT/Screen-Shot-2022-05-15-at-5-07-13-PM.png',
      'https://i.ibb.co/vkSNRxz/Screen-Shot-2022-05-15-at-5-07-29-PM.png',
      'https://i.ibb.co/BL9zk37/Screen-Shot-2022-05-15-at-5-07-44-PM.png',
      'https://i.ibb.co/CKJb1Ff/Screen-Shot-2022-05-15-at-5-07-51-PM.png',
    ],
  },
  slide: {
    title: 'Student Organization Management Tool',
    summary:
      'Application that allows student-led organizations to manage day-to-day operations.',
    githubLink: 'https://github.com/Pape98/Slide-Website',
    year: '2017-2018',
    tags: 'NodeJS,ExpressJS,MongoDB,PassportJS',
    description: `Many on-campus college organizations that are led by students conduct day-to-day 
                  activities. Members of are often required to get a certain number of points by 
                  attending social and service events. This application centralizes all of the 
                  tools needed to run the organization. Features include members and staff interface
                  points and appeals review and submission, volunteer sign-up sheets, and many others.`,
    isTeamProject: false,
    isWorkInProgress: false,
    preview:
      'https://i.ibb.co/grgxdP0/Screen-Shot-2022-05-15-at-5-02-43-PM.png',
    images: [
      'https://i.ibb.co/bHr3Wqv/Screen-Shot-2022-05-15-at-5-02-28-PM.png',
      'https://i.ibb.co/grgxdP0/Screen-Shot-2022-05-15-at-5-02-43-PM.png',
      'https://i.ibb.co/k9TnKLY/Screen-Shot-2022-05-15-at-5-03-04-PM.png',
      'https://i.ibb.co/23bQhpd/Screen-Shot-2022-05-15-at-5-02-06-PM.png',
    ],
  },
};

export default data;
