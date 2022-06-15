import { Link } from "@mui/material";
import { Typography } from "@mui/material";

export const Footer = () => {
    return (
        <>
            <Typography variant="h3" component="h3" sx={{ m: 2}} color="purple">
                If you got interested
            </Typography>;
            <Link href="https://starwars.ru/videos/trailers/" sx={{ m: 2}} variant="h4">Watch Trailer</Link>
            <Link href="https://star-wars-film.ru/" variant="h4">Watch Movie</Link>
        </>
    );
};