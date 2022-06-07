# Use same template on multiple HTML pages - Altcademy mini exercise

1.Initial Setup: Run JSX locally by installing babel package through node
```
npm init -y 
cd foler
npm install
npx babel --watch src --out-dir . --presets react-app/prod //watch babel compiler in src/ file and run the code in the root directory 

```
2. Goal: demonstrate **Re-usability of React cmponents accross multipage websites.**

- Index.html and Press.html are sharing same custom components (Navbar, Sidebar, Footer, Template) from template.js

