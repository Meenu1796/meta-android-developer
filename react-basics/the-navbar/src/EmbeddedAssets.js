import rooftop from './Assets/images/central-perk.jpg';

function EmbeddedAssets() {
    const randomImageURL="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
    return(
        <div>
            <h1>Task: add three images with some styling</h1>
            <img 
            height={200}
            src={rooftop}
            alt='An image of rooftop in NY'/>
            <img 
            height={200}
            src={require("./Assets/images/central-perk.jpg")}
            alt='An image of Central-Perk'/>
            <img 
            src={randomImageURL}
            height={200}
            />
        </div>
    )
}
export default EmbeddedAssets;