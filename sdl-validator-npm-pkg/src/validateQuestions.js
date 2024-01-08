function validateQuestions(questions) {
    questions.forEach((question, questionIndex) => {
        validateQuestionType(question, 0, questionIndex); // Section index is 0 for flat structure
    });
}

function validateQuestionType(question, sectionIndex, questionIndex) {
    if (!question["@type"] || question["@type"] !== "Question") {
        throw new Error(`Invalid @type for question at section ${sectionIndex}, question ${questionIndex}`);
    }

    const baseErrorMsg = `Error in question at section ${sectionIndex}, question ${questionIndex}: `;

    switch (question.questionType) {
        case "Text":
        case "Binary":
            if (typeof question.isRequired !== "boolean") {
                throw new Error(`${baseErrorMsg}Missing or invalid 'isRequired'`);
            }
            break;
        case "Single Choice":
        case "Checkbox":
        case "Dropdown":
        case "Likert Scale":
            if (!Array.isArray(question.options) || question.options.length === 0) {
                throw new Error(`${baseErrorMsg}Missing or empty 'options' array`);
            }
            if (typeof question.isRequired !== "boolean") {
                throw new Error(`${baseErrorMsg}Missing or invalid 'isRequired'`);
            }
            break;
        case "Rating":
            if (typeof question.scale !== "number" || question.scale <= 0) {
                throw new Error(`${baseErrorMsg}Invalid 'scale' value`);
            }
            if (typeof question.isRequired !== "boolean") {
                throw new Error(`${baseErrorMsg}Missing or invalid 'isRequired'`);
            }
            break;
        case "Slider":
            if (typeof question.minValue !== "number" || typeof question.maxValue !== "number") {
                throw new Error(`${baseErrorMsg}Missing or invalid 'minValue' or 'maxValue'`);
            }
            if (question.minValue >= question.maxValue) {
                throw new Error(`${baseErrorMsg}'minValue' should be less than 'maxValue'`);
            }
            if (typeof question.isRequired !== "boolean") {
                throw new Error(`${baseErrorMsg}Missing or invalid 'isRequired'`);
            }
            break;
        case "Date Picker":
            if (!question.dateFormat || typeof question.dateFormat !== "string") {
                throw new Error(`${baseErrorMsg}Missing or invalid 'dateFormat'`);
            }
            if (typeof question.isRequired !== "boolean") {
                throw new Error(`${baseErrorMsg}Missing or invalid 'isRequired'`);
            }
            break;
        default:
            throw new Error(`${baseErrorMsg}Unknown question type '${question.questionType}'`);
    }
}

module.exports = { validateQuestions, validateQuestionType };
