
var homeWork = [
    {
        hwNumber: "1",
        hwName: "Basic Portfolio",
        githubRepoLink: "https://github.com/vitaliyfeytser/hw1",
        liveLink: "https://vitaliyfeytser.github.io/hw1/index.html",
        liveLinkImage: "assets/images/github-sign.png",
        description: "The very first website."
    },
    {
        hwNumber: "2",
        hwName: "Basic Portfolio - Flexbox & Media Queries",
        githubRepoLink: "https://github.com/vitaliyfeytser/hw2a",
        liveLink: "https://vitaliyfeytser.github.io/hw2a/",
        liveLinkImage: "assets/images/github-sign.png",
        description: "My website showing off flexbox in CSS."
    },
    {
        hwNumber: "3",
        hwName: "Portfolio - Bootstrap",
        githubRepoLink: "https://github.com/vitaliyfeytser/hw2b",
        liveLink: "https://vitaliyfeytser.github.io/hw2b/index.html",
        liveLinkImage: "assets/images/github-sign.png",
        description: "My website in Bootstrap."
    },
    {
        hwNumber: "4",
        hwName: "Word-Guess-Game",
        githubRepoLink: "https://github.com/vitaliyfeytser/word-guess-game",
        liveLink: "https://vitaliyfeytser.github.io/word-guess-game/index.html",
        liveLinkImage: "assets/images/github-sign.png",
        description: "A different take on Jeopardy."
    },
    {
        hwNumber: "5",
        hwName: "CrystalsCollector Game",
        githubRepoLink: "https://github.com/vitaliyfeytser/unit-4-game",
        liveLink: "https://vitaliyfeytser.github.io/unit-4-game/index.html",
        liveLinkImage: "assets/images/github-sign.png",
        description: "A beautiful number guessing game."
    },
    {
        hwNumber: "6",
        hwName: "Timed Trivia",
        githubRepoLink: "https://github.com/vitaliyfeytser/TriviaGame",
        liveLink: "https://vitaliyfeytser.github.io/TriviaGame/",
        liveLinkImage: "assets/images/github-sign.png",
        description: "Get scored on a trivia quiz with a timer."
    },
    {
        hwNumber: "7",
        hwName: "GifTastic",
        githubRepoLink: "https://github.com/vitaliyfeytser/GifTastic",
        liveLink: "https://vitaliyfeytser.github.io/GifTastic/",
        liveLinkImage: "assets/images/github-sign.png",
        description: "A gif generator with a category button creator."
    },
    {
        hwNumber: "8",
        hwName: "Train Schedule",
        githubRepoLink: "https://github.com/vitaliyfeytser/train-schedule",
        liveLink: "https://vitaliyfeytser.github.io/train-schedule/",
        liveLinkImage: "assets/images/github-sign.png",
        description: "A train schedule creator using MomentJS and Google Firebase."
    },
    {
        hwNumber: "9",
        hwName: "Sci-Fi & Fantasy World-Portal",
        githubRepoLink: "https://github.com/vitaliyfeytser/bootcamp-p1",
        liveLink: "https://vitaliyfeytser.github.io/bootcamp-p1/index.html",
        liveLinkImage: "assets/images/github-sign.png",
        description: "A sci-fi and fantasy reading recomendation and search portal that allows users to establish an account and save their favorite works."
    },
    {
        hwNumber: "10",
        hwName: "LIRI not SIRI :P",
        githubRepoLink: "https://github.com/vitaliyfeytser/liri-node-app",
        liveLink: "https://youtu.be/cm664O2mdvk",
        liveLinkImage: "assets/images/github-sign.png",
        demoImage: "assets/images/youtube-icon-rect.png",
        description: "The LIRI app searches for movies, cocerts and songs in Node.js CLI using multiple APIs."
    },
    {
        hwNumber: "11",
        hwName: "Word-Guess CLI",
        githubRepoLink: "https://github.com/vitaliyfeytser/",
        liveLink: "",
        liveLinkImage: "assets/images/github-sign.png",
        demoImage: "assets/images/youtube-icon-rect.png",
        description: "A fun word guessing CLI app."
    },
]

// this code creates the homework dropdown menu items
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
                    src: homeWork[i].liveLinkImage,
                    class: 'live-link-img'
                })),
            $('<a>', {
                href: homeWork[i].liveLink,
                id: 'dropdown-hw-name',
                target: '_blank',
                text: homeWork[i].hwName
            }),
            $('<img>', {
                src: homeWork[i].demoImage,
                class: 'demo-img'
            }),
            ).appendTo('#hw-dropdown-list');
    };

})
