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

export async function mapPhotoToAlbum(): Promise<FullAlbum[]> {
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


