# Firebase Login System in Java

This project demonstrates a simple user authentication system using Firebase with Java. It allows users to register, log in, and manage their authentication using Firebase Authentication services.

## Features
- User Registration
- User Login
- Email Verification
- Secure Authentication with Firebase

## Requirements
- Java 8 or higher
- Firebase SDK for Java
- Internet connection

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd FirebaseLoginJava
   ```

2. Set up Firebase:

   - Create a Firebase project from the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Email/Password** authentication in the Authentication section.
   - Download the `google-services.json` file and add it to your project.

3. Add Firebase SDK:

   Ensure your `pom.xml` (for Maven) or build file includes the Firebase dependencies:

   ```xml
   <dependency>
       <groupId>com.google.firebase</groupId>
       <artifactId>firebase-admin</artifactId>
       <version>7.1.0</version>
   </dependency>
   ```

4. Run the application:

   ```bash
   mvn clean install
   java -jar target/FirebaseLoginJava.jar
   ```

## Project Structure

```plaintext
├── src
│   ├── main
│   │   └── java
│   │       └── com.example
│   │           └── FirebaseLogin.java
├── resources
│   └── google-services.json
└── README.md
```

## License
This project is licensed under the MIT License.
