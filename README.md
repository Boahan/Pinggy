# **Next.js + Spring Boot Full-Stack App*  

## **Author**  
**Name:** Shaswat Gusain  
**Email:** shaswatgusain@example.com  

---

## **Project Overview**  
This project is a **full-stack application** built using **Spring Boot 3.4.4** and **Next.js**.  
It consists of:  
- A **Spring Boot backend** with a custom authentication filter that checks for a specific header (`PinggyAuthHeader`).  
- A **Next.js frontend** that allows users to submit and view posts.  

### **Application Preview:**  
![Application Preview]((https://github.com/user-attachments/assets/43ee6b0a-077c-4013-9984-f24e0a18913a)
)  

---

## **Technology Stack**  

### **Backend (Spring Boot 3.4.4)**
- **Java 21**  
- **Spring Boot 3.4.4**  
- **Spring Web** (for REST APIs)  
- **Spring Boot Starter Validation** (for request validation)  
- **Lombok** (to reduce boilerplate code)  

### **Frontend (Next.js)**
- **Next.js (latest version)**
- **React.js**
- **Axios** (for API calls)
- **Tailwind CSS** (for styling)

---

## **Backend Implementation**  

### **Custom Authentication Filter**  
- Intercepts incoming HTTP requests.  
- Checks for the presence of `PinggyAuthHeader` in the request header.  
- If present and non-empty, stores its value in a **ThreadLocal** variable.  
- If missing or empty, responds with **HTTP 401 (Unauthorized)**.  

### **Controllers**  

#### **POST `/post`**  
- Accepts a JSON body:  
  ```json
  { "title": "Post title", "body": "Post body" }
  ```
- Retrieves the `PinggyAuthHeader` from **ThreadLocal storage**.  
- Stores the post data along with the authentication header **in memory** (no database required).  

#### **GET `/list`**  
- Returns a list of stored posts in the format:  
  ```json
  [{ "title": "Post title", "body": "Post body", "PinggyAuthHeader": "xyz" }]
  ```  

### **Error Handling**  
- Returns **401 Unauthorized** if `PinggyAuthHeader` is missing or empty.  
- Returns **400 Bad Request** for invalid JSON payloads.  

---

## **Frontend Implementation**  

### **Features**
- A **form** to submit posts with fields: `Title`, `Body`, and `Auth Code`.
- A **post list** that displays all submitted posts.
- **Error handling** for failed submissions.
- **Loading state** while fetching posts.

### **API Integration**
- **POST `/post`**: Sends form data as JSON and includes `PinggyAuthHeader` in the request header.
- **GET `/list`**: Fetches the list of stored posts and displays them.

### **UI/UX Considerations**
- Fully **responsive** design.
- Styled using **Tailwind CSS**.

---

## **Setup & Running the Project**  

### **Backend Setup**  
1. Clone the repository:  
   ```sh
   git clone <repo-link>
   ```
2. Navigate to the backend folder:  
   ```sh
   cd backend
   ```
3. Build the project using Maven:  
   ```sh
   mvn clean install
   ```
4. Run the application:  
   ```sh
   mvn spring-boot:run
   ```
5. The backend will start on **`http://localhost:8080`**.

---

### **Frontend Setup**  
1. Navigate to the frontend folder:  
   ```sh
   cd frontend
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Start the Next.js development server:  
   ```sh
   npm run dev
   ```
4. The frontend will be available at **`http://localhost:3000`**.

---

---

## **Contact Me**
- Shaswatgusain1@gmail.com
