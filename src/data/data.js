
const data = {
  profile: {
    year: (new Date()).getFullYear(),
    name: 'Bertrand Choubert',
    headline: 'Hi! I\'m Bertrand Choubert, a Web Developer that felt in love with UI Design.',
    icon: 'icon icon-bc-logo',
    resume: `Design, development, management and organization, that is my definition of IT.

        By nature, I have perseverance, and I'm rigorous, enthusiastic, never fully satisfied, and always listening. I began web development at 12, which is now my preferred field. I am currently a French CS Engineer. I'm trained to develop innovative websites in modern languages. I train myself with a lot of online trainings, because Front-End technologies change every day.
    
        Passionate about IT, but also aeronautics and music creation, I am interested in innovation in multiple fields, which permits me to learn new things about them!`
  },
  tongues: [
    {
      title: 'French',
      flag: {
        w400: '/resources/img/flags/fr.png',
        w150: '/resources/img/flags/fr-sm.png'
      },
      level: 'Mother Tongue',
      certificates: [
        {
          title: 'Voltaire Orthographic Certification',
          link: 'https://drive.google.com/file/d/1Ur4Gmb3nP9a78w-Z4TGqgM461qhKSm2P/view?usp=sharing'
        }
      ]
    },
    {
      title: 'English',
      flag: {
        w400: '/resources/img/flags/en.png',
        w150: '/resources/img/flags/en-sm.png'
      },
      level: 'Full & Professional Proficiency',
      certificates: [
        {
          title: 'EFSET 73/100 - C2',
          link: 'https://drive.google.com/file/d/1XZNhu7j6w2Zok4WMqduOZywACJnZQN0m/view?usp=sharing'
        },
        {
          title: 'TOEIC 910/990',
          link: 'https://drive.google.com/file/d/1hAQzvt0h7vlE46HwbbIOny4TqTfqa1wK/view?usp=sharing'
        },
        {
          title: 'EF Level 13',
          link: 'https://drive.google.com/file/d/1oNL7U_cy3RXjx1PWWCyGD5IDHHKxfP-3/view?usp=sharing'
        },
        {
          title: 'TOEIC 820/990',
          link: 'https://drive.google.com/file/d/1b_uV3kucK7HVcc5eGZ-Oubrp1OE5sUpN/view?usp=sharing'
        }
      ]
    },
    {
      title: 'Italian',
      flag: {
        w400: '/resources/img/flags/it.png',
        w150: '/resources/img/flags/it-sm.png'
      },
      level: 'Low Proficiency',
      certificates: [

      ]
    }
  ],
  certifications: [
    {
      color: '#F5CD0E',
      icon: 'icon icon-qwiklabs-logo',
      organism: 'Qwiklabs / Google',
      title: 'AWS & GCP trainings',
      links: [
        {
          title: 'Profile',
          link: 'https://www.qwiklabs.com/public_profiles/476a6209-8ca5-4262-8458-7e0885bd45bd'
        },
        {
          title: 'Certificates',
          link: 'https://drive.google.com/drive/folders/1PPYLSIuWmdaNvSQJjl-6CWWj58lRML28?usp=sharing'
        }
      ]
    },
    {
      color: '#4CAF50',
      icon: 'icon icon-google-logo',
      organism: 'Google',
      title: 'Digital Active',
      links: [
        {
          title: 'Certificate',
          link: 'https://drive.google.com/drive/folders/1xSwFfMiSSnX22DUM402W-4FgpFuGvOU3?usp=sharing'
        }
      ]
    },
    {
      color: '#004079',
      icon: 'icon icon-cci-logo',
      organism: 'CCI Lyon',
      title: 'Pass Entrepreneurs',
      links: [
        {
          title: 'Certificate',
          link: 'https://drive.google.com/drive/folders/1y35uXZixQ9xrrQM-ZjGw9tcYmJAYkjsU?usp=sharing'
        }
      ]
    },
    {
      color: '#F7C948',
      icon: 'icon icon-livementor-logo-alt',
      organism: 'LiveMentor',
      title: 'Digital Marketing',
      links: [
        {
          title: 'Certificate',
          link: 'https://drive.google.com/drive/folders/1R9HH5Et_4jIJ98Q0zcg75WSie24Wd4qX?usp=sharing'
        }
      ]
    },
    {
      color: '#FE541C',
      icon: 'icon icon-socialmediapro-logo',
      organism: 'Social Media Pro',
      title: 'Digital Marketing & SEO',
      links: [
        {
          title: 'Certificates',
          link: 'https://drive.google.com/drive/folders/1bpVlewdqh87u4aKWs74PBzN_lslkdqy5?usp=sharing'
        }
      ]
    },
    {
      color: '#F86201',
      icon: 'icon icon-scrimba-logo',
      organism: 'Scrimba',
      links: [
        {
          title: 'Profile',
          link: 'https://scrimba.com/@bchoubert'
        },
        {
          title: 'Certificates',
          link: 'https://drive.google.com/drive/folders/1L0plRWEL-PpzOxKVEtpNukSBOTpfCo_W?usp=sharing'
        }
      ]
    },
    {
      color: '#007BB6',
      icon: 'icon icon-linkedin-logo-alt',
      organism: 'LinkedIn Learning',
      links: [
        {
          title: 'Certificates',
          link: 'https://drive.google.com/drive/folders/1pjFIIzllf1ro9b6v7D4lQXFWmnZkev2L?usp=sharing'
        }
      ]
    },
    {
      color: '#03EF62',
      icon: 'icon icon-datacamp-logo-alt',
      organism: 'Datacamp',
      title: 'Data Processing and Analysis',
      links: [
        {
          title: 'Profile',
          link: 'https://www.datacamp.com/profile/bertrandchoubert'
        },
        {
          title: 'Certificates',
          link: 'https://drive.google.com/drive/folders/1kdBbB71BPi1eYixwVytnZ_sKvHWFZn7F?usp=sharing'
        }
      ]
    },
    {
      color: '#0072C5',
      icon: 'icon icon-microsoft-logo',
      organism: 'Microsoft Learn / MVA',
      links: [
        {
          title: 'Certificates',
          link: 'https://drive.google.com/drive/folders/17toZKTa4WfvNNjPT8R6212xe7O6tR_zZ?usp=sharing'
        },
        {
          title: 'Transcript',
          link: 'https://drive.google.com/file/d/0B3eUGKZH1aIyZURaZDZHbnpLRG8/view?usp=sharing'
        }
      ]
    },
  ],
  education: [
    {
      color: '#4CAF50',
      icon: 'icon icon-google-logo',
      school: 'Google',
      title: 'Mobile Web Specialist',
      description: 'A high-end Front-End web certification, on Performance, Accessibility, advanced Responsiveness and Progressive Web Apps.',
      location: 'Remote',
      dates: {
        start: 'Nov 2019',
        end: 'Feb 2020',
        yEnd: '2020'
      },
      details: {
        skills: [
          {
            title: 'Tech Skills',
            list: ['Accessibility', 'Progressive Web Apps', 'Responsive', 'Indexed DB', 'Touch Events', 'Networking', 'Web Workers', 'Performance']
          }
        ]
      },
      links: [
        {
          title: 'Diploma',
          link: 'https://drive.google.com/file/d/1oSoY2nFzWHXAZvr8kE2oQLFW192TQUkK/view?usp=sharing'
        },
        {
          title: 'Program',
          link: 'https://developers.google.com/certification/mobile-web-specialist'
        }
      ]
    },
    {
      color: '#A41034',
      icon: 'icon icon-harvardx-logo',
      school: 'Harvard University (via edX)',
      title: 'CS For Web Programing',
      description: 'A complete 6-month technical program on complex algorithms and advanced functionalities for Website Development',
      location: 'Remote',
      dates: {
        start: 'July 2017',
        end: 'Feb 2020 (6m)',
        yEnd: '2020'
      },
      details: {
        skills: [
          {
            title: 'Tech Skills',
            list: ['Image Processing', 'Complex Algorithms', 'Data Structures', 'Web Projects', 'Socket communication', 'APIs']
          }
        ]
      },
      links: [
        {
          title: 'Diploma',
          link: 'https://drive.google.com/file/d/1ei08RGS6lUkVjfRHpkoXT4KMFjIMzFmL/view?usp=sharing'
        },
        {
          title: 'Program',
          link: 'https://www.edx.org/professional-certificate/harvardx-computer-science-for-web-programming'
        }
      ]
    },
    {
      color: '#009EE2',
      icon: 'icon icon-polytech-logo',
      school: 'Polytech Lyon',
      title: 'CS Engineer - Master\'s Degree',
      description: 'A French CS Engineer degree which brings all involved tech skills.',
      location: 'Lyon, FR',
      dates: {
        start: 'Sept 2014',
        end: 'Dec 2017',
        yEnd: '2017'
      },
      details: {
        skills: [
          {
            title: 'Tech Skills',
            list: ['Machine Learning', 'Big Data', 'Web-Marketing', 'Object-oriented Programming', 'Rest APIs', 'Business Intelligence', 'Advanced Software Development', 'Signal Processing', 'Embedded Systems', 'Automation', 'Algorithms']
          },
          {
            title: 'Core Skills',
            list: ['Innovation', 'Project Management', 'Entrepreneurship', 'Communication', 'Quality']
          }
        ]
      },
      links: [
        {
          title: 'Diploma',
          link: 'https://drive.google.com/file/d/1xtERX4ik6_ahox2k9b3MM12z0NyKUTQC/view?usp=sharing'
        },
        {
          title: 'Program',
          link: 'https://polytech.univ-lyon1.fr/programs/computer-science/standard/standard-computer-engineering-curriculum-793066.kjsp?RH=1314882364257'
        }
      ]
    },
    {
      color: '#FE8800',
      icon: 'icon icon-universitelyon-logo',
      school: 'IUT Lyon 1',
      title: 'CS Analyst & Developer',
      description: 'A 2-year University CS degree on complex algorithms and software and web development.',
      location: 'Bourg-en-Bresse, FR',
      dates: {
        start: 'Sept 2012',
        end: 'June 2014',
        yEnd: '2014'
      },
      details: {
        skills: [
          {
            title: 'Tech Skills',
            list: ['Software Development', 'API  Protocols', 'Concurrency', 'Systems', 'Algorithms']
          },
          {
            title: 'Core Skills',
            list: ['Company Organization', 'Communication', 'Project Management']
          }
        ]
      },
      links: [
        {
          title: 'Diploma',
          link: 'https://drive.google.com/file/d/1pk2U4MfifD7AWepUgSYFrQ-X4K89qSy0/view?usp=sharing'
        },
        {
          title: 'Program (FR)',
          link: 'https://iut.univ-lyon1.fr/formation/offre-de-formations/informatique-bourg-en-bresse-/dut-informatique-602485.kjsp?RH=1432020913745'
        }
      ]
    }
  ],
  experience: [
    {
      color: '#FFBF00',
      lighten: '#FFDD76',
      darken: '#FFC414',
      icon: 'icon icon-amalia-logo-alt',
      company: 'Amalia',
      title: 'Web Developer',
      location: 'Lille, FR and Remote',
      contract: 'Long-Term',
      dates: {
        start: 'Sept 2020',
        end: 'Current',
        yEnd: 'Current'
      },
      projects: [
        {
          name: 'Amalia.io',
          icon: 'icon icon-amalia-logo',
          description: 'Real-time sales performance management software'
        }
      ],
      tasks: [
        'Setuped and improved E2E, unit and component testing processes',
        'Developped reusable and standardized complex components',
        'Enhanced performance using Redux, custom hooks and best practices',
        'Participated in UI/UX reviews and technical design',
        'Increased code quality, to provide better maintenance and security'
      ],
      mainTechnologies: [
        {
          icon: 'icon icon-javascript-logo-alt',
          title: 'NodeJS / NestJS'
        },
        {
          icon: 'icon icon-react-logo',
          title: 'React'
        },
        {
          icon: 'icon icon-redux-logo',
          title: 'Redux'
        },
        {
          icon: 'icon icon-postgre-logo',
          title: 'PostgreSQL'
        },
        {
          icon: 'icon icon-typescript-logo',
          title: 'TypeScript'
        },
        {
          icon: 'icon icon-cypress-logo-alt',
          title: 'Cypress'
        },
        {
          icon: 'icon icon-mathjs-full',
          title: 'MathJS'
        }
      ],
      otherTechnologies: []
    },
    {
      color: '#113885',
      lighten: '#1d5edf',
      darken: '#05122b',
      icon: 'icon icon-logtrack-logo',
      company: 'Independent',
      title: 'Web Developer',
      location: 'Remote',
      contract: '',
      dates: {
        start: 'Mar 2019',
        end: 'Current',
        yEnd: 'Current'
      },
      projects: [
        {
          name: 'LogTrack.app',
          icon: 'icon icon-logtrack-logo',
          description: 'Complete Saas Logistics ERP: GPS Tracking, invoices, recruitment, maintenance...'
        }
      ],
      tasks: [
        'Branding & Identity Guide',
        'Front-End Architecture',
        'Implemented Back-End features with Firebase',
        'Secured user\'s data with Firebase Rules',
        'Written specifications',
        'Bought and configured domain name, deployed to Firebase Hosting',
        'Developed Real-Time, Right Management, Role-based, Settings functionalities'
      ],
      mainTechnologies: [
        {
          icon: 'icon icon-firebase-logo-alt',
          title: 'Firebase'
        },
        {
          icon: 'icon icon-postgre-logo',
          title: 'PostgreSQL'
        },
        {
          icon: 'icon icon-react-logo',
          title: 'React'
        },
        {
          icon: 'icon icon-openlayers-logo',
          title: 'OpenLayers'
        },
        {
          icon: 'icon icon-sass-logo',
          title: 'Sass'
        },
        {
          icon: 'icon icon-adonis-logo',
          title: 'Adonis'
        },
        {
          icon: 'icon icon-docker-logo-alt',
          title: 'Docker'
        }
      ],
      otherTechnologies: []
    },
    {
      color: '#FF2222',
      lighten: '#ff8888',
      darken: '#bb0000',
      icon: 'icon icon-tc-gannay-logo',
      company: 'TC Gannay',
      title: 'Graphic & UI Designer',
      location: 'Remote',
      contract: 'Freelance',
      dates: {
        start: 'Apr 2019',
        end: 'July 2019',
        yEnd: 2019
      },
      projects: [
        {
          name: 'Logo & Color Scheme Creation',
          icon: 'icon icon-tc-gannay-logo',
          description: 'New logo for this sportive association'
        },
        {
          name: 'Website prototype',
          icon: 'icon icon-tc-gannay-full',
          description: ''
        }
      ],
      tasks: [
        'Designed a simple color scheme',
        'Proposed a dozen of logos',
        'Created numerous variants of the chosen logo (monochromatic, bi-tone)',
        'Built several website prototypes, including proposed functionalities',
        'Written English & French Data Privacy'
      ],
      mainTechnologies: [
        {
          icon: 'icon icon-xd-logo',
          title: 'Adobe Xd'
        },
        {
          icon: 'icon icon-inkscape-logo',
          title: 'Inkscape'
        }
      ],
      otherTechnologies: []
    },
    {
      color: '#0062AE',
      lighten: '#1599ff',
      darken: '#002948',
      icon: 'icon icon-sogelink-logo-alt',
      company: 'Sogelink',
      title: 'UI Designer & R&D Full-Stack Web Developer',
      location: 'Lyon, FR',
      contract: 'External - via Intitek',
      dates: {
        start: 'Mar 2018',
        end: 'Mar 2019',
        yEnd: 2019
      },
      projects: [
        {
          name: 'Maplink',
          icon: 'icon icon-maplink-logo-alt',
          description: 'Maplink is both a map component integrated into DICT.fr and a Network and Urban Properties Management Solution'
        },
        {
          name: 'GeoSnap',
          icon: 'icon icon-geosnap-logo',
          description: 'Surveyor / Topography productivity Saas Solution'
        }
      ],
      tasks: [
        'Designed, Developed and integrated new components',
        'Created new API endpoints and develop related views',
        'Created new UI fashionable and usable components meeting with the design team',
        'Constructed a UX-first strategy for complex forms',
        'Designed new business monochrome and bi-tone icons',
        'Optimized 3D scatter plots filter and transformation algorithms',
        'Used the GeoServer API to update PCRS and Geometry Layers in real-time',
        'Developed POCs related to 2D and 3D files (CAO, 3D Scatter plots, GeoJSON...) visualization in web browsers',
        'Trained new colleagues to the tech environment, Git and Angular technologies'
      ],
      mainTechnologies: [
        {
          icon: 'icon icon-angular-logo',
          title: 'Angular'
        },
        {
          icon: 'icon icon-spring-logo',
          title: 'Java Spring'
        },
        {
          icon: 'icon icon-git-logo',
          title: 'Advanced Git'
        },
        {
          icon: 'icon icon-python-logo',
          title: 'Python'
        },
        {
          icon: 'icon icon-typescript-logo',
          title: 'TypeScript'
        }
      ],
      otherTechnologies: [
        {
          icon: 'icon icon-gitlab-logo-alt',
          title: 'GitLab CI'
        },
        {
          icon: 'icon icon-three-logo',
          title: 'ThreeJS'
        },
        {
          icon: 'icon icon-babylon-logo-alt',
          title: 'BabylonJS'
        },
        {
          icon: 'icon icon-protoio-logo',
          title: 'ProtoIO'
        },
        {
          icon: 'icon icon-anydwg-logo',
          title: 'AnyDWG'
        }
      ]
    },
    {
      color: '#FF6640',
      lighten: '#ffb8a6',
      darken: '#d92b00',
      icon: 'icon icon-maincare-logo',
      company: 'Maincare Solutions',
      title: 'Web Developer & UI Designer',
      location: 'Lyon, FR',
      contract: 'External - via Intitek',
      dates: {
        start: 'Sept 2017',
        end: 'Mar 2018',
        yEnd: 2018
      },
      projects: [
        {
          name: 'IdeoMed / IdeoSanté',
          icon: 'icon icon-ideomed-logo',
          description: 'Product range that equips 80% of French hospitals to help them to manage health profiles, pills stock...'
        }
      ],
      tasks: [
        'Designed and Developed new functionalities',
        'Participated in specifications meetings',
        'Debated about form UX design'
      ],
      mainTechnologies: [
        {
          icon: 'icon icon-java-logo',
          title: 'Java EE'
        },
        {
          icon: 'icon icon-backbone-logo',
          title: 'BackboneJS'
        },
        {
          icon: 'icon icon-bootstrap-logo',
          title: 'Bootstrap'
        }
      ],
      otherTechnologies: []
    },
    {
      color: '#edcd40',
      lighten: '#ffeec3',
      darken: '#f6b000',
      icon: 'icon icon-vdsconsulting-logo',
      company: 'VDS Consulting',
      title: 'Web Developer, UI Designer & Branding',
      location: 'Remote',
      contract: 'Intern',
      dates: {
        start: 'Feb 2017',
        end: 'Sept 2017',
        yEnd: 2017
      },
      projects: [
        {
          name: 'Brussels Aquariums',
          icon: 'icon icon-brusselsaquariums-logo',
          description: 'Complete e-commerce solution'
        },
        {
          name: 'F@ctorio',
          icon: 'icon icon-factorio-logo',
          description: 'Transparent factoring tool'
        },
        {
          name: 'VDS Consulting Website',
          icon: 'icon icon-vdsconsulting-logo',
          description: 'Showcase Website'
        },
        {
          name: 'Find an Umbrella',
          icon: 'icon icon-findanumbrella-logo',
          description: 'Find umbrella companies all over the world'
        },
        {
          name: 'CV-Broker',
          icon: 'icon icon-cvbroker-logo',
          description: 'Full management website for recruiters and companies'
        },
        {
          name: 'My Landlord Club',
          icon: 'icon icon-mylandlordclub-logo',
          description: 'Real-estate crowd-funding'
        }
      ],
      tasks: [
        'Written Specifications',
        'Designed layouts and views',
        'Created Brands and Icons as well as Color Schemes',
        'Developed solutions in speed development with appropriate technologies',
        'Develop & Put online an e-commerce complete solution with 10,000+ products and online checkout',
        'Developed independent & automatic Resume creation module, calling official European Commission APIs and generating on-the-fly PDFs',
        'Written reports for web-marketing and design problematics',
        'Created dynamic PDF forms that interact with multiple APIs'
      ],
      mainTechnologies: [
        {
          icon: 'icon icon-symfony-logo-alt',
          title: 'Symfony'
        },
        {
          icon: 'icon icon-java-logo',
          title: 'Java'
        },
        {
          icon: 'icon icon-spring-logo',
          title: 'Spring'
        },
        {
          icon: 'icon icon-nodejs-logo',
          title: 'NodeJS Express'
        },
        {
          icon: 'icon icon-livecycle-logo',
          title: 'Adobe LiveCycle'
        },
      ],
      otherTechnologies: [
        {
          icon: 'icon icon-bootstrap-logo',
          title: 'Bootstrap'
        },
        {
          icon: 'icon icon-mdbootstrap-logo',
          title: 'MDBootstrap'
        },
        {
          icon: 'icon icon-sass-logo-alt',
          title: 'Sass'
        },
        {
          icon: 'icon icon-leaflet-logo',
          title: 'Leaflet'
        }
      ]
    },
    {
      color: '#90A9A9',
      ligthen: '#c9d6d6',
      darken: '#5c7777',
      icon: 'icon icon-iunex-type',
      company: 'Iunex Group',
      title: 'Web & Chrome Extension Developer',
      location: 'Remote',
      contract: 'Cooperation',
      dates: {
        start: 'July 2016',
        end: 'Mar 2017',
        yEnd: 2017
      },
      projects: [
        {
          name: 'Rate Job Offer',
          icon: 'icon icon-rjo-logo',
          description: 'Inventive Chrome Extension to find a job'
        },
        {
          name: 'Crazy Tips Work',
          icon: 'icon icon-crazytips-full',
          description: 'Comment and discuss on job offers have never been so simple'
        },
        {
          name: 'Crazy Tips',
          icon: 'icon icon-crazytips-full',
          description: 'Innovative solution for discussing about real-estate investments and offers'
        }
      ],
      tasks: [
        'Designed and conceived an easily-maintanaible and evolutive architecture including a high-volume web-service with OAuth authentications',
        'Developed content and background scripts',
        'Created new graphic charts',
        'Designed comprehensive forms',
        'Developed an optimized on-the-fly URL Scanning algorithm based on Regexp and Synchronisation',
        'Created an algorithm that suggest offers depending on the commented ones'
      ],
      mainTechnologies: [
        {
          icon: 'icon icon-php-logo',
          title: 'PHP'
        },
        {
          icon: 'icon icon-chrome-logo',
          title: 'Chrome Extension'
        },
        {
          icon: 'icon icon-javascript-logo-alt',
          title: 'JavaScript'
        }
      ],
      otherTechnologies: [
        {
          icon: 'icon icon-mysql-logo',
          title: 'MySQL'
        }
      ]
    },
    {
      color: '#DD7520',
      lighten: '#ebac78',
      darken: '#844613',
      icon: 'icon icon-braytonglobal-logo-alt',
      company: 'Brayton Global',
      title: 'Lead Web Developer',
      location: 'Antwerp, BE then Remote',
      contract: 'Intern, then Fixed-Term Contract',
      dates: {
        start: 'July 2015',
        end: 'Sept 2016',
        yEnd: 2016
      },
      projects: [
        {
          name: 'Vemasys',
          icon: 'icon icon-vemasys-logo',
          description: 'The new era of Vessel Management - Fluvial / Inland Vessel ERP'
        },
        {
          name: 'SkillMatrix',
          icon: 'icon icon-skillmatrix-logo',
          description: 'Smart Applicant Tracking System for recruitment companies'
        }
      ],
      tasks: [
        'Conceived and developed a complex architecture',
        'Implemented Front-End parts of the applications following mockups and solving complex ergonomic problems',
        'Created elegant designs and easily-maintainable code',
        'Participated in weekly meetings with the Product Owner and organized daily tasks of the team'
      ],
      mainTechnologies: [
        {
          icon: 'icon icon-symfony-logo-alt',
          title: 'Symfony'
        },
        {
          icon: 'icon icon-bootstrap-logo',
          title: 'Bootstrap'
        },
        {
          icon: 'icon icon-jquery-logo',
          title: 'jQuery'
        }
      ],
      otherTechnologies: [
        {
          icon: 'icon icon-mysql-logo',
          title: 'MySQL'
        },
        {
          icon: 'icon icon-trello-logo',
          title: 'Trello'
        }
      ]
    },
    {
      color: '#3BBCD8',
      lighten: '#90d9e9',
      darken: '#1d7c90',
      icon: 'icon icon-cityzendesk-logo',
      company: 'CityZenDesk',
      title: 'Mobile App Tester',
      location: 'Lyon, FR',
      contract: 'External - via Polyenco',
      dates: {
        start: 'Jan 2015',
        end: 'March 2015',
        yEnd: 2015
      },
      projects: [
        {
          name: 'CityZenDesk',
          icon: 'icon icon-cityzendesk-logo',
          description: 'The multifunctional app created to ease your daily life in your city and at home'
        }
      ],
      tasks: [
        'Followed test plans',
        'Produced test reports',
        'Raised problematics around offline and responsive design'
      ],
      mainTechnologies: [
        {
          icon: 'icon icon-testflight-logo',
          title: 'TestFlight'
        }
      ],
      otherTechnologies: []
    },
    {
      color: '#A32428',
      lighten: '#d95458',
      darken: '#4f1213',
      icon: 'icon icon-cnh-full',
      company: 'CNH Industrial',
      title: 'Software Developer',
      location: 'Bourbon-Lancy, FR',
      contract: 'Intern',
      dates: {
        start: 'Apr 2014',
        end: 'June 2014',
        yEnd: 2014
      },
      projects: [
        {
          name: 'CNH traceability tool',
          icon: 'icon icon-cnh-full',
          description: 'New software involving PMS, SAP and operators'
        }
      ],
      tasks: [
        'Trained myself on technologies used at this plant',
        'Analysed problems with the old application',
        'Took into account new standards, partially from the direction',
        'Developed a high-availability application with centralized database and automatic synchronisation for offline usage',
        'Asked operators about their needs, and find new functionalities for an easier utilization',
        'Developed specific views for maintenance and team managers',
        'Created an algorithm to check serial numbers for error-less entries',
        'Created SAP files and fetched APIs for new references'
      ],
      mainTechnologies: [
        {
          icon: 'icon icon-windev-logo',
          title: 'WinDev'
        },
        {
          icon: 'icon icon-hfsql-logo',
          title: 'HFSQL Database'
        }
      ],
      otherTechnologies: []
    }, {
      color: '#0683B9',
      lighten: '#2dbbf8',
      darken: '#033d56',
      icon: 'icon icon-ain-full',
      company: 'Archives Départementales de l\'Ain',
      title: 'Lead Web Developer',
      location: 'Bourg-en-Bresse, FR',
      contract: 'External - via IUT Lyon 1',
      dates: {
        start: 'Nov 2013',
        end: 'Mar 2014',
        yEnd: 2014
      },
      projects: [
        {
          name: 'Project Centenaire 14/18',
          icon: 'icon icon-ain-full',
          description: 'Award-winning website that presents in an innovative way data from World War 1'
        }
      ],
      tasks: [
        'Created an Identity and Style Guide, as well as a logo',
        'Developed an optimized map module',
        'Organized teamwork and communication with the client',
        'Transformed data for iso database'
      ],
      mainTechnologies: [
        {
          icon: 'icon icon-php-logo',
          title: 'PHP'
        },
        {
          icon: 'icon icon-javascript-logo-alt',
          title: 'JavaScript'
        },
        {
          icon: 'icon icon-google-maps-logo',
          title: 'Google Maps API'
        }
      ],
      otherTechnologies: [
        {
          icon: 'icon icon-jquery-logo',
          title: 'jQuery'
        },
        {
          icon: 'icon icon-mysql-logo',
          title: 'MySQL'
        }
      ]
    }
  ],
  networks: [
    {
      id: 'LinkedIn',
      color: '#0077B5',
      icon: 'icon icon-linkedin-logo-alt',
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/chbefr/'
    },
    {
      id: 'Dribbble',
      color: '#E44A86',
      icon: 'icon icon-dribbble-logo',
      name: 'Dribbble',
      link: 'http://bchoubert.dribbble.com/'
    },
    {
      id: 'GitHub',
      color: '#7B7E81',
      icon: 'icon icon-github-logo',
      name: 'GitHub',
      link: 'https://github.com/bchoubert'
    },
  ],
  projects: [
    {
      key: 'CV',
      title: 'Crypto Viewer',
      description: 'Mobile App to track crypto-currencies & your assets',
      top: '/resources/img/projects/CV/top.jpg',
      fullDescription: `<span>
        Crypto-Viewer is a utility app to track your favourite crypto-currencies. It's fast, secure, customizable...<br/>
        By adding your current assets, you can track your wallet value at everytime. You have also access to a pratcical set of tools to watch for current and past values of a crypto-currency.
      </span>`,
      wip: false,
      icon: 'icon icon-crypto-viewer-logo',
      color: '#1543E4',
      lighten: '#6d8bf2',
      darken: '#0c2887',
      mobile: '/resources/img/projects/CV/mobile.png',
      mobileProps: { height: 1140, width: 540 },
      tags: ['Crypto_Currencies', 'Mobile_App', 'UI'],
      dribbbleProject: 1948460,
      links: [
        {
          icon: 'icon icon-github-logo',
          link: 'https://github.com/bchoubert/crypto-viewer',
          title: 'GitHub'
        },
        {
          icon: 'icon icon-playstore-logo',
          link: 'https://play.google.com/store/apps/details?id=com.bchoubert.cryptoviewer',
          title: 'Play Store'
        },
        {
          icon: 'icon icon-dribbble-logo',
          link: 'https://dribbble.com/bchoubert/projects/1948460-Crypto-Viewer-App',
          title: 'Dribbble Project'
        }
      ],
      technologies: [
        {
          icon: 'icon icon-react-native-logo',
          title: 'React Native'
        },
        {
          icon: 'icon icon-expo-logo',
          title: 'Expo'
        },
        {
          icon: 'icon icon-typescript-logo',
          title: 'TypeScript'
        }
      ],
      details: [
        {
          title: 'Presentation',
          content: `<div class="content center-content my">
            <i class="icon icon-crypto-viewer-logo" style="font-size: 5rem"></i>
            <span class="center-content my">Crypto-Viewer is a light-weight crypto tracker.</span>
            <a href="https://play.google.com/store/apps/details?id=com.bchoubert.cryptoviewer" target="_blank" rel="noopener noreferrer">
              <amp-img width="162" height="55" src="/resources/img/projects/CV/googleplay.png" style="height: 3rem"></amp-img>
            </a>
          </div>
          <div class="flex-container my">
            <amp-img width="1280" height="853" layout="responsive" class="fl1 w-100" src="/resources/img/projects/CV/pres-1.jpg" lightbox></amp-img>
          </div>
          <div class="content center-content my">
            <span class="my d-block"><i class="icon icon-tachometer-fastest"></i> Fast<span class="sub d-block">Crypto-Viewer uses performant Coinbase APIs</span></span>
            <span class="my d-block"><i class="icon icon-lock"></i> Secure<span class="sub d-block">Files are only stored locally on your device</span></span>
            <span class="my d-block"><i class="icon icon-retweet-alt"></i> Manageable<span class="sub d-block">Add your wallet to track your assets</span></span>
            <span class="my d-block"><i class="icon icon-star"></i> Customizable<span class="sub d-block">Change your currency from the settings</span></span>
            <span class="my d-block"><i class="icon icon-swatchbook"></i> Beautiful<span class="sub d-block">Modern & brand-new components, custom fonts</span></span>
          </div>
          <div class="flex-container my">
            <amp-img width="1280" height="853" layout="responsive" class="fl1 w-100" src="/resources/img/projects/CV/pres-2.jpg" lightbox></amp-img>
          </div>`
        },
        {
          title: 'Branding',
          content: `<div class="flex-container my">
            <span class="fl1 center-content my">
              <i class="icon icon-circle sub" style="font-size: 5rem"></i><br/>
              <span>Money, Token</span>
            </span>
            <span class="fl1 center-content my">
              <i class="icon icon-top-right-arrow sub" style="font-size: 5rem"></i><br/>
              <span>Stocks, Investment, Profit</span>
            </span>
          </div>
          <div class="flex-container my">
            <span class="fl1 center-content">
              <i class="icon icon-crypto-viewer-logo" style="font-size: 5rem"></i><br/>
              <span>Crypto-Viewer</span>
            </span>            
          </div>`
        },
        {
          title: 'Key Functionalities',
          content: `<div class="content">
            The user can visualize different cryptos, and see details about them:
            <ul>
              <li>24-hour stats: min prize, max prize, volume</li>
              <li>Current Price: buy price, sell price</li>
              <li>Past graph (default scale: 1 week, possible scales: 1day, 3days, 1week, 1month, 3months, 6months)</li>
              <li>24h percentage</li>
            </ul><br/>
            Personalize the app: Select the date format (day/month or month/day) and select the currency (euro, dollat, bitcoin).<br/><br/>
            Add some crypto to their wallet: track their assets by adding your currencies
          </div>`
        },
        {
          title: 'Wireframing',
          content: `<div class="flex-container">
            <amp-img width="1511" height="1614" layout="responsive" class="fl1 w-100" src="/resources/img/projects/CV/wireframes.png" lightbox></amp-img>
          </div>`
        },
        {
          title: 'Colors',
          content: `<div class="content">
            <div class="indicator-parent my">
              <i class="indicator" style="background-color: #7200E3"></i>
              <span>Purple: Mystery, Vigilant
                <span class="ssub d-block">#7200E3</span></span>
            </div>
            <div class="indicator-parent my">
              <i class="indicator" style="background-color: #005BE3"></i>
              <span>Blue: Technology, Trust, Support
                <span class="ssub d-block">#005BE3</span></span>
            </div>
            <div class="indicator-parent my">
              <i class="indicator" style="background-color: #B4B4B4"></i>
              <span>Gray: Power, Protection, Security
                <span class="ssub d-block">#B4B4B4</span></span>
            </div>
          </div>`
        },
        {
          title: 'Fonts',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-roboto"></i></span>
              <span>App Font
                <span class="ssub d-block">Default System Font (Roboto in most cases)</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-wallet"></i></span>
              <span>Custom Icon Font
                <span class="ssub d-block">Icon Font built with WebPack from FontAwesome icons (Pro license)</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-bitcoin"></i></span>
              <span>Crypto-Currencis Font
                <span class="ssub d-block">428 crypto icons from 'crypto-currencies-font'</span></span>
            </div>
          </div>`
        },
        {
          title: 'Loaders',
          content: `<div class="content">
            <div class="indicator-parent my">
              <amp-img width="69" height="69" src="/resources/img/projects/CV/loader-1.png" style="height: 2rem"></amp-img>
              <span>
                Main Loader
                <span class="ssub d-block">Loader used when loading an item list</span>
              </span>
            </div>
            <div class="indicator-parent my">
              <amp-img width="155" height="37" src="/resources/img/projects/CV/loader-2.png" style="height: 2rem"></amp-img>
              <span class="mx">Coloured loaders
                <span class="ssub d-block">Graph loader, cloured in the official crypto color</span></span>
            </div>
          </div>`
        },
        {
          title: 'Final Logo',
          content: `<div class="flex-container">
            <amp-img layout="responsive" width="1367" height="974" class="fl1 w-100" src="/resources/img/projects/CV/final_logo.png"></amp-img>
          </div>`
        },
        {
          title: 'Screenshots',
          content: `<div class="flex-container">
            <amp-img class="fl1 w-100" layout="responsive" width="1513" height="1793" src="/resources/img/projects/CV/screenshots.png" lightbox></amp-img>
          </div>`
        },
        {
          title: 'Technologies',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-react-native-logo"></i></span>
              <span>React Native<span class="ssub d-block">A good framework for cross-platform apps</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-typescript-logo"></i></span>
              <span>TypeScript<span class="ssub d-block">Strongly typed apps</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-expo-logo"></i></span>
              <span>Expo<span class="ssub d-block">A set of pre-defined components and powerful tools</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-victory-logo"></i></span>
              <span>Victory Chart Native<span class="ssub d-block">A powerful library for interative graphs</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-moment-logo"></i></span>
              <span>Moment JS<span class="ssub d-block">A versatile library to manage datetimes</span></span>
            </div>
          </div>`
        },
        {
          title: 'Services',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-exchange-alt"></i></span>
              <span>Network Service<span class="ssub d-block">To interact with CoinBase endpoints<br/>The goal: if I have to migrate to another data provider, only this service should be redeveloped.</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-hdd"></i></span>
              <span>Storage Service<span class="ssub d-block">To interact with device's storage to store the wallet and user's preferences.<br/>The goal: if I have to change the storage strategy, only this service should be redeveloped.</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-cog"></i></span>
              <span>Utils Service<span class="ssub d-block">A bunch of utility functions to manage dates, colors, labels...<br/>The goal: centralize common operations.</span></span>
            </div>
          </div>`
        },
        {
          title: 'APIs',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-coinbase-type"></i></span>
              <span>Coinbase & Coinbase Pro APIs<span class="ssub d-block">A market reference for crypto-currencies</span></span>
            </div>
          </div>`
        },
        {
          title: 'Types',
          content: `<div class="content">
            This App is developed with strong variable typing strategy in mind. This provides an easier maintenance and understandability.
          </div>`
        },
        {
          title: 'Props',
          content: `<div class="content">
            App Component is in charge of loading data from storage, including preferences and user's wallet. It will then pass the quote to every child component.<br/><br/>          
            CryptoList receives the changeTab function property. It needs it to load the CryptoDetails view when the user clicks a crypto.<br/><br/>
            Wallet receives the changeTab function property : it needs it to load the CryptoDetails view when the user clicks a crypto. 
            It receives also the wallet (loaded from the storage) and the changeWallet function proprety that is called when the user modifies its wallet.<br/><br/>
            CryptoDetails receives the crypto to view, and the dateFormat loaded from the storage.<br/><br/>          
            Settings receives the changeQuote and changeDateFormat function properties to modify user's settings, and the selected dateFormat loaded from the storage.
          </div>`
        },
        {
          title: 'Font Loading',
          content: `<div class="content">
            Fonts are loaded asynchronously using the expo-font package. In the same time, preferences and wallet are loaded from the storage to optimize load time.
          </div>`
        }
      ]
    },
    {
      key: 'AD',
      title: 'Air-Data',
      top: '/resources/img/projects/AD/top.jpg',
      description: 'Airlines Data Viewer with 800+ companies and 10,000+ routes',
      fullDescription: `<span>
        Air-Data is a one-of-a-kind project.<br/>
        By computing data from different databases accross OpenAPI and Open-Source data, it records more than 10,000 routes and 800 companies from 2015.<br/>
        Air-Data is a convenient way to have a global look and understanding of worldwide air-related data, all along with every airport, airline, and operated flights for each airline.
      </span>`,
      wip: false,
      icon: 'icon icon-air-data-logo',
      color: '#FF4500',
      lighten: '#ff8f66',
      darken: '#992900',
      mobile: '/resources/img/projects/AD/mobile.png',
      mobileProps: { width: 540, height: 1140 },
      tags: ['Map', 'Analysis', 'Tile_Layers'],
      dribbbleProject: 2015636,
      links: [
        {
          icon: 'icon icon-codesandbox-logo',
          link: 'https://codesandbox.io/s/k044n51lk5',
          title: 'CodeSandbox'
        },
        {
          icon: 'icon icon-github-logo',
          link: 'https://github.com/bchoubert/air-data',
          title: 'GitHub'
        },
        {
          icon: 'icon icon-globe',
          link: 'https://k044n51lk5.csb.app/',
          title: 'Live version'
        },
        {
          icon: 'icon icon-dribbble-logo',
          link: 'https://dribbble.com/bchoubert/projects/2015636-Air-Data',
          title: 'Dribbble Project'
        }
      ],
      technologies: [
        {
          icon: 'icon icon-firebase-logo-alt',
          title: 'Firebase Real-Time Database'
        },
        {
          icon: 'icon icon-vuejs-logo',
          title: 'VueJS'
        },
        {
          icon: 'icon icon-leaflet-logo',
          title: 'Leaflet'
        },
        {
          icon: 'icon icon-qgis-logo',
          title: 'QGis'
        }
      ],
      details: [
        {
          title: 'Presentation',
          content: `<div class="content center-content">
            <i class="icon icon-air-data-logo" style="color: #FF4500; font-size: 5rem"></i>
            <h2 style="text-align: center">Air-Data</h2>
            <span class="my d-block">Airlines data viewer with 800+ companies and 10,000+ routes</span>
            <div class="flex-container my">
              <amp-img class="fl1 w-100" width="1280" height="853" layout="responsive" src="/resources/img/projects/AD/pres.jpg" lightbox></amp-img>
            </div>
          </div>`
        },
        {
          title: 'Branding',
          content: `<div class="content center-content">
            <i class="icon icon-air-data-logo" style="font-size: 5rem"></i>
            <span>Plane take-off<span class="ssub d-block">Font-Awesome icon, slightly modified</span></span>
          </div>`
        },
        {
          title: 'Key Functionalities',
          content: `<div class="content">
            The user can browse through airlines:
            <ul>
              <li>Each airline is presented at its headquarters location</li>
              <li>When clicking an ariline, details and operating routes appear</li>
              <li>The user can see all international airports</li>
            </ul>
          </div>`
        },
        {
          title: 'Wireframing',
          content: `<div class="flex-container">
            <amp-img class="fl1 w-100" width="1786" height="1075" layout="responsive" src="/resources/img/projects/AD/wireframes.png" lightbox></amp-img>
          </div>`
        },
        {
          title: 'Colors',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #FF4500"></span>
              <span>Orange: Transportation<span class="ssub d-block">#FF4500</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #2C3E50"></span>
              <span>Gray: Neutral, Formal<span class="ssub d-block">#2C3E50</span></span>
            </div>
          </div>`
        },
        {
          title: 'Fonts',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-raleway"></i></span>
              <span>Website Font<span class="ssub d-block">Raleway - Google Fonts</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-fa-flag"></i></span>
              <span>Font Awesome NPM Package</span>
            </div>
          </div>`
        },
        {
          title: 'Final Logo',
          content: `<div class="content center-content my">
            <i class="icon icon-air-data-logo" style="color: #FF4500; font-size: 5rem"></i>
          </div>`
        },
        {
          title: 'Screenshots',
          content: `<div class="flex-container">
            <amp-img class="fl1 w-100" width="1861" height="960" layout="responsive" src="/resources/img/projects/AD/screenshots.png" lightbox></amp-img>
          </div>`
        },
        {
          title: 'Map Layers',
          content: `<div class="content">
            <div class="flex-container">
              <amp-img width="1948" height="1448" layout="responsive" class="fl1 w-100" src="/resources/img/projects/AD/layers.png" lightbox></amp-img>
            </div>
            <div class="content">
              <h3 class="my" style="text-align: left"><i class="icon icon-map"></i> Base Map<span class="sub"> | Tile Layer</span></h3>
              <span>The Base Map is a layer from CartoDB called Voyager, one of the clearest tile layer of the market.</span>
              <h3 class="my" style="text-align: left"><i class="icon icon-airport"></i> Airports<span class="sub"> | Tile Layer</span></h3>
              <span>Airports data, OpenFlights.org CSV files, need to be imported into QGIS. Using a custom style, it can be exported using QTiles and hosted via GitHub raw files.<br/><br/>
              
                Style depends on the zoom level:
                <ul>
                  <li>0 : no data</li>
                  <li>1 to 8 : opaque style <amp-img width="81" height="40" style="max-height: 20px; display: inline-block" src="/resources/img/projects/AD/airport-opaque.png"></amp-img></li>
                  <li>9 to 10 : transparent style <amp-img width="81" height="39" style="max-height: 20px; display: inline-block" src="/resources/img/projects/AD/airport-transparent.png"></amp-img></li>
                  <li>10+ : zoom level 10 limited</li>
                </ul>
              </span>
              <h3 class="my" style="text-align: left"><i class="icon icon-arrows-alt-h"></i> Routes<span class="sub"> | Overlay</span></h3>
              <span>Routes, which are DAT files from SKYbrary, need to be first inserted into a relational database to verify their integrity, then
                inserted into a Firebase Real-Time database, from which they are fetched when needed.
              </span>
              <h3 class="my" style="text-align: left"><i class="icon icon-plane"></i> Routes<span class="sub"> | Clustered Markers Layer</span></h3>
              <span>Airlines, which are DAT files from SKYbrary, need to be inserted into a Firebase Real-Time database, from which they can be fetched when needed.</span>
            </div>
          </div>`
        },
        {
          title: 'Map Custom Control',
          content: `<div class="flex-container">
            <amp-img width="199" height="556" style="display: inline-block; flex: 0 0 4rem" src="/resources/img/projects/AD/custom-control.png"></amp-img>
            <span class="fl1 mx my">A custom control, that permits to reset the position and zoom of the map, needs to be added using JavaScript.</span>
          </div>`
        },
        {
          title: 'Technologies',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-vuejs-logo"></i></span>
              <span>VueJS<span class="ssub d-block">A versatile Front-End Framework</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-codesandbox-logo"></i></span>
              <span>Code Sandbox<span class="ssub d-block">An online IDE and runtime for web development</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-firebase-logo-alt"></i></span>
              <span>Firebase Real-Time database<span class="ssub d-block">An online and optimized document-based database</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-fa-flag"></i></span>
              <span>Font Awesome Pro<span class="ssub d-block">High-quality icons</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-leaflet-logo"></i></span>
              <span>Leaflet + Leaflet Marker Cluster<span class="ssub d-block">Leaflet is a JS library for interactive maps<br/>
                Leaflet Marker Cluster is an official addin to Leaflet and permits to group airlines into the same marker on lower zoom levels.</span></span>
            </div>
          </div>`
        },
        {
          title: 'Airline Logos',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-hand-pointer"></i></span>
              <span>1. Image Pick<span class="ssub d-block">Pick the right image to start with</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-expand-arrows-alt"></i></span>
              <span>2. Image Conversion<span class="ssub d-block">Convert to an alpha and rectangle-shaped image</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-swatchbook"></i></span>
              <span>3. Colourizing<span class="ssub d-block">Build a color map to save weight</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-eye"></i></span>
              <span>4. Contrast<span class="ssub d-block">Remove or replace low-contrast colours<span></span>
            </div>
          </div>`
        },
        {
          title: 'Database',
          content: `<div class="content">
            <span>
              This database uses prefixes to know where the data comes from:
              <ul>
                <li>AL : Airlines data comes from DAT files from SKYbrary</li>
                <li>AP : Airports data comes from CSV files from OpenFlights</li>
                <li>SRC and DEST : Routes data comes from DAT files from SKYbrary</li>
              </ul>
            </span>
            <h3 style="text-align: left" class="my"><i class="icon icon-plane"></i> Airlines</h3>
            <span>
              An airline is identified by its id and contains following information:
              <ul>
                <li>al_id : unique identifier</li>
                <li>al_name : airline's name</li>
                <li>al_icao : 3-letter identifier for an airline<br/>
                  This can't be used as unique identifier as some airlines share their ICAO</li>
                <li>al_country : country of airline's headquarters</li>
                <li>ap_icao : unique identifier of airline's base airport</li>
                <li>ap_name : name of airline's base airport</li>
                <li>ap_latitude and ap_longitude : coordinates of airline's base airport</li>
                <li>ap_altitude : altitude (in feets) of airline's base airport<br/>
                  As only a very small amount of airlines share the same airport as their base airport, It was chosen to not store
                  airports into a separated root. It permits also a better load of airlines data.</li>
              </ul>
            </span>
            <h3 style="text-align: left" class="my"><i class="icon icon-arrows-alt-h"></i> Routes</h3>
            <span>
              A route is not identified directly. It is attached to its airline's id (al_id). A rule was created to index routes on their al_id field, which permits 
              a better load time (routes are only fetch via their al_id). A route document contains:
              <ul>
                <li>al_id : airline's id that operates this route</li>
                <li>src_lat and src_long : Coordinates of first point of the route</li>
                <li>dest_lat and dest_long : Coordinates of second point of the route<br/>
                  src and dest terms are here to distinguish first point from second point, but it has not a real meaning, as a route is almost always operated in both ways.</li>
              </ul>
              <div class="indicator-parent my">
                <span class="indicator" style="color: #FF7777"><i class="icon icon-exclamation-triangle"></i></span>
                <span>Important notice : as Leaflet does not allow to draw lines outside of the map, a route that would go from Seattle to
                  Tokyo will be drawn above Europe, even if that's not the case in real life!</span>
              </div>
            </span>
          </div>`
        }
      ]
    },
    {
      key: 'BCF',
      title: 'BC-Font',
      description: 'The Developer Font with 1,200+ icons',
      top: '/resources/img/projects/BCF/top.jpg',
      fullDescription: `<span>
        BC-Font is an easy-to-use, high-quality and more globally a must-have font for IT workers, specially developers.<br/>
        With more than 1,200 icons separated into 27 categories, this product is available for every use: Desktop font, Web, Print, Design...<br/>
        This font comes with a handy website that permits you to find the ideal icons for your project.
      </span>`,
      wip: false,
      icon: 'icon icon-bcfont-logo',
      color: '#EA2834',
      lighten: '#F3858C',
      darken: '#9D0F18',
      mobile: '/resources/img/projects/BCF/mobile.png',
      mobileProps: { width: 540, height: 1140 },
      tags: ['Icon_Font', 'Automatic_Build'],
      dribbbleProject: 1948450,
      links: [
        {
          icon: 'icon icon-npm-logo',
          link: 'https://www.npmjs.com/package/bc-font',
          title: 'Npm Package'
        },
        {
          icon: 'icon icon-github-logo',
          link: 'https://github.com/bchoubert/bc-font',
          title: 'GitHub'
        },
        {
          icon: 'icon icon-globe',
          link: 'https://bchoubert.github.io/bc-font-website/',
          title: 'Live version'
        },
        {
          icon: 'icon icon-dribbble-logo',
          link: 'https://dribbble.com/bchoubert/projects/1948450-BC-Font',
          title: 'Dribbble Project'
        }
      ],
      technologies: [
        {
          icon: 'icon icon-gimp-logo',
          title: 'Gimp'
        },
        {
          icon: 'icon icon-webpack-logo',
          title: 'Webpack'
        },
        {
          icon: 'icon icon-inkscape-logo',
          title: 'Inkscape'
        }
      ],
      details: [
        {
          title: 'Presentation',
          content: `<div class="content center-content my">
            <i class="icon icon-bcfont-logo" style="font-size: 5rem"></i>
            <span class="my">The font for IT Professionals</span>
            <span>
              <a href="https://github.com/bchoubert/bc-font" style="margin: 0 1rem" target="_blank" rel="noopener noreferrer">
                <amp-img width="218" height="71" src="/resources/img/projects/BCF/github.png" style="height: 3rem"></amp-img>
              </a>
              <a href="https://www.npmjs.com/package/bc-font" style="margin: 0 1rem" target="_blank" rel="noopener noreferrer">
                <amp-img width="218" height="71" src="/resources/img/projects/BCF/npm.png" style="height: 3rem"></amp-img>
              </a>
            </span>
          </div>
          <div class="flex-container my">
            <amp-img layout="responsive" class="fl1 w-100" width="1211" height="682" src="/resources/img/projects/BCF/pres-1.jpg" lightbox></amp-img>
          </div>
          <div class="content center-content my">
            1,269* icons.<br/><br/>
            27* categories.<br/><br/>
            3 icon types.<br/><br/>
            For all your needs.<br/><br/>
            Available for Desktop, Web, Print, Design...<br/><br/>
            <span class="ssub">(* as of 2.3.2 version)</span>
          </div>
          <div class="flex-container my">
            <amp-img class="w-100 fl1" layout="responsive" width="1280" height="853" src="/resources/img/projects/BCF/pres-2.jpg" lightbox></amp-img>
          </div>
          <div class="flex-container my">
            <amp-img class="w-100 fl1" layout="responsive" width="1280" height="853" src="/resources/img/projects/BCF/pres-3.jpg" lightbox></amp-img>
          </div>`
        },
        {
          title: 'Branding',
          content: `<div class="flex-container my">
            <span class="fl1 center-content">
              <i class="icon icon-bcf-base sub" style="font-size: 5rem"></i><br/>
              <span>Base name</span>
            </span>
            <span class="fl1 center-content">
              <i class="icon icon-bcf-slash sub" style="font-size: 5rem"></i><br/>
              <span>/ character<span class="ssub d-block">Signification: Code, Architecture</span></span>
            </span>
          </div>
          <div class="flex-container my">
            <span class="fl1 center-content">
              <i class="icon icon-bcf-final" style="font-size: 7rem"></i><br/>
              <span>BC-Font</span>
            </span>
          </div>`
        },
        {
          title: 'Key Functonalities',
          content: `<div class="content">
            The user can browse through icon categories:
            <ul>
              <li>Each icon on top of the official color</li>
              <li>A filter menu is available to filter icons by category</li>
              <li>New icons are indicated via the "NEW" badge</li>
            </ul><br/>
            Each icon is shown along with its name. When clicking on an icon, a drawer appears and contains:
            <ul>
              <li>The icon on top of the official color</li>
              <li>Its name and category</li>
              <li>Its official color along with a "To clipboard" button</li>
              <li>The syntaxically coloured HTML code with a "To clipboard" button</li>
              <li>Associated icons (alternatives to this icon) that opens the selected alternative icon when clicked</li>
            </ul>
          </div>`
        },
        {
          title: 'Wireframing',
          content: `<div class="flex-container">
            <amp-img class="fl1 w-100" layout="responsive" width="1853" height="2834" src="/resources/img/projects/BCF/wireframes.png" lightbox></amp-img>
          </div>`
        },
        {
          title: 'Colors',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #EB2834"></span>
              <span>Red: Emotion, Stimulate<span class="ssub d-block">#EB2834</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #404040"></span>
              <span>Gray: Neutral, Formal<span class="ssub d-block">#404040</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #E0E0E0"></span>
              <span>Gray: Neutral, Formal<span class="ssub d-block">#E0E0E0</span></span>
            </div>
          </div>`
        },
        {
          title: 'Fonts',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-roboto"></i></span>
              <span>Website Font<span class="ssub d-block">Roboto - Google Fonts</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-bcfont-logo"></i></span>
              <span>BC-Font icons<span class="ssub d-block">BC-Font package</span></span>
            </div>
          </div>`
        },
        {
          title: 'Badges',
          content: `<div class="content center-content">
            <div class="my">
              <amp-img width="120" height="50" src="/resources/img/projects/BCF/badge.png" style="height: 2rem"></amp-img>
            </div>
            <div class="my">
              <span>"New" badge for newest icons</span>
            </div>
          </div>`
        },
        {
          title: 'Final logo',
          content: `<div class="flex-container">
            <div class="fl1 center-content">
              <i class="icon icon-bcfont-full" style="font-size: 5rem; color: #EB2834"></i>
              <span class="my">Full-Size Logo</span>
            </div>
            <div class="fl1 center-content">
              <i class="icon icon-bcfont-logo" style="font-size: 5rem; color: #EB2834"></i>
              <span class="my">Simplified Logo</span>
            </div>
          </div>`
        },
        {
          title: 'Screenshots',
          content: `<div class="flex-container">
            <amp-img width="1810" height="2689" layout="responsive" class="fl1 w-100" src="/resources/img/projects/BCF/screenshots.png" lightbox></amp-img>
          </div>`
        },
        {
          title: 'Font',
          content: `<div class="content">
            <span class="my d-block">The BC-Font consists of 1,005 Unicode characters separated into 27 categories <span class="sub">(as of 1.8 version)</span> :</span>
            <amp-img class="w-100 my fl1" width="1879" height="9324" layout="responsive" src="/resources/img/projects/BCF/font.png" lightbox></amp-img>
          </div>`
        },
        {
          title: 'Technologies',
          content: `<div class="indicator-parent my">
            <span class="indicator"><i class="icon icon-webpack-logo"></i></span>
            <span>Webpack
              <span class="sub d-block">
                With an incredible choice of loaders, WebPack bundles any web application / JS files. Here, following loaders are used:
                <ul>
                  <li>css-loader</li>
                  <li>mini-css-extract-plugin</li>
                  <li>style-loader</li>
                  <li>webfonts-loader</li>
                </ul>
              </span>
            </span>
          </div>`
        },
        {
          title: 'Icon Categories',
          content: `<div class="content">
            Icons are sorted into categories that user can use to filter icon visualization on the website, along with examples <span class="sub">(as of 1.8 version)</span>:
            <ul>
              <li>All</li>
              <li>AI, BI & Big Data<span class="ssub d-block">QlikSense, SAS, Talend</span></li>
              <li>APIs<span class="ssub d-block">CoinBase, Facebook, Paypal</span></li>
              <li>Analysis & Marketing<span class="ssub d-block">Google Ads, Analytics, SalesForce</span></li>
              <li>Back-End<span class="ssub d-block">PHP, Cobol, Spring, Ruby</span></li>
              <li>Brands<span class="ssub d-block">Adobe, Qwant, W3C</span></li>
              <li>Browsers<span class="ssub d-block">Edge, Chrome, Opera</span></li>
              <li>Cloud & Virtualization<span class="ssub d-block">AWS, Azure Autoscaling, GCP App Engine</span></li>
              <li>Code Versioning<span class="ssub d-block">Git, Hub, GitHub</span></li>
              <li>Databases<span class="ssub d-block">Cassandra, Postgre, SQLite</span></li>
              <li>DevOps & Quality<span class="ssub d-block">Tomcat, Sonar, Gradle</span></li>
              <li>E-commerce Solutions<span class="ssub d-block">Drupal, WooCommerce, Opencart</span></li>
              <li>ERPs<span class="ssub d-block">SAP, Odoo, IFS</span></li>
              <li>File Formats<span class="ssub d-block">JSON, Markdown, YAML</span></li>
              <li>Front-End<span class="ssub d-block">Angular, CSS, Babylon</span></li>
              <li>GIS & Geo<span class="ssub d-block">Carto, Google Maps, QGIS</span></li>
              <li>Game Engines & Softwares<span class="ssub d-block">Cry Engine, SDL, Ogre</span></li>
              <li>Graphics & 3D<span class="ssub d-block">Behance, Inkscape, Solidworks</span></li>
              <li>Hardware<span class="ssub d-block">Bluetooth, Raspberry, Graphic Card</span></li>
              <li>IDE & DB Softwares<span class="ssub d-block">Code Sandbox, NetBeans, IntelliJ</span></li>
              <li>Mobile<span class="ssub d-block">Android, Expo, Play Store</span></li>
              <li>Office<span class="ssub d-block">Word, Google Slides, Zimbra</span></li>
              <li>Operating Systems<span class="ssub d-block">Arch Linux, Windows 10, MacOS</span></li>
              <li>Package Providers<span class="ssub d-block">Composer, Maven, NPM</span></li>
              <li>Personal</li>
              <li>Recruitment Websites<span class="ssub d-block">Indeed, Monster, WeLoveDevs</span></li>
              <li>Social Networks<span class="ssub d-block">Flickr, Facebook, Whereby</span></li>
              <li>Training Websites<span class="ssub d-block">CodeAcademy, LiveMentor, Udacity</span></li>
            </ul>        
          </div>`
        },
        {
          title: 'Font Build',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-bullseye-pointer"></i></span>
              <span>1. Theme Selection<span class="ssub d-block">Find interesting icons to add to the font</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-hand-pointer"></i></span>
              <span>2. Image Selection<span class="ssub d-block">Pick the right image to start with</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-swatchbook"></i></span>
              <span>3. Image Conversion<span class="ssub d-block">Convert to an alpha and square-shaped image</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-expand-arrows-alt"></i></span>
              <span>4. Vectorizing<span class="ssub d-block">Convert the raster image to a vector one</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-cog"></i></span>
              <span>5. Build the package<span class="ssub d-block">Automated process that generated the font</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-retweet-alt"></i></span>
              <span>6. Update the icon map<span class="ssub d-block">Show the icon on the website, along with color and other characteristics</span></span>
            </div>
          </div>`
        }
      ]
    },
    {
      key: 'VV',
      title: 'Velo\'v',
      top: '/resources/img/projects/VV/top.jpg',
      description: 'Deep analysis of French renting bike company',
      fullDescription: `<span>
        This website presents both an advanced real-time analysis and a business intelligence analysis of the Velo'v bike-sharing network.<br/>
        Using your phone, you can locate easily the nearest station to take your bike from, or the nearest station to let your bike.<br/>
        You can see all the stations status and district stats at a glance, as well as the high-fidelity results of the Business Intelligence analysis.
      </span>`,
      wip: false,
      icon: 'icon icon-velov-logo-alt',
      color: '#BF1410',
      lighten: '#ef4945',
      darken: '#610a08',
      mobile: '/resources/img/projects/VV/mobile.png',
      mobileProps: { width: 540, height: 1140 },
      tags: ['Business_Intelligence', 'Map', 'Real-Time'],
      dribbbleProject: 1984459,
      links: [
        {
          icon: 'icon icon-github-logo',
          link: 'https://github.com/bchoubert/bi-velov/',
          title: 'GitHub'
        },
        {
          icon: 'icon icon-globe',
          link: 'https://bchoubert.github.io/bi-velov/',
          title: 'Live version'
        },
        {
          icon: 'icon icon-dribbble-logo',
          link: 'https://dribbble.com/bchoubert/projects/1984459-Velo-v-Business-Intelligence',
          title: 'Dribbble Project'
        }
      ],
      technologies: [
        {
          icon: 'icon icon-jquery-logo',
          title: 'jQuery'
        },
        {
          icon: 'icon icon-chartjs-logo',
          title: 'ChartJS'
        },
        {
          icon: 'icon icon-leaflet-logo',
          title: 'Leaflet'
        },
        {
          icon: 'icon icon-talend-logo',
          title: 'Talend ETL'
        },
        {
          icon: 'icon icon-qliksense-logo',
          title: 'Qlik Sense'
        }
      ],
      details: [
        {
          title: 'Presentation',
          content: `<div class="content center-content">
            <i class="icon icon-velov-logo-alt" style="font-size: 15rem"></i>
            <h3 style="text-align: center" class="my">BI - Velo'v</h3>
          </div>
          <div class="flex-container my">
            <amp-img class="fl1 w-100" width="1920" height="1080" layout="responsive" src="/resources/img/projects/VV/pres-1.png" lightbox></amp-img>
          </div>
          <div class="content center-content my">
            Real-Time Network Health Analysis
          </div>
          <div class="flex-container my">
            <amp-img class="fl1 w-100" width="1280" height="960" layout="responsive" src="/resources/img/projects/VV/pres-2.jpg" lightbox></amp-img>
          </div>
          <div class="content center-content my">
            Velo'v station status in real-time.<br/>
            District real-time statistics.
          </div>
          <div class="flex-container my">
            <amp-img class="fl1 w-100" width="1280" height="853" layout="responsive" src="/resources/img/projects/VV/pres-3.jpg" lightbox></amp-img>
          </div>
          <div class="content center-content my">
            Results of a complex Business Intelligence analysis
          </div>
          <div class="flex-container my">
            <amp-img width="1280" height="853" layout="responsive" class="fl1 w-100" src="/resources/img/projects/VV/pres-4.jpg" lightbox></amp-img>
          </div>`
        },
        {
          title: 'Branding',
          content: `<div class="flex-container my">
            <div class="fl1 center-content my">
              <i class="icon icon-velov-logo-alt" style="font-size: 5rem"></i>
              <span>Official Velo'v Logo</span>
            </div>
            <div class="fl1 center-content my">
              <i class="icon icon-velov-logo" style="font-size: 5rem"></i>
              <span>Official Simplified Velo'v Logo</span>
            </div>
          </div>`
        },
        {
          title: 'Key Functionalities',
          content: `<div class="content">
            The user can browse trough velov stations in real-time:
            <ul>
              <li>He can click a station to see available bikes</li>
              <li>He can search a particular station</li>
              <li>He is geolocated automatically</li>
              <li>He can see advanced stats on each district</li>
              <li>He can also see advanced stats on the global network</li>
            </ul><br/>            
            The user can also see results of the Business Intelligence analysis done in 2016. 
          </div>`
        },
        {
          title: 'Wireframing',
          content: `<div class="flex-container">
            <amp-img class="fl1 w-100" width="1738" height="4552" layout="responsive" src="/resources/img/projects/VV/wireframes.png" lightbox></amp-img>
          </div>`
        },
        {
          title: 'Colors',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #E11F26"></span>
              <span>Red: Excitement, Energy, Sport<span class="ssub d-block">#E11F26</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #E0E0E0"></span>
              <span>Gray: Neutral, Formal<span class="ssub d-block">#E0E0E0</span></span>
            </div>
          </div>`
        },
        {
          title: 'Graphics',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-bike" style="color: #E11F26"></i></span>
              <span>Occupied station slot</span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-slot" style="color: #E11F26"></i></span>
              <span>Empty station slot</span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-circle-full" style="color: #458CE4"></i></span>
              <span>Geolocation</span>
            </div>
            <div class="indicator indicator-big indicator-white"><amp-img width="60" height="60" src="/resources/img/projects/VV/graph-1.png"></amp-img></div>
            <div class="indicator indicator-big indicator-white"><amp-img width="60" height="60" src="/resources/img/projects/VV/graph-2.png"></amp-img></div>
            <div class="indicator indicator-big indicator-white"><amp-img width="60" height="60" src="/resources/img/projects/VV/graph-3.png"></amp-img></div><br/><br/>
            <div class="indicator indicator-big indicator-white"><amp-img width="60" height="60" src="/resources/img/projects/VV/graph-4.png"></amp-img></div>
            <div class="indicator indicator-big indicator-white"><amp-img width="60" height="60" src="/resources/img/projects/VV/graph-5.png"></amp-img></div>
            <div class="indicator indicator-big indicator-white"><amp-img width="60" height="60" src="/resources/img/projects/VV/graph-6.png"></amp-img></div><br/><br/>
            <div class="indicator indicator-big indicator-white"><amp-img width="60" height="60" src="/resources/img/projects/VV/graph-7.png"></amp-img></div>
            <div class="indicator indicator-big indicator-white"><amp-img width="60" height="60" src="/resources/img/projects/VV/graph-8.png"></amp-img></div>
            <div class="indicator indicator-big indicator-white"><amp-img width="60" height="60" src="/resources/img/projects/VV/graph-9.png"></amp-img></div>
          </div>`
        },
        {
          title: 'Fonts',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-roboto"></i></span>
              <span>Website Font<span class="ssub d-block">Roboto - Google Fonts</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-poiret-one"></i></span>
              <span>Website Title Font<span class="ssub d-block">Poiret One - Google Fonts</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-material"></i></span>
              <span>Icon Font<span class="ssub d-block">Material Icons Font - Google Fonts</span></span>
            </div>
          </div>`
        },
        {
          title: 'Station Status',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #00AA32; color: white"><i class="icon icon-velov-logo-alt"></i></span>
              <span>Opened Station</span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #FFE60B; color: white"><i class="icon icon-velov-logo-alt"></i></span>
              <span>Full Station</span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #FFAA00; color: white"><i class="icon icon-velov-logo-alt"></i></span>
              <span>Empty Station</span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #FF0000; color: white"><i class="icon icon-velov-logo-alt"></i></span>
              <span>Closed Station</span>
            </div>
          </div>`
        },
        {
          title: 'Screenshots',
          content: `<div class="flex-container">
            <amp-img class="fl1 w-100" width="1715" height="17903" layout="responsive" src="/resources/img/projects/VV/screenshots.png" lightbox></amp-img>
          </div>`
        },
        {
          title: 'Map Layers',
          content: `<div class="content">
            <div class="flex-container my">
              <amp-img width="1856" height="1176" layout="responsive" class="fl1 w-100" src="/resources/img/projects/VV/map.png" lightbox></amp-img>
            </div>
            <h3 class="my" style="text-align: left"><i class="icon icon-map"></i> Base map<span class="sub"> | Tile Layer</span></h3>
            <span>
              The Base Map is a layer from OpenStreetMap called mapnik - GrayScale, a very clear layer with all information from the classic layer of OpenStreetMap.
            </span>
            <h3 class="my" style="text-align: left"><i class="icon icon-polygon"></i> Districts<span class="sub"> | Objects Pane - Polygons</span></h3>
            <span>Districts' bounds are stored in a JavaScript variable, then draw on the map.</span>
            <h3 class="my" style="text-align: left"><i class="icon icon-biking"></i> Bike Stations<span class="sub"> | Marker Pane</span></h3>
            <span>Bike Stations are retrieved from the JCDecaux API, owner of the Velo'v network.</span>
          </div>`
        },
        {
          title: 'Map Custom Controls',
          content: `<div class="flex-container">
            <amp-img width="191" height="753" src="/resources/img/projects/VV/controls.png" style="flex: 0 0 4rem; max-height: 7rem"></amp-img>
            <span class="center-content fl1 mx my">
              A custom control, that permits to reset the position and zoom of the map, needs to be added using JavaScript.<br/><br/>              
              Another control was added and permits to show the legend on hover.
            </span>
          </div>`
        },
        {
          title: 'Map Legend',
          content: `<div class="content center-content">
            <amp-img width="333" height="311" src="/resources/img/projects/VV/legend.png"></amp-img>
            <span class="my">Legend appears on hover on the information control.</span>
          </div>`
        },
        {
          title: 'Technologies',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-jquery-logo"></i></span>
              <span>jQuery<span class="ssub d-block">Fast, small and feature-rich JavaScript library</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-chartjs-logo"></i></span>
              <span>ChartJS<span class="ssub d-block">Simple, clean and engaging JavaScript charts</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-leaflet-logo"></i></span>
              <span>Leaflet<span class="ssub d-block">Library for interactive maps</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-mdbootstrap-logo"></i></span>
              <span>MDBootstrap<span class="ssub d-block">Most popular framework for building responsive websites</span></span>
            </div>
          </div>`
        },
        {
          title: 'APIs',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-jcdecaux"></i></span>
              <span>JC Decaux<span class="ssub d-block">Real-Time updated API for Velo'v network status</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-openweather-logo"></i></span>
              <span>Open Weather API<span class="ssub d-block">Real-Time weather</span></span>
            </div>
          </div>`
        },
        {
          title: 'JC Decaux API',
          content: `<div class="content">
            The JC Decaux API returns in real-time the status of all stations. For each station, it joins some attributes :
            <ul>
              <li>number (id of the district + id of the station)</li>
              <li>name of the station</li>
              <li>its address</li>
              <li>latitude and longitude</li>
              <li>its status (either opened or closed)</li>
              <li>if the station is a bonus station</li>
              <li>available bikes</li>
              <li>available bike stands</li>
              <li>bike stands (available bikes + available bike stands + out of order bike stands)</li>
            </ul>
          </div>`
        },
        {
          title: 'Geolocation',
          content: `<div class="content">
            The user is geolocalized at each visit. Everytime, the map is zoomed to its position, and the closest station's details are opened automatically.
          </div>`
        },
        {
          title: 'BI Process',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-download"></i></span>
              <span>Data Fetching<span class="ssub d-block">PHP with Curl Script</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-mysql-logo"></i></span>
              <span>Database<span class="ssub d-block">MySQL - 3.6 M lines</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-talend-logo"></i></span>
              <span>Data Transformation<span class="ssub d-block">Talend ETL</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-sql-logo"></i></span>
              <span>Transformation Scripts<span class="ssub d-block">SQL scripts</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-qliksense-logo"></i></span>
              <span>Data Visualization<span class="ssub d-block">Qlik Sense</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-javascript-logo-alt"></i></span>
              <span>Chart Transformation<span class="ssub d-block">JavaScript</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-chartjs-logo"></i></span>
              <span>Chart Integration<span class="ssub d-block">ChartJS</span></span>
            </div>
          </div>`
        },
        {
          title: 'Data Sources',
          content: `<div class="content">
            <span>Two APIs were fetched with a granularity of 5 minutes.</span>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-bike-alt"></i></span>
              <span>Velo'v network API</span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-calendar"></i></span>
              <span>Date & Hour</span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-weather"></i></span>
              <span>Weather API</span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-users"></i></span>
              <span>Static Data<span class="ssub d-block">Population by districts</span></span>
            </div>
          </div>`
        },
        {
          title: 'Data Transformation',
          content: `<div class="content">
            Transformation scripts permits to manipulate data before loading it into QlikSense :
            <ul>
              <li>arrondpop<span class="sub"> | adds the population to each district</span></li>
              <li>day of the week<span class="sub"> | adds the day label to each timestamp</span></li>
              <li>hour correction<span class="sub"> | permits to truncate seconds to each timestamp</span></li>
              <li>timestamp on date<span class="sub"> | adds the human-readable date</span></li>
              <li>timestamp on hour<span class="sub"> | adds the human-readable hour</span></li>
              <li>week number<span class="sub"> | adds the week number and day labels</span></li>
            </ul>
          </div>`
        },
        {
          title: 'KPIs',
          content: `<div class="content">
            This analysis permits to answer to these KPIs, useful to indicate the network health:
            <ol>
              <li>Which stations are the most used? and districts?</li>
              <li>Which stations are the less used? and districts?</li>
              <li>Which stations appeared at least once a day without a bike?</li>
              <li>Which stations appeared at least once a day full?</li>
              <li>How many bikes are available though the day?</li>
              <li>How many bikes are used through the day?</li>
              <li>How many bikes are used according to the weather?</li>
              <li>Which stations are the most used, according to the weather?</li>
              <li>How many bike stands are out of order through the week?</li>
              <li>Which stations have the most out of order bikes?</li>
              <li>Which stations are the most often empty?</li>
              <li>Which stations are the most often full?</li>
              <li>How the stations are used along the week (hour-sampled) ?</li>
              <li>How the stations are used along the week (day-sampled) ?</li>
              <li>How many stations are installed by inhabitant (by district) ?</li>
              <li>How many bikes are available by inhabitant (by district) ?</li>
              <li>How many available bikes are in each station along the day?</li>
              <li>How many available stands are in each station along the day?</li>
              <li>Does the neighbour stations (<200 m) have a similar activity?</li>
              <li>Are there very active stations next to (< 200m) inactive ones?</li>
              <li>How long in average an empty station stays empty?</li>
              <li>How long in average a full station stays full?</li>
              <li>Are there any correlation between temperature and utilization?</li>
              <li>Are there any correlation between humidity and utilization?</li>
            </ol>
          </div>`
        },
        {
          title: 'Charts',
          content: `<div class="content">
            Charts are built using QlikSense. After this, they are transformed into JSON data, then used to build interactive charts.
            This permits to have more engaging, beautiful and interactive charts through the entire website.
          </div>
          <div class="flex-container my">
            <amp-img width="870" height="754" layout="responsive" class="fl1 w-100" src="/resources/img/projects/VV/charts.png" lightbox></amp-img>
          </div>`
        }
      ]
    },
    {
      key: 'ZB',
      title: 'Zest Bank',
      description: 'Refreshing Online Bank Concept',
      top: '/resources/img/projects/ZB/top.jpg',
      fullDescription: `<span>
        ZestBank is a branding concept of the modern bank, according to me.<br/>
        Managing your services, cards and funds online or via the app, and choose your ZestCard from the three plans.
      </span>`,
      wip: false,
      icon: 'icon icon-zestbank-logo',
      color: '#F87C00',
      lighten: '#ffaf5f',
      darken: '#924900',
      mobile: '/resources/img/projects/ZB/mobile.png',
      mobileProps: { width: 540, height: 1140 },
      dribbbleProject: 1923106,
      tags: ['Branding', 'UI'],
      links: [
        {
          icon: 'icon icon-dribbble-logo',
          link: 'https://dribbble.com/bchoubert/projects/1923106-Zest-Bank-Concept',
          title: 'Dribbble Project'
        }
      ],
      technologies: [
        {
          icon: 'icon icon-xd-logo',
          title: 'Adobe XD'
        }
      ],
      details: [
        {
          title: 'Presentation',
          content: `<div class="content">
            <div class="content center-content">
              <i class="icon icon-zestbank-full" style="font-size: 10rem; color: #F87C00"></i>
            </div>
            <div class="flex-container my">
              <amp-img width="884" height="589" layout="responsive" class="fl1 w-100" src="/resources/img/projects/ZB/pres-1.png"></amp-img>
            </div>
            <div class="flex-container my">
              <amp-img width="884" height="589" layout="responsive" class="fl1 w-100" src="/resources/img/projects/ZB/pres-2.png"></amp-img>
            </div>
          </div>`
        },
        {
          title: 'Branding',
          content: `<div class="flex-container">
            <amp-img width="1776" height="3346" layout="responsive" class="fl1 w-100" src="/resources/img/projects/ZB/branding.png"></amp-img>
          </div>
          <div class="content center-content">
            <i class="icon icon-zestbank-full" style="font-size: 10rem"></i>
            <span>Final Logo</span>
          </div>
          <div class="flex-container">
            <span class="fl1 center-content">
              <i class="icon icon-zestbank-logo" style="font-size: 10rem"></i>
              <span>Infography Only</span>
            </span>
            <span class="fl1 center-content">
              <i class="icon icon-zestbank-logo-alt" style="font-size: 10rem"></i>
              <span>Simplified Logo</span>
            </span>
          </div>`
        },
        {
          title: 'Colors',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #FBF30C"></span>
              <span>Yellow - Lime: Enthusiasm, Opportunity, Positivity<span class="ssub d-block">#FBF30C</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #BAf800"></span>
              <span>Green - Lime: Safety, Stability, Reliability<span class="ssub d-block">#BAF800</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #F87C00"></span>
              <span>Orange: Optimistic, Creativity, Express Freedom<span class="ssub d-block">#F87C00</span></span>
            </div>
          </div>`
        },
        {
          title: 'Fonts',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-nunito"></i></span>
              <span>Main Font<span class="ssub d-block">Nunito - Google Fonts</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-fa-flag"></i></span>
              <span>Icon Font<span class="ssub d-block">Font Awesome (Pro License)</span></span>
            </div>
          </div>`
        },
        {
          title: 'Final Logo',
          content: `<div class="content center-content">
            <i class="icon icon-zestbank-full" style="font-size: 10rem; color: #F87C00"></i>
            <span>Final Logo</span>
          </div>`
        },
        {
          title: 'Shots',
          content: `<div class="content">
            <div class="flex-container my">
              <amp-img width="1828" height="1371" layout="responsive" class="w-100 fl1" src="/resources/img/projects/ZB/shot-1.png"></amp-img>
            </div>
            <div class="flex-container my">
              <amp-img width="1861" height="1396" layout="responsive" class="w-100 fl1" src="/resources/img/projects/ZB/shot-2.png"></amp-img>
            </div>
            <div class="flex-container my">
              <amp-img width="881" height="661" layout="responsive" class="fl1 w-100" src="/resources/img/projects/ZB/shot-3.png"></amp-img>
            </div>
            <div class="flex-container my">
              <amp-img width="881" height="661" layout="responsive" class="fl1 w-100" src="/resources/img/projects/ZB/shot-4.png"></amp-img>
            </div>
          </div>`
        },
        {
          title: 'Mobile App Concepts',
          content: `<div class="flex-container my">
            <amp-img width="881" height="661" layout="responsive" class="fl1 w-100" src="/resources/img/projects/ZB/mobile-1.png"></amp-img>
          </div>
          <div class="flex-container my">
            <amp-img width="881" height="661" layout="responsive" class="fl1 w-100" src="/resources/img/projects/ZB/mobile-2.png"></amp-img>
          </div>`
        }
      ]
    },
    {
      key: 'NDG',
      title: 'Nescafe Dolce Gusto Webstore',
      description: 'E-commerce website to order your coffee pods & machines',
      top: '/resources/img/projects/NDG/top.jpg',
      fullDescription: `<span>
        Reinventing the e-commerce coffee experience.<br/>
        This website offers tons of cofee varieties as well as coffee machines.<br/>
        It presents also the Nescafe-style coffee grinding.
      </span>`,
      wip: false,
      icon: 'icon icon-dolcegusto-logo',
      color: '#653800',
      lighten: '#cb7100',
      darken: '#321c00',
      mobile: '/resources/img/projects/NDG/mobile.png',
      mobileProps: { width: 540, height: 1140 },
      tags: ['E-commerce', 'UI', 'API'],
      dribbbleProject: 1988820,
      links: [
        {
          icon: 'icon icon-github-logo',
          link: 'https://github.com/bchoubert/dolce-gusto-webstore',
          title: 'GitHub'
        },
        {
          icon: 'icon icon-dribbble-logo',
          link: 'https://dribbble.com/bchoubert/projects/1988820-Nescafe-Dolce-Gusto-Webstore',
          title: 'Dribbble Project'
        }
      ],
      technologies: [
        {
          icon: 'icon icon-django-logo',
          title: 'Django'
        },
        {
          icon: 'icon icon-sqlite-logo',
          title: 'SQLite'
        },
        {
          icon: 'icon icon-react-logo',
          title: 'React'
        },
        {
          icon: 'icon icon-materialui-logo',
          title: 'Material UI'
        }
      ],
      details: [
        {
          title: 'Presentation',
          content: `<div class="content center-content my">
              <i class="icon icon-dolcegusto-logo" style="font-size: 8rem; color: #663700"></i>
          </div>
          <div class="flex-container my">
            <amp-img width="1280" height="934" layout="responsive" class="w-100 fl1" src="/resources/img/projects/NDG/pres-1.jpg"></amp-img>
          </div>
          <div class="content center-content my py">
            <i class="icon icon-coffee" style="color: #663700; font-size: 5rem"></i>
            <span class="my" style="color: #663700">A coffee like no other</span>
          </div>
          <div class="flex-container my">
            <amp-img width="1280" height="720" layout="responsive" class="w-100 fl1" src="/resources/img/projects/NDG/pres-2.jpg"></amp-img>
          </div>`
        },
        {
          title: 'Branding',
          content: `<div class="content my center-content">
            <i class="icon icon-dolcegusto-full" style="font-size: 10rem"></i>
            <span>Official Nescafé Dolce Gusto Logo</span>
          </div>
          <div class="flex-container my">
            <span class="fl1 center-content">
              <i class="icon icon-dolcegusto-full-alt" style="font-size: 10rem"></i>
              <span>Simplified Logo</span>
            </span>
            <span class="fl1 center-content my">
              <i class="icon icon-dolcegusto-logo" style="font-size: 10rem"></i>
              <span>Super-simplified logo</span>
            </span>
          </div>`
        },
        {
          title: 'Key Functionalities',
          content: `<div class="content">
            The user can browse trough products:
            <ul>
              <li>He can browse through categories, see product details</li>
              <li>He can add products to his cart</li>
              <li>He can checkout fulfilling a form and receiving a checkout email</li>
            </ul><br/>            
            Administrators can manage and add product, as well as categories.<br/>
            They can also view and edit orders.
          </div>`
        },
        {
          title: 'Wireframing',
          content: `<div class="flex-container">
            <amp-img width="1760" height="2389" layout="responsive" class="fl1 w-100" src="/resources/img/projects/NDG/wireframes.png"></amp-img>
          </div>`
        },
        {
          title: 'Logo Animation',
          content: `<div class="content">
            <span>Thanks to CSS properties that can be applied to SVG paths, the splash screen animation has a "dash-array" animation : 
              the logo build itself at each load of the splashscreen page.</span>
            <div class="flex-container my">
              <amp-img height="150" width="180" class="fl1" style="margin-right: .5rem" src="/resources/img/projects/NDG/anim-1.png"></amp-img>
              <amp-img height="150" width="180" class="fl1" style="margin-right: .5rem" src="/resources/img/projects/NDG/anim-2.png"></amp-img>
              <amp-img height="150" width="180" class="fl1" style="margin-right: .5rem" src="/resources/img/projects/NDG/anim-3.png"></amp-img>
              <amp-img height="150" width="180" class="fl1" style="margin-right: .5rem" src="/resources/img/projects/NDG/anim-4.png"></amp-img>
              <amp-img height="150" width="180" class="fl1" src="/resources/img/projects/NDG/anim-5.png"></amp-img>
            </div>
          </div>`
        },
        {
          title: 'Colors',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #663700"></span>
              <span>Brown: Comfort, Natural, Create Warmth<span class="ssub d-block">#663700</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #D2401E"></span>
              <span>Orange: Stimulate, Creativity, Fun<span class="ssub d-block">#D2401E</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #E0E0E0"></span>
              <span>Gray: Neutral, Formal<span class="ssub d-block">#E0E0E0</span></span>
            </div>
          </div>`
        },
        {
          title: 'Fonts',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-roboto"></i></span>
              <span>Website Font<span class="ssub d-block">Roboto - Google Fonts</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-pod"></i></span>
              <span>Website icons built using Webpack<span class="ssub d-block">Custom Font - 11 icons</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-materialui-logo"></i></span>
              <span>Website icons<span class="ssub d-block">MaterialUI Icons</span></span>
            </div>
          </div>`
        },
        {
          title: 'Final Logo',
          content: `<div class="center-content">
            <i class="icon icon-dolcegusto-full" style="color: #663700; font-size: 5rem"></i>
          </div>`
        },
        {
          title: 'Screenshots',
          content: `<div class="flex-container">
            <amp-img width="1668" height="7782" layout="responsive" class="fl1 w-100" src="/resources/img/projects/NDG/screenshots.png"></amp-img>
          </div>`
        },
        {
          title: 'Technologies',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-react-logo"></i></span>
              <span>React<span class="ssub d-block">JS library to built user interfaces</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-django-logo"></i></span>
              <span>Django<span class="ssub d-block">High-level Python framework for web</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-sqlite-logo"></i></span>
              <span>SQLite<span class="ssub d-block">File-based relational database</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-materialui-logo"></i></span>
              <span>Material UI<span class="ssub d-block">Popular React UI Framework</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-sass-logo"></i></span>
              <span>Sass<span class="ssub d-block">Powerful and stable CSS</span></span>
            </div>
          </div>`
        },
        {
          title: 'Endpoints',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-bars"></i></span>
              <span>/getAllCategories<span class="ssub d-block">Get all categories as a list</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-th-list"></i></span>
              <span>/getCategoryDetails<span class="ssub d-block">Get one category, with its products</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-square"></i></span>
              <span>/getProductDetails<span class="ssub d-block">Get details of a product</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-shapes"></i></span>
              <span>/getProductTypes<span class="ssub d-block">Get all details for a list of types</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-shopping-cart"></i></span>
              <span>/order<span class="ssub d-block">Order the cart</span></span>
            </div>
          </div>`
        },
        {
          title: 'Services',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-shopping-cart"></i></span>
              <span>Cart - Observer Pattern<span class="ssub d-block">Manage all cart-related functions</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-comment"></i></span>
              <span>Message - Observer Pattern<span class="ssub d-block">Launch message toasts</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-exchange-alt"></i></span>
              <span>Network<span class="ssub d-block">Proxy to Back-End endpoint</span></span>
            </div>
          </div>`
        },
        {
          title: 'Database',
          content: `<div class="content">
            This relational database contains 5 tables. Here is the list, with each table attributes (in addition of the id attribute) :
            <ul>
              <li>Category : product categories
                <ul>
                  <li>label - category's label</li>
                  <li>isDrinkCategory - is the category for drinks, or for other products</li>
                </ul>
              </li>
              <li>Product : products table
                <ul>
                  <li>name - product's name</li>
                  <li>shortDescription - product's short description, printed in categories</li>
                  <li>description - product's description, printed in product page</li>
                  <li>type - the type of beverage, if applicable</li>
                  <li>color - main color of the product</li>
                  <li>isLightColor - prints the text in dark mode if color is too light</li>
                  <li>typeColor - type of the beverage, if applicable</li>
                  <li>indicator - water indicator of the pod, if applicable</li>
                  <li>category - product's category id</li>
                </ul>
              </li>
              <li>ProductType - product's type, like color or packaging
                <ul>
                  <li>number - number of pods, if applicable</li>
                  <li>product - product of the type</li>
                  <li>price - price of this type</li>
                  <li>color - color of the product, if applicable</li>
                  <li>name - name of the type, if applicable</li>
                </ul>
              </li>
              <li>Order - order details
                <ul>
                  <li>fullname - Customer's name</li>
                  <li>address - Customer's full address</li>
                  <li>email - Customer's email address</li>
                  <li>sum - Sum of the order when the customer passes the order<br/>
                    useful when products change price after the order was passed</li>
                </ul>
              </li>
              <li>OrderLine - order line
                <ul>
                  <li>order - order's id</li>
                  <li>productType - type of the product of the line</li>
                  <li>quantity - quantity of type ordered</li>
                </ul>
              </li>
            </ul>
          </div>`
        },
        {
          title: 'Custom Icons',
          content: `<div class="flex-container">
            <amp-img width="1515" height="705" layout="responsive" class="fl1 w-100" src="/resources/img/projects/NDG/icons.png"></amp-img>
          </div>`
        },
        {
          title: 'Item Examples',
          content: `<div class="flex-container">
            <amp-img width="1849" height="3974" layout="responsive" class="fl1 w-100" src="/resources/img/projects/NDG/examples.png"></amp-img>
          </div>`
        },
        {
          title: 'Pod Design',
          content: `<div class="content">
            <span class="my d-block">
              Coffee pods are not images, but a component on its own!
              This component can simulates a coffee pod directly from product's attributes.
            </span>
            <div class="flex-container">
              <amp-img width="1501" height="1536" layout="responsive" class="fl1 w-100" src="/resources/img/projects/NDG/pods.png"></amp-img>
            </div>
          </div>`
        }
      ]
    },
    {
      key: 'LO',
      title: 'LogTrack',
      description: 'Complex Logistics ERP: GPS Tracking, invoices, recruitment, maintenance...',
      top: '/resources/img/projects/LO/top.jpg',
      fullDescription: `<span>
        Your everyday logistics partner. LogTrack is an ERP and provides a set of pioneering functionalities for all related workers:<br/>
        Driver, Manager, Dispatcher, Insurer, Accountant, Mechanic...<br/>
        Built with the most modern technologies, LogTrack is a powerful, versatile and user-centered product.
      </span>`,
      wip: true,
      icon: 'icon icon-logtrack-logo',
      color: '#113885',
      lighten: '#1d5edf',
      darken: '#05122b',
      mobile: '/resources/img/projects/LO/mobile.png',
      mobileProps: { width: 405, height: 855 },
      tags: ['ERP', 'Logistics', 'UI'],
      dribbbleProject: 2016530,
      links: [
        {
          icon: 'icon icon-github-logo',
          link: 'https://github.com/bchoubert/logistics',
          title: 'GitHub'
        },
        {
          icon: 'icon icon-globe',
          link: 'https://logtrack.app',
          title: 'Live Version'
        },
        {
          icon: 'icon icon-dribbble-logo',
          link: 'https://dribbble.com/bchoubert/projects/2016530-LogTrack',
          title: 'Dribbble Project'
        }
      ],
      technologies: [
        {
          icon: 'icon icon-firebase-logo-alt',
          title: 'Firebase Cloud Firestore + Real-Time + Auth + Storage + Functions'
        },
        {
          icon: 'icon icon-react-logo',
          title: 'React'
        },
        {
          icon: 'icon icon-openlayers-logo',
          title: 'OpenLayers'
        },
        {
          icon: 'icon icon-sass-logo',
          title: 'Sass'
        }
      ],
      details: [
        {
          title: 'Presentation',
          content: `<div class="content center-content my">
            <i class="icon icon-logtrack-full" style="font-size: 15rem; color: #E4E4E4"></i>
          </div>
          <div class="flex-container my">
            <amp-img width="3300" height="2475" layout="responsive" class="w-100 fl1" src="/resources/img/projects/LO/pres-1.png"></amp-img>
          </div>
          <div class="content center-content my">
            <i class="icon icon-truck" style="color: #E4E4E4"></i>
            <span>An all-in-one website for your daily tasks</span>
          </div>
          <div class="flex-container my">
            <amp-img width="3300" height="2475" layout="responsive" class="fl1 w-100" src="/resources/img/projects/LO/pres-2.png"></amp-img>
          </div>
          <div class="content">
            <div class="indicator-parent my">
              <span class="indicator" style="color: #FF7777"><i class="icon icon-exclamation-triangle"></i></span>
              <span>This is a WIP project. This structurized document may be outdated, and mentions only partially developed or only planned functionalities.</span>
            </div>
          </div>`
        },
        {
          title: 'Original Branding',
          content: `<div class="content center-content my">
            <i class="icon icon-logistics-full" style="color: #E4E4E4; font-size: 12rem"></i>
            <span class="my">Project full-size Logo</span>
          </div>
          <div class="content center-content my">
            <i class="icon icon-logistics-logo" style="color: #E4E4E4; font-size: 8rem"></i>
            <span class="my">Simplified Logo</span>
          </div>`
        },
        {
          title: 'Re-Branding',
          content: `<div class="content center-content my">
            <i class="icon icon-logtrack-full" style="color: #E4E4E4; font-size: 30rem"></i>
            <span class="my">Project full-size Logo</span>
          </div>
          <div class="flex-container my">
            <div class="content center-content my">
              <i class="icon icon-logtrack-logo" style="color: #E4E4E4; font-size: 10rem"></i>
              <span class="my">Simplified Logo</span>
            </div>
            <div class="content center-content my">
              <i class="icon icon-logtrack-full-alt" style="color: #E4E4E4; font-size: 20rem"></i>
              <span class="my">Full-size website Logo</span>
            </div>
          </div>`
        },
        {
          title: 'Colors',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator" style="background-color: #113885"></span>
              <span>Blue: Technology, Trust<span class="ssub d-block">#113885</span></span>
            </div>
          </div>
          <div class="content my">
            When creating a company, the user has to upload a logo.<br/>
            From this logo are automatically extracted all dark colors via the package 'color-thief-node'.<br/>
            These colors will be proposed in the 'Dominant Color' field, which is used to color every component of the application when the user has an active role in this company.<br/>
            Technically, the default color is stored in a CSS variable, that is dynamically overwritten when having an active role.<br/>
            Note: The color gray is always available and selected by default in the 'Dominant Color' field.
          </div>
          <div class="flex-container my">
            <amp-img width="589" height="267" layout="responsive" class="w-100 fl1" src="/resources/img/projects/LO/dominant-color.png"></amp-img>
            <span class="fl1 mx">As an example, main colors of the 'Transports Alainé' logo (under trademark) are extracted, and the red and yellow are proposed in the 'Dominant Color' field</span>
          </div>
          <div class="content my">
            The resulting interface, when having an active role in 'Transports Alainé' company is:
          </div>
          <div class="flex-container">
              <amp-img width="1920" height="979" layout="responsive" class="fl1 w-100" src="/resources/img/projects/LO/dominant-color-result.png"></amp-img>
          </div>`
        },
        {
          title: 'Fonts',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-nunito"></i></span>
              <span>Website Font<span class="d-block ssub">Nunito - Google Fonts</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-fa-flag"></i></span>
              <span>Main website icons<span class="d-block ssub">Font Awesome - Pro License</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-truck"></i></span>
              <span>Custom icons for equipment parts</span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-transportation"></i></span>
              <span>Custom Font<span class="d-block ssub">Transportation Font</span></span>
            </div>
          </div>`
        },
        {
          title: 'Custom Font',
          content: `<div class="flex-container">
            <div class="fl1 1mx my">
              A custom font, the 'transportation-font', is built independently from this project.<br/>
              Linked as a dependency, this font is composed of 50+ characters that permits to categorize every type of semi-trucks and vans:
            </div>
            <amp-img width="921" height="1093" layout="responsive" class="fl1 w-100" src="/resources/img/projects/LO/transportation.png"></amp-img>
          </div>
          <div class="content">
            <span class="d-block my">With this font, we can build every configuration:</span>
            <div class="flex-container">
              <amp-img width="1000" height="1000" layout="responsive" class="fl1 w-100" src="/resources/img/projects/LO/transportation-examples.png"></amp-img>
            </div>
          </div>`
        },
        {
          title: 'Equipment Models',
          content: `<div class="content">
            <span class="d-block my">
              A preview of all equipment models created initially is available to manage equipments.<br/>
              Equipment models created by users can be accessed to everyone.
            </span>
            <div class="flex-container">
              <amp-img width="1585" height="1899" layout="responsive" class="fl1 w-100" src="/resources/img/projects/LO/trucks.png"></amp-img>
            </div>
          </div>`
        },
        {
          title: 'Key Functionalities',
          content: `<div class="content">
            The app contains specific vocabulary:<br/>
            'Equipment' stands for every tool used directly or indirectly by your company, such as trucks, trailers, garage gates, compressor...<br/>
            'Role' is a real work position. For example, a role as a driver in your company<br/>
            'LogTrack' is a general activity of an employee, and can represent either a brief action (refueling) or a longer activity (driving for hours).
          </div>
          <div class="content my">
            The unauthentified user can register, or sign in.<br/><br/>
            The authenticated user can access to a simplified dashboard, search trough all users and companies, 
            chat with other users, modify his profile and settings, manage his active role, request a new role, and create a company.<br/><br/>
            If the user has a role selected, his dashboard is enhanced and company details appear both on top of it and on its menu.
          </div>`
        },
        {
          title: 'Role-based Functionalities',
          content: `Logistics functionalities are based on the user's active role.<br/>
            A role is a current working position at a company. For example, I can have three roles: Driver at Company1, Manager at Company1, and Manager at Company2.<br/>
            Although, I can only have one active role at a time, even if sone roles are linked to the same company.<br/><br/>
            Role List:
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-steering-wheel"></i></span>
              <span>Driver
                <span class="d-block ssub">
                  As a driver, you have access to:
                  <ul>
                    <li>Your LogTrack journal (for both past and upcoming tasks)</li>
                    <li>GPS</li>
                    <li>and you can monitor your assigned equipment</li>
                  </ul>
                </span>
              </span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-user-tie"></i></span>
              <span>Manager
                <span class="d-block ssub">
                  With an active role of manager, you can:
                  <ul>
                    <li>Manage Company's details, as well as warehouses and equipments</li>
                    <li>Manage Employees, with their roles</li>
                    <li>You can also see and monitor all company's employees via their LogTrack.</li>
                    <li>You can also propose and validate a contract and create or pay invoices.</li>
                    <li>Generally, this is the most powerful role of the platform</li>
                  </ul>
                </span>
              </span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-eye"></i></span>
              <span>Observer
                <span class="d-block ssub">
                  As an observer in a company, you are considered as an extern partner of the company<br/>
                  such as an accounting or an insurance company that is not present on the app. You can monitor everything but can edit nothing:
                  <ul>
                    <li>View and monitor Employees, Warehouses and Equipments</li>
                    <li>View all invoices and LogTracks (including incidents)</li>
                  </ul>
                </span>
              </span>
            </div><div class="indicator-parent my">
            <span class="indicator"><i class="icon icon-wrench"></i></span>
            <span>Mechanic
              <span class="d-block ssub">
                A mechanic is able to monitor and manage every equipment of the company, as well as<br/>
                partner companies' equipments when needed:
                <ul>
                  <li>View and manage its own company's equipments</li>
                  <li>View and manage partner companies' equipments that are in status 'NEEDS MAINTENANCE'</li>
                </ul>
              </span>
            </span>
          </div>
          <div class="content my">
            When creating a company, the user becomes both the creator (company's field) and manager of the company (role).<br/>
            This role becomes unrevokable and the creator of the company needs to contact the support if he needs to transfer it.
          </div>
          <div class="content my">
            A user can request a role he doesn't already have via the target company's page.<br/>
            The newly created role is now a DRAFT.<br/>
            This request needs to be CONFIRMED by a manager of this company before becoming available. This step is mandatory, apart if you're already a manager of the target company.<br/>
            When having a confirmed role, a manager can REVOKE your role at any time (i.e. for the end of your contract).
          </div>
          <div class="content my">
            Note: some icons are being integrated into Logistics in order for mechanics to have a better maintenance interface:
          </div>          
          <div class="flex-container my w-100">
            <amp-img width="1509" height="112" layout="responsive" class="fl1 w-100" src="/resources/img/projects/LO/maintenance.png"></amp-img>
          </div>`
        },
        {
          title: `User's settings and profile`,
          content: `<div class="content">
            Every user has his own settings that are stored independently of the company's settings:
          </div>
          <div class="flex-container my">
            <amp-img width="1920" height="979" layout="responsive" class="fl1 w-100" src="/resources/img/projects/LO/settings.png"></amp-img>
          </div>
          <div class="content">
            He can also easily enhance his profile by adding his profile picture, and adding the certifications he obtained and past experience:
          </div>
          <div class="flex-container my">
            <amp-img width="1920" height="979" layout="responsive" class="fl1 w-100" src="/resources/img/projects/LO/profile.png"></amp-img>
          </div>`
        },
        {
          title: 'Support',
          content: `<div class="content">
            <div class="indicator-parent">
              <span class="indicator"><i class="icon icon-comment"></i></span>
              <span>Support is available via the user's profile.
                <span class="ssub d-block">For the moment, only messages are supported and they are recorded into the database.<br/>
                  Some data is automatically computed and added to the message to give more context for the administrator:
                  <ul>
                    <li>userId</li>
                    <li>userName</li>
                    <li>userEmail</li>
                    <li>activeRoleId</li>
                    <li>activeRoleCompanyId (on which company the active role is applied to)</li>
                    <li>activeRole (the nature of the role)</li>
                    <li>date (current datetime, without timezone)</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>`
        },
        {
          title: 'Company Creation',
          content: `<div class="content">
            When creating a company, apart from its name and logo, you will have to choose between three plans.<br/>
            Although at this moment only the "Standard" plan can be chosen, it can give users some ideas on future pricing of the app.
          </div>
          <div class="flex-container my">
            <amp-img width="998" height="1254" layout="responsive" class="w-100 fl1" src="/resources/img/projects/LO/company-creation.png"></amp-img>
          </div>`
        },
        {
          title: 'Invoice & Contract Systems',
          content: `<div class="content">
            Every manager of a company can create a contract.<br/>
            For this, he has to choose the partner company, and to select which company is the exec company (the one that will execute the contract),<br/>
            and the one the order company (the one that will pay the contract once finished).<br/><br/>
            Here are the different statuses of a contract:
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-drafting-compass"></i></span>
              <span>Draft<span class="d-block ssub">A draft is a contract that has been created by one company, but not accepted by the other company yet.</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-play"></i></span>
              <span>Execution<span class="d-block ssub">Normal execution of a contract by the exec company</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-check"></i></span>
              <span>Finished<span class="d-block ssub">Once the execution is finished (noted by the order company)</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-money-bill"></i></span>
              <span>Paid<span class="ssub d-block">Status updated by the exec company once it has been paid</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-archive"></i></span>
              <span>Archived<span class="d-block ssub">The contract can be marked as archived by either company once it has been paid</span></span>
            </div>
            In addition, a contract must for the moment be of one type among following types:
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-wrench"></i></span>
              <span>Maintenance<span class="d-block ssub">Monitoring and Maintenance of the order company by the exec company</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-shipping-fast"></i></span>
              <span>Transportation<span class="d-block ssub">Transportation of various shipments by the exec company</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-hands"></i></span>
              <span>Insurance<span class="d-block ssub">Equipment insured by the exec company</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-calculator"></i></span>
              <span>Accounting<span class="d-block ssub">Accounting of the exec company on the order company</span></span>
            </div>            
          </div>
          <div class="content my">
            Invoices can be attached to a contract while it has the status 'EXECUTION or FINISHED'.
          </div>`
        },
        {
          title: 'Navigation',
          content: `<div class="content">
            The sidebar menu gives an easy access to every relevant page of the app.<br/>
            Depending on the current active role of the user, it is enriched with relevant links.<br/>
            The sidebar menu is defaultly presented expanded, and collapses automatically on tablets. It can alse be configured to always be collapsed.<br/>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-star"></i></span>
              <span>A new version of the navigation, available only on smaller screens, is currently being designed. It will permit to only show a button, that will print the menu with the active role in fullscreen.</span>
            </div>
            <div class="flex-container my">
              <div class="fl1 center-content">
                <amp-img width="192" height="979" src="/resources/img/projects/LO/menu-extended.png"></amp-img>
                <span>Extended version</span>
              </div>
              <div class="fl1 center-content">
                <amp-img width="56" height="979" src="/resources/img/projects/LO/menu-collapsed.png"></amp-img>
                <span>Collapsed version</span>
              </div>
            </div>
          </div>`
        },
        {
          title: 'Dashboard',
          content: `<div class="content">
            Depending of the current active role, the dashboard is enhanced with relevant data.<br/>
            By default, the dashboard of a manager looks like this:
            <div class="flex-container my">
              <amp-img width="1920" height="979" layout="responsive" class="w-100 fl1" src="/resources/img/projects/LO/dashboard.png"></amp-img>
            </div>
            We can retrieve some data, like the active role, the number of warehouses, employees and equipments with direct links to management pages.<br/>
            Some links are also present to have a fast access to the profile, the chat, alerts, requested roles, and logtracks of employees.<br/>
            Optionally, the user may want to have the weather on his dashboard.
          </div>`
        },
        {
          title: 'LogTrack',
          content: `<div class="content">
            As previously defined, a LogTrack is an activity of an employee. It can be a punctual event, like refueling, or a longer activity, like several driving hours.<br/><br/>
            Each employee is responsible of his own logbook. LogTrack are categorized:
            <div class="indicator-parent">
              <span class="indicator"><i class="icon icon-pause"></i></span>
              <span>Pause</span>
            </div>
            <div class="flex-container my" style="max-height: 80px">
              <amp-img width="272" height="80" class="fl1 w-100" style="max-height: 80px; max-width: 272px; margin-left: 0" src="/resources/img/projects/LO/lt-pause.png"></amp-img>
            </div>
            <span class="d-block ssub">
              Sleep, Eat, Parked
            </span>
            <div class="indicator-parent">
              <span class="indicator"><i class="icon icon-wrench"></i></span>
              <span>Service</span>
            </div>
            <div class="flex-container my" style="max-height: 80px">
              <amp-img width="371" height="80" class="fl1 w-100" style="max-height: 80px; max-width: 371px; margin-left: 0" src="/resources/img/projects/LO/lt-service.png"></amp-img>
            </div>
            <span class="d-block ssub">
              Fix, Ready for service, Ending service, Maintenance
            </span>
            <div class="indicator-parent">
              <span class="indicator"><i class="icon icon-calendar-times"></i></span>
              <span>Not available</span>
            </div>
            <div class="flex-container my" style="max-height: 80px">
              <amp-img width="177" height="80" class="fl1 w-100" style="max-height: 80px; max-width: 177px; margin-left: 0" src="/resources/img/projects/LO/lt-not-available.png"></amp-img>
            </div>
            <span class="d-block ssub">
              Absent, Waiting
            </span>
            <div class="indicator-parent">
              <span class="indicator"><i class="icon icon-play"></i></span>
              <span>Operation</span>
            </div>
            <div class="flex-container my" style="max-height: 80px">
              <amp-img width="550" class="fl1 w-100" height="80" style="max-height: 80px; max-width: 550px; margin-left: 0" src="/resources/img/projects/LO/lt-operation.png"></amp-img>
            </div>
            <span class="d-block ssub">
              Recharging, Refueling, Weight, Wash, Loading, Unloading
            </span>
            <div class="indicator-parent">
              <span class="indicator"><i class="icon icon-steering-wheel"></i></span>
              <span>Driving</span>
            </div>
            <div class="flex-container my" style="max-height: 80px">
              <amp-img class="fl1 w-100" width="180" height="80" style="max-height: 80px; max-width: 180px; margin-left: 0" src="/resources/img/projects/LO/lt-driving.png"></amp-img>
            </div>
            <span class="d-block ssub">
              Transiting, Commuting
            </span>
            <div class="content">
              Other categories are being developed, like a category concerning specific problems:
            </div>
            <div class="flex-container my" style="max-height: 160px">
              <amp-img width="602" height="160" class="fl1 w-100" style="max-height: 160px; max-width: 602px; margin-left: 0" src="/resources/img/projects/LO/lt-problems.png"></amp-img>
            </div>
          </div>`
        },
        {
          title: 'Technologies',
          content: `<div class="content">
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-react-logo"></i></span>
              <span>React<span class="d-block ssub">JS library to built user interfaces</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-firebase-logo-alt"></i></span>
              <span>Firebase<span class="d-block ssub">Online database, authentication and storage.<br/>
                For the moment, are used: Firestore (document-based database), authentication (user signin, signup and sign out), storage (file storage, user spaced) and functions (processes on database and storage).<br/>
                Every service provided by Firebase has a full layer of security that provides interesting capabilities to limit users' rights.<br/>
                It is planned to use Firebase Real-Time database for chat messages and alerts. That's not the case at the moment.</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-openlayers-logo"></i></span>
              <span>OpenLayers<span class="d-block ssub">Open-source JavaScript library for displaying maps</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-sass-logo"></i></span>
              <span>Sass<span class="d-block ssub">CSS, more flexible and powerful</span></span>
            </div>
          </div>`
        },
        {
          title: 'APIs',
          content: `<div class="content">
            <div class="indicator-parent">
              <span class="indicator"><i class="icon icon-openweather-logo"></i></span>
              <span>OpenWeather<span class="d-block ssub">This API is used to fetch the current weather at user's location.<br/>
                To limit API calls, the weather is cached into Firestore (Firebase database) and is fetched only through the API if the user's location has not been fetched yet,<br/>
                or if the weather is out-of-date.</span></span>
            </div>
          </div>`
        },
        {
          title: 'Routing',
          content: `<div class="content">
            <div class="indicator-parent">
              <span class="indicator"><i class="icon icon-react-logo"></i></span>
              <span>React Router DOM
                <span class="d-block ssub">Famous Router for React<br/>
                  This router provides the Route class to be used for every endpoint of the app.<br/>
                  In an additional layer, I developed the PrivateRoute class that redirects non-logged in users to the sign in page.<br/>
                  I also developed the RoleLimitedRoute class that takes a role array. If the user is logged in and if his active role is part of this array, he is routed correctly.<br/>
                  Otherwise, he is redirected to his dashboard (or the signin page if not signed in).<br/><br/>
                  These two classes, additionally to the class provided by the react-router-dom package, provides efficient ways to limit user access through the app.
                </span>
              </span>
            </div>
          </div>`
        },
        {
          title: 'Real-Time data',
          content: `<div class="content">
            <div class="indicator-parent">
              <span class="indicator"><i class="icon icon-firebase-logo-alt"></i></span>
              <span>Firebase provides an efficient way to real-time updates.<br/>
                Real-Time is a way to register a listener function that will be called each time data is modified.<br/>
                With Firebase Real-Time database, you can register a query that will call a callback everytime results are different.<br/><br/>
                For the moment, real-time data is not integrated into Logistics, but I aim to provide real-time alerts and chat messages,<br/>
                instead of the current version that fetch an endpoint provided by Firebase Functions every 5 to 10 seconds. This migration is currently being designed.</span>
            </div>
          </div>`
        },
        {
          title: 'Map',
          content: `<div class="content">
            <div class="indicator-parent">
              <span class="indicator"><i class="icon icon-openlayers-logo"></i></span>
              <span>A map component that uses OpenWeather is part of the app. Used in several screens, it needs to be intialized via reference.<br/>
              It provides numerous functions to manage the center, zoom and heading of the map, as well as map features (markers, lines, shapes drawn on top of it, along with their popups)</span>
            </div>
          </div>`
        },
        {
          title: 'Services',
          content: `<div class="content">
            One service is already developed by collection. It provides useful data to create, read, update and delete (if applicable) documents, plus custom fetch functions.<br/>
            In addition, these services contains right management details for every action the user can do.<br/><br/>
            Other services are developed and answer specific problematics:
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-swatchbook"></i></span>
              <span>ColorService<span class="ssub d-block">Used to filter colors and to extract main colors from an image</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-bars"></i></span>
              <span>DataService<span class="ssub d-block">Used to pre compute data linked to the user (active role, active role company, user details).<br/>
              This data permits to ask the database once and to keep data available every time we need it.<br/>
              Using a singleton pattern, the call of computed data fetch data only the first time, then it keeps it.<br/>
              Utility funcitons are available to invalidate data (for example when the current active role is changed).</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-calendar"></i></span>
              <span>DateService<span class="ssub d-block">Several functions to format and process date operations</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-exclamation-triangle"></i></span>
              <span>ErrorService<span class="ssub d-block">Used to manage errors and warnings and responsible of printing user-friendly errors.<br/>
                Automatic error reporting is being designed.</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-file-user"></i></span>
              <span>FileService<span class="ssub d-block">Used to store documents in the user-space. Firebase Storage provides an efficiant way to restrict user access.<br/>
                Each user, when signing up, is gived a user storage folder (named by his id). He has the right to read every user space, but can write only to his own space.<br/>
                This service provides a way to upload files to his user space.</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-firebase-logo-alt"></i></span>
              <span>FirebaseService<span class="ssub d-block">This service is used to initialize global Firebase objects, as well as providing user authentication functions.</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-map"></i></span>
              <span>GeoService<span class="ssub d-block">Used to store third-party tile layers configurations (from Bing, CartoDB...)<br/>
                as well as giving access to utility functions (data coordinates transformation, bounding boxes computes...)</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-hdd"></i></span>
              <span>LocalStorageService<span class="ssub d-block">Provides functionalities to put and retrieve data stored in the local storage.</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-window"></i></span>
              <span>ModalService<span class="ssub d-block">Launching modals and listening from user events in modals are never been so simple with this service.</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-check"></i></span>
              <span>PermissionService<span class="ssub d-block">Used to ask specific permissions from the browser, like location.<br/>
                Using the observer pattern, every location listener is called at the same time when the user's position is changed.</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-map-marker"></i></span>
              <span>PlacesService<span class="ssub d-block">Provides places search anf geocoding from the Nominatim package.</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-expand-arrows-alt"></i></span>
              <span>ResizeService<span class="ssub d-block">Service that uses the observer pattern to call every listener that needs to know when the window has been moved or resized.<br/>
                Useful for components that cannot be developed with CSS responsiveness in mind (Map for example).</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-play"></i></span>
              <span>RightService<span class="ssub d-block">Provides a utility functions that check if a user has a specific right.<br/>
                It stores right dependency tree as well.</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-cog"></i></span>
              <span>SettingsService<span class="ssub d-block">Used to store, retrieve and print settings.</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-wrench"></i></span>
              <span>UtilsService<span class="ssub d-block">More utility functions to manage arrays, JS events and strings.</span></span>
            </div>
            <div class="indicator-parent my">
              <span class="indicator"><i class="icon icon-openweather-logo"></i></span>
              <span>WeatherService<span class="ssub d-block">Used to interact with OpenWeather API endpoints to get the weather at user's location.</span></span>
            </div>
          </div>`
        },
        {
          title: 'Firebase Security',
          content: `<div class="content">
            Each functionality provided by Firebase has a full security layer I need to develop.<br/>
            It provides a way to differentiate all possible actions on every collection: get one document, list several documents, create a document, update a document or delete it.<br/>
            For examples (not exhaustive and voluntarily not fully accurate), I have limited the rights on Firestore (online document-based database):
            <ul>
              <li>Brands collection can only be read or listed</li>
              <li>A company can: be created, got and listed by every signed in user, updated if the active role of the user is a manager on this company, and cannot be deleted.</li>
              <li>A contract: can be created and updated if the current active role is a manager for either company, can be got and listed if the current active role is on the company, and cannot be deleted.</li>
              <li>A role can be created if: the user is the user related for this role and the role status is draft (needs to be confirmed by a manager),<br/>
                or if the active role is a manager for the target company, or if the related user is the creator of the target company.</li>
              <li>...</li>
            </ul>
          </div>`
        }
      ]
    }
  ],
  services: [
    {
      title: 'Website Development',
      description: 'Your Website, from first specifications to online & maintenance.',
      icon: 'icon icon-desktop',
      color: '#2962FF',

    },
    {
      title: 'Data Structure & Algorithms',
      description: '',
      icon: 'icon icon-cog',
      color: '#00BFA5'
    },
    {
      title: 'Branding & Graphic Design',
      description: 'Your identity ',
      icon: 'icon icon-paint-brush',
      color: '#FF6D00'
    }
  ],
  skills: [
    {
      title: 'Front-End',
      color: '#2962FF',
      description: 'Solid experience in Web Development (first professional website in 2006). Able to build fast and responsive websites based on reusable components and complex architecture.',
      icon: 'icon icon-desktop',
      expertise: true,
      technologies: [
        {
          icon: 'icon icon-css-logo',
          title: 'CSS (Sass, Less, BEM)'
        },
        {
          icon: 'icon icon-javascript-logo-alt',
          title: 'JavaScript, TypeScript, React, Angular, Vue, Svelte'
        },
        {
          icon: 'icon icon-bootstrap-logo',
          title: 'Bootstrap, MDBootstrap, Material UI, PureCSS'
        },
        {
          title: 'NPM Modules, Yarn, WebPack, Gulp, Grunt'
        }
      ],
      list: [
        'Accessibility',
        'Progressive Web Apps',
        'Pixel-perfect implementations',
        'Responsive Websites',
        'Audits',
        'Performance & SEO'
      ]
    },
    {
      title: 'Back-End',
      color: '#00BFA5',
      description: 'Able to create fast and secure algorithms, use Design Patterns, and synchronized and asynchronized processing.',
      icon: 'icon icon-cog',
      expertise: true,
      technologies: [
        {
          icon: 'icon icon-javascript-logo-alt',
          title: 'NodeJS, Express, Adonis, NestJS'
        },
        {
          icon: 'icon icon-java-logo',
          title: 'Java, Spring'
        },
        {
          icon: 'icon icon-php-logo',
          title: 'PHP, Symfony, Laravel'
        },
        {
          icon: 'icon icon-python-logo',
          title: 'Python, Flask, Django'
        },
        {
          icon: 'icon icon-firebase-logo-alt',
          title: 'Firebase'
        }
      ],
      list: [
        'API & Protocols',
        'REST, CRUD, Web Services',
        'Async & Socket processing'
      ]
    },
    {
      title: 'UI Design',
      color: '#FF6D00',
      description: 'Strong knowledge of both Graphic & UI Design. Recognized to have out of the box ideas as well as trend and functionality in mind. Able to audit websites and to create both graphic and UI design.',
      icon: 'icon icon-paint-brush',
      expertise: true,
      technologies: [
        {
          icon: 'icon icon-xd-logo',
          title: 'Adobe Xd'
        },
        {
          icon: 'icon icon-protoio-logo',
          title: 'ProtoIO'
        },
        {
          icon: 'icon icon-poweruser-logo',
          title: 'Power User'
        },
        {
          icon: 'icon icon-inkscape-logo',
          title: 'Inkscape'
        },
        {
          icon: 'icon icon-affinity-photo-logo',
          title: 'Affinity Photo'
        },
        {
          icon: 'icon icon-affinity-designer-logo',
          title: 'Affinity Designer'
        },
        {
          icon: 'icon icon-gimp-logo',
          title: 'Gimp'
        },
        {
          title: 'Wireframe CC'
        }
      ],
      list: [
        'Automatic Font Creation',
        'Complex Prototyping',
        'Branding',
        'Color Schemes'
      ]
    },
    {
      title: 'Web Marketing',
      color: '#5C1678',
      icon: 'icon icon-search-dollar',
      expertise: false,
      list: [
        'Google Analytics',
        'Call-To-Action',
        'Target Audience',
        'Personas',
        'A/B Testing',
        'SEO',
        'Advertising Campaigns'
      ]
    },
    {
      title: 'Databases',
      color: '#DD2C00',
      icon: 'icon icon-database',
      expertise: false,
      technologies: [
        {
          icon: 'icon icon-mysql-logo',
          title: 'MySQL'
        },
        {
          icon: 'icon icon-oracle-logo',
          title: 'Oracle'
        },
        {
          icon: 'icon icon-hfsql-logo',
          title: 'HFSQL'
        },
        {
          icon: 'icon icon-mongodb-logo',
          title: 'MondoDB'
        },
        {
          icon: 'icon icon-redis-logo',
          title: 'Redis'
        },
        {
          icon: 'icon icon-postgre-logo',
          title: 'PostgreSQL'
        },
        {
          icon: 'icon icon-sqlite-logo',
          title: 'SQLite'
        },
        {
          icon: 'icon icon-firebase-logo-alt',
          title: 'Firebase Real-Time & Firestore'
        }
      ]
    },
    {
      title: 'Ops',
      color: '#cfbe00',
      icon: 'icon icon-server',
      expertise: false,
      technologies: [
        {
          icon: 'icon icon-apache-logo',
          title: 'Apache'
        },
        {
          icon: 'icon icon-tomcat-logo',
          title: 'Tomcat'
        },
        {
          icon: 'icon icon-lets-encrypt-logo',
          title: 'Let\'s Encrypt'
        },
        {
          icon: 'icon icon-google-cloud-logo',
          title: 'Google Cloud'
        },
        {
          icon: 'icon icon-aws-logo',
          title: 'AWS'
        }
      ]
    },
    {
      title: 'Machine Learning',
      color: '#0091EA',
      icon: 'icon icon-microchip',
      expertise: false,
      technologies: [
        {
          icon: 'icon icon-hadoop-logo',
          title: 'Hadoop'
        },
        {
          icon: 'icon icon-mapreduce-logo',
          title: 'MapReduce'
        },
        {
          icon: 'icon icon-qliksense-logo',
          title: 'QlikSense'
        },
        {
          icon: 'icon icon-qlikview-logo',
          title: 'QlikView'
        }
      ]
    },
    {
      title: 'Mobile',
      color: '#00C853',
      icon: 'icon icon-mobile',
      expertise: false,
      technologies: [
        {
          icon: 'icon icon-android-logo',
          title: 'Android'
        },
        {
          icon: 'icon icon-react-native-logo',
          title: 'React Native'
        },
        {
          icon: 'icon icon-expo-logo',
          title: 'Expo'
        }
      ]
    }
  ]
};

module.exports = data;
