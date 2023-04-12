import {
    about,
    banner,
    help,
    skills
} from './commands.js';
const shield = document.querySelector('.shield');
const titleBar = shield.querySelector('.title-bar');
const closeButton = titleBar.querySelector('.close');
const minimizeButton = titleBar.querySelector('.minimize');
const maximizeButton = titleBar.querySelector('.maximize');
const content = shield.querySelector('.content');

let terminal_banner = document.getElementById('terminal-banner');
let command_terminal = document.getElementById('command-terminal');
let input = document.getElementById('command-input');
let output = document.getElementById('command-prompt');

$(document).ready(header(banner));


document.querySelector('#command-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let command = input.value;
        switch (command) {
            case "help":
                output.innerHTML = help;
                break;
            case "about":
                output.innerHTML = about;
                break;
            case "skills":
                output.innerHTML = skills;
                break;
            case "clear":
                output.innerHTML = "";
                break;
            case "banner":
                output.innerHTML = banner;
                break;
            default:
                output.innerHTML = "Command not found";
                break;
        }
        input.value = "";
        output.innerHTML += "<br>";        
    }
});



function header(banner) {
    terminal_banner.innerHTML = banner;
}



