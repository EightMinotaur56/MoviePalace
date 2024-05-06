# Project: Movie Palace
## The App
### Home Page
  The main page categorizes movie genres, such as ‘Most Popular This Week’, ‘New Releases’, ‘Coming Soon’, etc., with an introduction to the selected film at the top. The top right corner allows for movie searches and login.
### Login Page：
  username,email address,password
### Buy Page：
  The ticket purchasing page allows users to select movie showtimes, choose seats, and fill in credit card information. The bottom right corner includes details on billing costs, seat reservations, and other information.
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
