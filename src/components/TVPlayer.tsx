import { useParams } from "react-router";

const TVPlayer = () => {
    const {tvplayerId} = useParams();
    const movieURL = `https://vidsrc.sh/embed/tv/${tvplayerId}`;
    return (
        <div>
            <iframe
            className="w-full h-screen"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={movieURL}
            ></iframe>
        </div>
    )
}
export default TVPlayer;
