
const data = require('./data/data.js');

const pug = require('pug'),
  fs = require('fs'),
  ncp = require('ncp').ncp,
  process = require('process');

const SRC_FOLDER = 'src/', OUTPUT_FOLDER = 'dist/';
const PAGES_TO_COMPILE = ['index', 'test'];

const errorHandler = console.error;

const FUNCTIONS = {
  'BUILD': () => {
    // MAKE SURE THE OUTPUT DIRECTORY AND THE PAGES INSIDE IT ARE HERE
    if(!fs.existsSync(OUTPUT_FOLDER)) {
      fs.mkdirSync(OUTPUT_FOLDER);
    }

    if(!fs.existsSync(OUTPUT_FOLDER + 'pages')) {
      fs.mkdirSync(OUTPUT_FOLDER + 'pages');
    }

    // COMPILE CUSTOM STYLES
    let CUSTOM_STYLES = fs.readFileSync(SRC_FOLDER + 'styles/styles.min.css', { encoding:'utf8', flag:'r' });
    CUSTOM_STYLES += fs.readFileSync(SRC_FOLDER + 'resources/custom-font/dist/chbe-font.css', { encoding:'utf8', flag:'r' });
    data.customStyles = CUSTOM_STYLES.replace(/\n/g, '')
                                      .replace(/\!important/g, '')
                                      .replace(/url\("chbe-font.([a-z0-9#?-]+)"\)/g, 'url("/resources/custom-font/dist/chbe-font.$1")');

    // COMPILE PAGES
    PAGES_TO_COMPILE.forEach(page => 
      fs.writeFile(`${OUTPUT_FOLDER}${page}.html`, pug.compileFile(`${SRC_FOLDER}views/${page}.pug`)({ data }), errorHandler));

    // COMPILE SPECIFIC PAGES
    data.projects.forEach(project => 
      fs.writeFile(`${OUTPUT_FOLDER}/pages/${project.key}.html`, pug.compileFile(`${SRC_FOLDER}views/project.pug`)({ data, project }), errorHandler));

    console.log('Build Successful!');
  },
  'COPY': () => {
    // LINK RESOURCES
    ncp(SRC_FOLDER + 'resources', OUTPUT_FOLDER + 'resources', { clobber: true }, err => {
      if(err) {
        errorHandler(err);
        throw err;
      }

      console.log('Copy Successful!');
    });
  }
};

// CALL APPROPRIATE FUNCTION
FUNCTIONS[process.argv[2]]();
