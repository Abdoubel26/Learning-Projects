import pic from './assets/blog.jpg';
import pic2 from './assets/HellasNovaLocation.jpg';

function Picture() {


    const handleClick = (e) => {
        e.target.setAttribute('src', pic2);
    };

    return (
        <div className="picture">
            <img src={pic} alt="Description" onContextMenu={handleClick} />
        </div>
    );
}

export default Picture;