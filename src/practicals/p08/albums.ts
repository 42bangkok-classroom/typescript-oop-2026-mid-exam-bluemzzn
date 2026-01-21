import axios from "axios";

interface Photos {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumnailURl: string;
}
interface Albums {
    userId: number;
    id: number;
    title: string;
}

interface FullAlbum {
    userId: number;
    id: number;
    title: string;
    photos: {
        albumId: number;
        id: number;
        title: string;
        url: string;
        thumnailURl: string;
    }
}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

async function mapPhotoToAlbum(): Promise<FullAlbum[]> {
    try {
        const [photoRes, albumRes] = await Promise.all([
            axios.get<Photos[]>(PHOTOS_URL),
            axios.get<Albums[]>(ALBUMS_URL)
        ]);

        const photos = photoRes.data;
        const albums = albumRes.data;

        return photos.map(photo => {

            const checkId = albums.filter(checkuser => checkuser.userId === photo.albumId);
            return {
                userId: photo.id,
                id: photo.id,
                title: photo.title,
                photos: {
                    albumId: photo.albumId,
                    id: photo.id,
                    title: photo.title,
                    url: photo.url,
                    thumnailURl: photo.thumnailURl
                }
            };
        });
    } catch (error) {
        return [];
    }
}



// // https://jsonplaceholder.typicode.com/users
// // https://jsonplaceholder.typicode.com/albums

// import axios from "axios";

// interface Users {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
// }

// interface Albums {
//     userId: number;
//     id: number;
//     title: string;
// }

// interface UserwithAlbums{
//     id : number;
//     name: string;
//     albums : string[];
// }

// export async function getUsersWithAlbums(): Promise<UserwithAlbums[]> {
//     try {
//         const [userRes, albumRes] = await Promise.all([
//             axios.get<Users[]>('https://jsonplaceholder.typicode.com/users'),
//             axios.get<Albums[]>('https://jsonplaceholder.typicode.com/albums')
//         ]);

//         const users = userRes.data;
//         const albums = albumRes.data;

//         return users.map(user => {
//             const checkUser = albums.filter(album => album.userId === user.id);
//             const albumTitles = checkUser.map(album => album.title);
//             return { id : user.id, name : user.name, albums : albumTitles};
//         });
//     } catch (error) {
//         return [];
//     }
// }

// getUsersWithAlbums().then(check => console.log(check));
