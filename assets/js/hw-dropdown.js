
var homeWork = [
    {
        hwNumber: "1",
        hwName: "Basic Portfolio",
        githubRepoLink: "https://github.com/vitaliyfeytser/hw1",
        githubIoLink: "https://vitaliyfeytser.github.io/hw1/index.html",
        description: "The very first website."
    },
    {
        hwNumber: "2",
        hwName: "Basic Portfolio - Flexbox & Media Queries",
        githubRepoLink: "https://github.com/vitaliyfeytser/hw2a",
        githubIoLink: "https://vitaliyfeytser.github.io/hw2a/",
        description: "My website showing off flexbox in CSS."
    },
    {
        hwNumber: "3",
        hwName: "Portfolio - Bootstrap",
        githubRepoLink: "https://github.com/vitaliyfeytser/hw2b",
        githubIoLink: "https://vitaliyfeytser.github.io/hw2b/index.html",
        description: "My website in Bootstrap."
    },
    {
        hwNumber: "4",
        hwName: "Word-Guess-Game",
        githubRepoLink: "https://github.com/vitaliyfeytser/word-guess-game",
        githubIoLink: "https://vitaliyfeytser.github.io/word-guess-game/index.html",
        description: "A different take on Jeopardy."
    },
    {
        hwNumber: "5",
        hwName: "CrystalsCollector Game",
        githubRepoLink: "https://github.com/vitaliyfeytser/unit-4-game",
        githubIoLink: "https://vitaliyfeytser.github.io/unit-4-game/index.html",
        description: "A beautiful number guessing game."
    },
    {
        hwNumber: "6",
        hwName: "Timed Trivia",
        githubRepoLink: "https://github.com/vitaliyfeytser/TriviaGame",
        githubIoLink: "https://vitaliyfeytser.github.io/TriviaGame/",
        description: "Get scored on a trivia quiz with a timer."
    },
    {
        hwNumber: "7",
        hwName: "GifTastic",
        githubRepoLink: "https://github.com/vitaliyfeytser/GifTastic",
        githubIoLink: "https://vitaliyfeytser.github.io/GifTastic/",
        description: "A gif generator with a category button creator."
    },
    {
        hwNumber: "8",
        hwName: "Train Schedule",
        githubRepoLink: "https://github.com/vitaliyfeytser/train-schedule",
        githubIoLink: "https://vitaliyfeytser.github.io/train-schedule/",
        description: "A train schedule creator using MomentJS and Google Firebase."
    },
    {
        hwNumber: "9",
        hwName: "Sci-Fi & Fantasy World-Portal",
        githubRepoLink: "https://github.com/vitaliyfeytser/bootcamp-p1",
        githubIoLink: "https://vitaliyfeytser.github.io/bootcamp-p1/index.html",
        description: "A sci-fi and fantasy reading recomendation and search portal that allows users to establish an account and save their favorite works."
    },
]


$(document).ready(function () {

        for (i = 0; i < homeWork.length; i++) {

            $('<div>', {
                class: 'dropdown-item'
            }).append(
                $('<a>', {
                    href: homeWork[i].githubRepoLink,
                    target: '_blank'
                }).append(
                    $('<img>', {
                        src: 'assets/images/github-icon-logo-png-transparent.png',
                        class: 'github-img'
                    })),
                $('<a>', {
                    href: homeWork[i].githubIoLink,
                    id: 'dropdown-hw-name',
                    target: '_blank',
                    text: homeWork[i].hwName
                })).appendTo('#hw-dropdown-list');
        };

})
