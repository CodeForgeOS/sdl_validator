const parseSDL = require('./parseSDL');
const validateCoreStructure = require('./validateCoreStructure');
const validateSections = require('./validateSections');
const { validateQuestions } = require('./validateQuestions');

function validate_sdl(sdlString) {
    try {
        const sdlObject = parseSDL(sdlString);
        validateCoreStructure(sdlObject);

        if (sdlObject.questions && Array.isArray(sdlObject.questions)) {
            validateQuestions(sdlObject.questions);
        } else if (sdlObject.sections) {
            validateSections(sdlObject);
            sdlObject.sections.forEach(section => {
                if (section.questions && Array.isArray(section.questions)) {
                    validateQuestions(section.questions);
                }
            });
        } else {
            throw new Error("SDL must have either a 'questions' array or 'sections' array");
        }

        return { isValid: true };
    } catch (error) {
        return { isValid: false, errors: error.message };
    }
}

module.exports = validate_sdl;
