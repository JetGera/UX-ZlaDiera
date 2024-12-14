import './O-nas.css';

const Fotogalery = () => {

    return (
        <div className="about-us-page">
            <h2>Fotogaleria</h2>

            <div className="fotogaleria-photos">
                <img className="fotogaleria-photo"
                     src="https://zladiera.sk/wp-content/uploads/2015/07/zla-diera-banner-01.jpg" alt="image1"/>
                <img className="fotogaleria-photo"
                     src="https://zladiera.sk/wp-content/uploads/2015/07/IMG_77871-1024x768.jpg" alt="image2"/>
                <img className="fotogaleria-photo" src="http://zladiera.sk/wp-content/uploads/2015/07/IMG_5023.jpg"
                     alt="image3"/>
                <img className="fotogaleria-photo" src="http://zladiera.sk/wp-content/uploads/2015/07/IMG_7784.jpg"
                     alt="image4"/>
                <img className="fotogaleria-photo" src="https://zladiera.sk/wp-content/uploads/2015/07/zla-diera-banner-02.jpg"
                     alt="image5"/>

            </div>
        </div>
    );
};

export default Fotogalery;

