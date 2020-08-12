
module.exports = {
    verbose: true,
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ],
    testEnvironment: "enzyme",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest"
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$"
    ],
    moduleNameMapper: {
        "^react-native$": "react-native-web",
        "^.+\\.(css|less|scss)$": "identity-obj-proxy",
        "src/(.*)$": "<rootDir>/src/$1"
    }
};
