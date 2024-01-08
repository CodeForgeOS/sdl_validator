function validateCoreStructure(sdlObject) {
    // Validate Survey properties
    if (!sdlObject['@context']) throw new Error("Missing '@context' property in Survey");
    if (typeof sdlObject['@context'] !== 'string') throw new Error("'@context' property must be a string");

    if (!sdlObject['@id']) throw new Error("Missing '@id' property in Survey");
    if (typeof sdlObject['@id'] !== 'string') throw new Error("'@id' property must be a string");

    if (sdlObject['title'] && typeof sdlObject['title'] !== 'string') throw new Error("'title' property must be a string");

    if (sdlObject['description'] && typeof sdlObject['description'] !== 'string') throw new Error("'description' property must be a string");

    // Validate Sections if present
    if (sdlObject['sections']) {
        if (!Array.isArray(sdlObject['sections'])) throw new Error("'sections' must be an array");

        sdlObject['sections'].forEach((section, index) => {
            if (section['title'] && typeof section['title'] !== 'string') {
                throw new Error(`'title' property in section ${index} must be a string`);
            }

            if (!section['questions']) {
                throw new Error(`Missing 'questions' property in section ${index}`);
            }

            if (!Array.isArray(section['questions'])) {
                throw new Error(`'questions' property in section ${index} must be an array`);
            }
        });
    }
}

module.exports = validateCoreStructure;
