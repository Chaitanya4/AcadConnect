# AcadConnect

AcadConnect is a MERN Stack based web app that helps in establishing a connection between academia and industry. It allows users to select there roles (academic student/industry recruiter), and create an account. In this web app, login session are persistent and REST APIs are securely protected by JWT token verification. After logging in, an industry recruiter can create/delete/update projects, shortlist/accept/reject academic student applications, view resume and edit profile. And, an academic student can view projects, perform fuzzy search with various filters, apply for projects with an SOP, view applications, upload profile picture, upload resume and edit profile. Hence, it is an all in one solution for establishing a connection between academia and industry.

Project Demo: 

https://acad-connect.herokuapp.com/


## Libraries Used

- Frontend
  - @material-ui/core
  - @material-ui/icons
  - @material-ui/lab
  - axios
  - material-ui-chip-input
  - react-phone-input-2
- Backend
  - bcrypt
  - body-parser
  - connect-flash
  - connect-mongo
  - cors
  - crypto
  - express
  - express-session
  - jsonwebtoken
  - mongoose
  - mongoose-type-email
  - multer
  - passport
  - passport-jwt
  - passport-local
  - uuid
