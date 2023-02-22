const xcode = require('xcode');
const semver = require('semver');
const fs = require('fs');
const path = require('path');

const PROJECT_DIR = process.cwd();
const packageJson = require(path.join(PROJECT_DIR, 'package.json'));
const appJson = require(path.join(PROJECT_DIR, 'app.json'));
const PROJECT_NAME = appJson.name.replace(/ /g, '');
const XCODE_PROJECT_DIR = path.join('ios', `${PROJECT_NAME}.xcodeproj`);

const PROJECT_FILE = 'project.pbxproj';

const PROJECT_MARKETING_VERSION = 'MARKETING_VERSION';
const PACKAGE_JSON_VERSION_PARAM = packageJson.version;

function increaseVersion(version) {
  if (!semver.valid(version)) {
    throw new Error('Wrong Version, use semver valid version');
  }
  let parsedProject;

  try {
    parsedProject = new xcode.project(
      path.join(PROJECT_DIR, XCODE_PROJECT_DIR, PROJECT_FILE),
    );
    parsedProject.parseSync();
  } catch (e) {
    throw new Error(e);
  }

  if (typeof parsedProject === 'object') {
    parsedProject.updateBuildProperty(PROJECT_MARKETING_VERSION, version);

    fs.writeFileSync(
      path.join(PROJECT_DIR, XCODE_PROJECT_DIR, PROJECT_FILE),
      parsedProject.writeSync(),
      'utf-8',
    );
  }
}

increaseVersion(PACKAGE_JSON_VERSION_PARAM);
