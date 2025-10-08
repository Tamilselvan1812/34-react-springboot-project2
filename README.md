

# React + Spring Boot + PostgreSQL Hotel Management System

## Overview

This is a full-stack **hotel menu management** web application built with:

* **Frontend:** React (`my-app`)
* **Backend:** Spring Boot (`demo`)
* **Database:** PostgreSQL (`hoteldb`)

The app allows you to **add, edit, delete, and view menu items** (Name, Rate) with persistent storage in PostgreSQL.



## Project Structure

```
Project/
│── demo/        # Spring Boot backend
│── my-app/      # React frontend
```



## Features

* View all menu items in a table
* Add new menu items (Name, Rate)
* Edit existing items with prefilled form
* Delete items
* Persistent storage in PostgreSQL



## Backend: Spring Boot

### 1. Setup

Open terminal and navigate to the backend folder:

```bash
cd demo
```

Add dependencies in `pom.xml`:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <version>42.6.0</version>
</dependency>
```

Configure database in `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/hoteldb
spring.datasource.username=postgres
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
```

Replace `your_password` with your PostgreSQL password.



### 2. Run Backend

```bash
./mvnw spring-boot:run   # Mac/Linux
mvnw spring-boot:run     # Windows
```

Backend will run at:

```
http://localhost:8081
```



### 3. API Endpoints

| Method | Endpoint   | Description            |
| ------ | ---------- | ---------------------- |
| GET    | /menu      | Fetch all menu items   |
| POST   | /menu      | Add new menu item      |
| PUT    | /menu/{id} | Update menu item by ID |
| DELETE | /menu/{id} | Delete menu item by ID |

**Request Example (POST /menu)**

```json
{
  "name": "Idly",
  "value": 50
}
```



## Frontend: React

### 1. Setup

Navigate to frontend folder:

```bash
cd my-app
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

Frontend will run at:

```
http://localhost:3000
```



### 2. Components

* **HotelMenu:** Displays all menu items in a table with Edit & Delete buttons
* **AddToMenu:** Form to add or edit menu items



### 3. Navigation

* **Add Item →** navigates to form to add a new menu item
* **Edit Item →** pre-fills form with existing menu item data
* **Delete Item →** removes item from database

---

## Database

* PostgreSQL database `hoteldb` stores all menu items
* Spring Boot uses **JPA** to persist data
* Data remains even if Spring Boot server stops


## Scripts

### Frontend (React)

```bash
npm start       # Run dev server
npm run build   # Build production files
```

### Backend (Spring Boot)

```bash
mvn spring-boot:run   # Run backend
mvn clean package     # Build JAR
```



## Future Improvements

* Add authentication (login/logout)
* Search & filter menu items
* Pagination for large menus
* Deploy backend (Heroku/AWS) and frontend (Netlify/GitHub Pages)



Do you want me to do that?
