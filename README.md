# POC of form handling with Formik

## Getting Started

Be carefull this demo uses `npm` as package manager!

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design

### Key points

- Uses Formik, well known React framework for handling forms with controlled input pattern
- 3 types of components here :
  - Form views components (`src/views/`) : Implementation of form, the only part which is aware of business logic, and specific to each implementation
  - Design system components (`src/design-system/`) : Only UI purpose, no logic, native input controlled.
  - Widgets & Formik relative components (`src/form`) : Plugs design system components to the Formik data flow and logic. Still generic and not aware of any kind of business logic

### Requirements

This POC aims to fullfill the pre-established following requirements :

- [x] Form values must be accessible, exploitable and typed at any time
- [x] Form values must be typed at any point, input & output
- [x] Form values must not mutate
- [x] All the form component must hold no business logic
- [x] Form composition must be defined at implementation
- [x] All Form components must be testable independently
- [x] All inputs / select / dropdowns / etc… should be reusable outside the Form system
- [x] onSubmit event handler should not be triggered if a Promise is not resolved from a previous onSubmit execution
- [x] Form’s components should not handle layout, which should be implementation specific
- [x] Form widgets can be dynamically visible or optional depending on specific values
- [x] Should handle object in form data
- [x] prefill form with data from promise
- [x] Server side validation is displayed to the user
- [x] Validation can be done with zod schema
- [x] Validation can be done manually

### Advantages

- Reusability very high
- Adapt well to every implementations or any kind input (native or custom)
- Quick and easy validation with zod + more advanced validation possible with custom function
- No limitations for different form layout
- Fully typed
- Fully extensible for more complex and specific usecases
- model segregation easy to implement

### Limitations and Drawbacks

- Overall design generates a lot of components (but ensure any kind of reusability - I think it's more than fine).
- Any input updates generates a render. On large and complex forms it could lead to rendering performance issues. It is the counter part of giving access to the form values during the whole form lifecycle. Should be fine in most cases.
- Implementation stays verbose (it could be less verbose, but less extensible).
- Server side validation disapear on the first values update (could be improved, with a complex pattern I've already done in a previous life).

## Examples

### [http://localhost:3000](http://localhost:3000)

- Basic implementation
- Very generic on the component definition, specific on the instances, declarative by design
- Dynamic field rendering with conditional rendering
- Form validation with zod schema
- Randomly the mocked HTTP request after form submission can return errors which are displayed afterwards
- Entry point : `src/views/LoginForm/index.tsx`

### [http://localhost:3000/profile](http://localhost:3000/profile)

- Add validation critera in addition of the zod schema (to check if both password widget shares the same value)
- Get initialValues from Promise (mocking HTTP request)
- Entry point : `src/views/ProfileForm/index.tsx`
