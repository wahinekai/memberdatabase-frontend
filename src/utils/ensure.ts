// Tests to see whether a string is null or whitespace
const isNotNullOrWhitespace = (input: string) => {
    input = isNotNull(input)

    if (input === "") {
        throw new Error("input is an empty string")
    }

    if (input.trim() === "") {
        throw new Error ("input is all whitespace")
    }

    return input
}

// Checks to see if something is null or undefined
const isNotNull = (input: any) => {
    if (input === null) {
        throw new Error("input is null")
    }

    if (typeof input === 'undefined') {
        throw new Error("input is undefined")
    }

    return input
}

// Checks to see if an array is null or empty
const isNotNullOrEmpty = (input: any[]) => {
    input = isNotNull(input);

    if (!input.length) {
        throw new Error("input is empty")
    }

    return input
}

export {
    isNotNull,
    isNotNullOrEmpty,
    isNotNullOrWhitespace
}