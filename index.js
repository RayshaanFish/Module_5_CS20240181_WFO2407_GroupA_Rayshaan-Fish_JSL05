// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Added 5 more songs
    { title: "Congratulations", artist: "Mac Miller", genre: "Pop"},
    { title: "The Worst", artist: "Jhene Aiko", genre: "Rock"},
    { title: "Jackie Brown", artist: "Brent Faiyaz", genre: "R&B"},
    { title: "Synergy", artist: "Umi", genre: "Pop"},
    { title: "Love", artist: "Kendrick Lamar", genre: "Pop"},
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
    
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    const playlistDiv = document.getElementById("playlists");
    

    // iterate over guardians
    Object.keys(guardians).map(guardian => {
        const genre = guardians[guardian];

        // Filter songs based on the guardian's preferred genre
        const playlist = songs.filter(song => song.genre === genre);

        // Create a new div for this guardian's playlist
        const guardianDiv = document.createElement("div");
        guardianDiv.className = "playlist";

        // Add the Guardian's name
        const guardianName = document.createElement("h2");
        guardianName.textContent = `${guardian}'s Playlist (${genre})`;
        guardianDiv.appendChild(guardianName);

        // Create an unordered list for the songs
        const songList = document.createElement("ul");

        // Append each song to the list
        playlist.forEach(song => {
            const songItem = document.createElement("li");
            songItem.className = "song"; // Apply the .song class

            // Create a span for the song title
            const songTitle = document.createElement("span");
            songTitle.className = "song-title"; // Apply the .song-title class
            songTitle.textContent = song.title;

            // Create a span for the artist name
            const songArtist = document.createElement("span");
            songArtist.textContent = ` by ${song.artist}`;

            // Append the title and artist spans to the song item
            songItem.appendChild(songTitle);
            songItem.appendChild(songArtist);

            // Append the song item to the song list
            songList.appendChild(songItem);
        });

        // Append the song list to the guardian's div
        guardianDiv.appendChild(songList);

        // Append the guardian's div to the main playlist container
        playlistDiv.appendChild(guardianDiv);
    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


