function validateSections(sdlObject) {
    if (!sdlObject.sections || !Array.isArray(sdlObject.sections)) {
        throw new Error("Missing or invalid 'sections' array");
    }

    sdlObject.sections.forEach((section, index) => {
        if (!section.title) {
            throw new Error(`Missing title in section at index ${index}`);
        }

        if (!Array.isArray(section.questions)) {
            throw new Error(`Missing or invalid 'questions' array in section at index ${index}`);
        }
    });
}


module.exports = validateSections;
