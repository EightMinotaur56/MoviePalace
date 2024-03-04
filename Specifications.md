# Moive Palace Specifications
## Software Requirements

## Software Development Method
### Backend
- Django

### Frontend
- React


## Tables
### Admin Table
 - id
 - First Name
 - Last Name
 - Email
 - Password

### User Table
 - Id
 - First Name
 - Last Name
 - Nickname
 - Email
 - Password

### User View\Join Table
 - combine users and admins

Table for the user data

### Movie Table
 - Id
 - Title
 - Rating
 - Rating Level
 - Rating Description
 - Release Year
 - User Rating Score
 - User Rating Size

Table with the collection of movies

### Object Role Table
 - Id
 - Name
 - Note

Table that includes different roles:
 - Movie Select
 - Movie Insert
 - Movie Delete
 - Movie Update
 - etc.

### Cross Table
 - Cross Id
 - Object Role Id
 - User View Id

Table that has data about what user has access to what roles and operations.


## 