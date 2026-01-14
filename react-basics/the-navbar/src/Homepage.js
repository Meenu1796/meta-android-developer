import AudioVideo from "./AudioVideo";
import Conditional from "./Conditional";
import EmbeddedAssets from "./EmbeddedAssets";
import SongSelection from "./SongSelection";

function Homepage() {
    return (
        <div>
            <h1>Welcome to my site</h1>
            <Conditional/>
            <EmbeddedAssets />
            <AudioVideo />
            <SongSelection />
        </div>
    )
}
export default Homepage;