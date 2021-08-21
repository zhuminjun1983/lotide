const library = {
    tracks: { t01: { id: "t01",
        name: "Code Monkey",
        artist: "Jonathan Coulton",
        album: "Thing a Week Three" },
    t02: { id: "t02",
        name: "Model View Controller",
        artist: "James Dempsey",
        album: "WWDC 2003"},
    t03: { id: "t03",
        name: "Four Thirty-Three",
        artist: "John Cage",
        album: "Woodstock 1952"}
    },
    playlists: { p01: { id: "p01",
        name: "Coding Music",
        tracks: ["t01", "t02"]
    },
    p02: { id: "p02",
        name: "Other Playlist",
        tracks: ["t03"]
    }
    },


    /////////////////////////////
    // FUNCTIONS TO IMPLEMENT:
    /////////////////////////////

    // prints a list of all playlists, in the form:
    // p01: Coding Music - 2 tracks
    // p02: Other Playlist - 1 tracks
    printPlaylists:function() {

        let a = Object.values(this.playlists)
        for (let i = 0; i < a.length; i++) {
            let b = Object.values(a[i])
            b[0] = `${b[0]}:`
            b[2] = `- ${b[2].length} tracks`
            console.log(`${b[0]} ${b[1]} ${b[2]}`)
        }
    },

    // prints a list of all tracks, using the following format:
    // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
    // t02: Model View Controller by James Dempsey (WWDC 2003)
    // t03: Four Thirty-Three by John Cage (Woodstock 1952)
    printTracks:function() {

        let a = Object.values(this.tracks)
        for (let i = 0; i < a.length; i++) {
            let b = Object.values(a[i])

            console.log(`${b[0]}: ${b[1]} by ${b[2]} (${b[3]})`)
        }
    } ,


    // prints a list of tracks for a given playlist, using the following format:
    // p01: Coding Music - 2 tracks
    // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
    // t02: Model View Controller by James Dempsey (WWDC 2003)
    printPlaylist:function(playlistId) {
        let a = Object.values(this.playlists)
        for (let i = 0; i < a.length; i++) {
            let b = Object.values(a[i])
            b[0] = `${b[0]}:`
            b[2] = `- ${b[2].length} tracks`
            if (b[0].includes(playlistId)) {
                console.log(`${b[0]} ${b[1]} ${b[2]}`)
            }
            let c = Object.values(this.tracks)
            for (let i = 0; i < c.length; i++) {
                let d = Object.values(c[i])
                if (d[0].includes(playlistId)) {
                    console.log(`${d[0]}: ${d[1]} by ${d[2]} (${d[3]})`)
                    return
                }
            }
        }
    },


    // adds an existing track to an existing playlist
    addTrackToPlaylist :function(trackId, playlistId) {
        this.playlists[playlistId].tracks.push(trackId);
        console.log(this.playlists[playlistId].tracks)


    },

    // generates a unique id
    // (already implemented: use this for addTrack and addPlaylist)
    generateUid: function() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },


    // adds a track to the library
    addTrack : function (name, artist, album) {
        let uid = this.generateUid();
        this.tracks[uid] = {name: name, artist: artist, album: album};
        console.log(this.tracks);
    },


    // adds a playlist to the library
    addPlaylist : function(name) {
        let uid = this.generateUid();
        this.playlists[uid] = {id: uid, name: name, tracks: ""};
        console.log(this.playlists);
    }
}
library.printPlaylists()
library.printTracks()
library.printPlaylist("p01")
library.printPlaylist("t01")
library.printPlaylist("t02")
library.addTrackToPlaylist('t01','p01')
library.addTrack('jjj','kkk','ggg')
library.addPlaylist('fff')
