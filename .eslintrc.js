module.exports = {
  "extends": [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
  ],
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
        ]
      }
    ],
    "jsx-a11y/label-has-for": [ "warn", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    "jsx-a11y/label-has-associated-control": [ "warn", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    "object-curly-newline": ["warn", {
      "ObjectExpression": "always",
      "ObjectPattern": { "multiline": true },
      "ImportDeclaration": "never",
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
  }]
  },
}