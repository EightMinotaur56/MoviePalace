# Project: Movie Palace
## Database Tables
### Users
This table has the information about users
it contains the following:
- id
- last name
- first name
- nickname
  - user specific nickname
- password
  - Hashed
- is admin
  - Boolean value that sets a users as an admin or not
### Movies
This table has data about the movies on the site.
- id
### Object Role
The object role represents different roles that a user could have access to.
- id
- name
- note
### Object Role Users Cross
A cross table that sets the user with their role and accessibility.
- id
- object role id
- user id
