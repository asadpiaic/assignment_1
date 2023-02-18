type Album = {
  artist: string;
  title: string;
  tracks?: number;
};

function make_album(artist: string, title: string, tracks?: number): Album {
  const album: Album = { artist, title };

  if (tracks) {
    album.tracks = tracks;
  }

  return album;
}

const album1 = make_album('My', 'My Album');
const album2 = make_album('Black Pink', 'Hit The Wall', 26);
const album3 = make_album('Hmm', 'IV', 8);

console.log(album1); 
console.log(album2); 
console.log(album3); 
