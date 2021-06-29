import App from "./App"
import Logo from "./logo.svg";
const root=document.getElementById("root");
root.innerHTML=`
<image class="logo-cls" src="${Logo}"/>
<h1>Vanila.js Starter </h1> ${App()}`