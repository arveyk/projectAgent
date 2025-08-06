# For local development:

---

1. In `package.json`, add any new functions as targets to the `dev` script:
   `"dev": "functions-framework --target YOUR_FUNCTION_NAME "`
2. Run `npm run dev`

# Testing:

Run `npm run test`

## <-- ADDITIONAL FILES -->

projectAgent/projectAgent-Node/helloworld

## contents

- _.env_
- _.gitignore_
- _index.js_
- _node_modules/_
- _package-lock.json_
- _package.json_
- _routes/_
  - _events/_
  - _auth/_
  - _event.js_
  - _slashcmd.js_
  - _tasks/_
- _server.js_

---

> The helloworld directory is used for local testing for small features that are to be intergrated into the main projectAgent-Node directory.
> It is not mandatory that you use it for you own testing and development
> There are some differences in how projectAgent is implemented in this directory since it is still using slack bolt.
> In the case that we need to move it to a separate directory please feel free to reach out to Harvey.

Handling user Interactions

if (request.body.actions.selected_option is defined )
second block.action
if (request,body.actions.text is defined)
first block
