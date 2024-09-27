# Firebase Login System

This project demonstrates a simple user authentication system using Firebase with HTML, JavaScript, and CSS. It allows users to register, log in, and securely manage their authentication using Firebase Authentication services.

## Features
- User Registration
- User Login
- Password Reset
- Firebase Authentication with Email/Password

## Requirements
- Firebase project
- HTML, JavaScript, and CSS knowledge
- Firebase SDK (JavaScript)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd FirebaseLogin
   ```

2. Set up Firebase:

   - Create a Firebase project from the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Email/Password** authentication in the Authentication section.
   - Go to **Project Settings**, get the Firebase configuration, and add it to your `firebase-config.js` file.

3. Include Firebase SDK in your project:

   ```html
   <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"></script>
   ```

4. Customize the authentication logic in `auth.js`.

5. Run the project:

   Simply open `index.html` in a browser.

## Project Structure

```plaintext
├── index.html
├── styles.css
├── auth.js
├── firebase-config.js
└── README.md
```

## License
This project is licensed under the MIT License.

