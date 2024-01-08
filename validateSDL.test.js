const parseSDL = require('./src/parseSDL');
const validateCoreStructure = require('./src/validateCoreStructure');
const { validateQuestions, validateQuestionType } = require('./src/validateQuestions');
const validate_sdl = require('./index');

const validSDL = `{
  "@context": "http://example.com/sdl",
  "@id": "survey1",
  "title": "Sample Survey",
  "questions": [
    {
      "@type": "Question",
      "questionText": "What is your favorite color?",
      "questionType": "Single Choice",
      "options": ["Red", "Blue", "Green"],
      "isRequired": true
    }
  ]
}`;

const invalidSDL = `{ "invalid": "data }`;

describe('SDL Validator', () => {
  describe('parseSDL', () => {
    it('should parse a valid SDL string', () => {
      const sdlObject = parseSDL(validSDL);
      expect(sdlObject).toHaveProperty('@context');
    });

    it('should throw an error for invalid SDL string', () => {
      expect(() => parseSDL(invalidSDL)).toThrow("Invalid JSON format");
    });
  });

  describe('validateCoreStructure', () => {
    it('should validate a valid SDL object', () => {
      const sdlObject = parseSDL(validSDL);
      expect(() => validateCoreStructure(sdlObject)).not.toThrow();
    });
  });

  describe('validateQuestions', () => {
    it('should validate valid questions array', () => {
      const sdlObject = parseSDL(validSDL);
      expect(() => validateQuestions(sdlObject.questions)).not.toThrow();
    });
  });

  describe('validateQuestionType', () => {
    it('should validate a valid question type', () => {
      const sdlObject = parseSDL(validSDL);
      const question = sdlObject.questions[0];
      expect(() => validateQuestionType(question, 0, 0)).not.toThrow();
    });
  });

  describe('validate_sdl', () => {
    it('should return valid for a valid SDL string', () => {
      const result = validate_sdl(validSDL);
      expect(result.isValid).toBeTruthy();
    });

    it('should return invalid for an invalid SDL string', () => {
      const result = validate_sdl(invalidSDL);
      expect(result.isValid).toBeFalsy();
    });
  });
});