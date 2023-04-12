import {
    about,
    banner,
    help,
    skills, skills2,
    terminal
} from './commands.js';

let terminal_banner = document.getElementById('terminal-banner');
let command_terminal = document.getElementById('command-terminal');
let input = document.getElementById('command-input');
let output = document.getElementById('command-prompt');
let terminal_header = document.getElementById('terminal-header');

$(terminal_header).after(terminal);
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
                output.innerHTML = skills + skills2;
                break;
            case "clear":
                output.innerHTML = "";
                break;
            case "banner":
                output.innerHTML = banner;
                break;
            case "command":
                output.innerHTML = terminal;
                break;
            default:
                output.innerHTML = "Command not found";
                break;
        }

        output.innerHTML += terminal;
    }
});



function header(banner) {
    terminal_banner.innerHTML = banner;
}



