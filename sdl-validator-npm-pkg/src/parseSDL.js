function parseSDL(sdlString) {
    try {
        return JSON.parse(sdlString);
    } catch (error) {
        throw new Error("Invalid JSON format");
    }
}

module.exports = parseSDL;
