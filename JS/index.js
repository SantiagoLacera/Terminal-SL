import {
    about,
    banner,
    help
} from './commands.js';


let terminal_banner = document.getElementById('terminal-banner');
let command_terminal = document.getElementById('command-terminal');
let input = document.getElementById('command-input');
let output = document.getElementById('command-prompt');

$(document).ready(header(banner));

document.querySelector('#command-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let command = input.value;
        switch (command) {
            case "about":
                output.innerHTML = about;
                break;
            case "clear":
                output.innerHTML = "";
                break;
            case "help":
                output.innerHTML = help;
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

