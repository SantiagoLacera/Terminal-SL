import {
    about,
    banner,
    help,
    skills, skills2,
    terminal,
    cnf,
    projects,
    contact,
    resume
} from './commands.js';

let terminal_banner = document.getElementById('terminal-banner');
let terminal_body = document.getElementById('terminal-body');
let terminal_prebody = document.getElementById('terminal-prebody');
let input = document.getElementById('command-input');
let output = document.getElementById('command-prompt');
let terminal_header = document.getElementById('terminal-header');
let command_array = [];
$(document).ready(function () {
    header(banner)
    //$(terminal_header).after(terminal);
document.querySelector('#command-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let command = input.value;
        let res;
        switch (command) {
            case "about":
                res = about;
                break;
            case "clear":
                res = "";
                break;
            case "help":
                res = help;
                break;
            case "banner":
                res = banner;
                break;
            case "skills":
                res = skills + skills2;
                break;
            case "projects":
                res = projects;
                break;
            case "contact":
                res = contact;
                break;
            case "resume":
                res = resume;
                newTab("https://santiagolacera.github.io/Portafolio-website/resume.html");
                break;
            default:
                res = cnf;
                break;
        }
        if (command == "clear") {
            command_array = [];
        }
        else {
            command_array.push(terminal);
            command_array.push(command);
            command_array.push(res);
        }
        input.value = "";
        terminal_prebody.innerHTML = command_array.join('');
        window.scrollTo(0, document.body.scrollHeight);
    }
});

});


function header(banner) {
    terminal_banner.innerHTML = banner;
}

function newTab(link) {
    setTimeout(function () {
        window.open(link, "_blank");
    }, 2000);
}

setTimeout(function () {
    header(banner, "", 2000);
    textarea.focus();
}, 2000);
