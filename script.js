let app = new Vue({
    el: "#app",
    data: {
        projects: [ // projects here
            {
                name: "Project 1",
                author: "Author 1\nAuthor2",
                description: "Description 1"
            },
            {
                name: "Project 2",
                author: "Author3\nAuthor4\nAuthor5",
                description: "Description 2"
            }
        ],
        people: [
            {
                name: "Leadership Group"
            }
        ]
    }
});