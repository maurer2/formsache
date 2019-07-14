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
    "jsx-a11y/label-has-for": [ "warning", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    "jsx-a11y/label-has-associated-control": [ "warning", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }]
    "object-curly-newline": ["warning", {
      "ObjectExpression": "always",
      "ObjectPattern": { "multiline": true },
      "ImportDeclaration": "never",
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
  }]
  },
}