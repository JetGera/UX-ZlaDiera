import './O-nas.css';
import {Link} from "react-router-dom";

const Login = () => {

    return (
        <div className="about-us-page">
            <h2>O nas</h2>

            <div className="about-us-links">
                <h4>Jedinou známou a od roku 1999 sprístupnenou jaskyňou na území Prešovského okresu je Jaskyňa Zlá Diera
                pri obci Lipovce.
                </h4>
                <h4>Základná trasa je fyzicky nenáročná, vhodná aj pre malé deti. Nutná je pevná obuv a
                teplejší odev.
                </h4>

                <h4>Zlá Diera je výnimočná práve veľmi citlivým spôsobom sprístupnenia, pri ktorom návštevník s prilbou na
                hlave prechádza so sprievodcom tajuplné podzemie.
                </h4>
                <h4>Jaskyňa nie je elektricky osvetlená, preto si
                návštevníci svietia tradičnými jaskyniarskymi karbidkami, prípadne môžu použiť vlastné svetlo.
                </h4>

                <h1>Odkazy:</h1>
                <Link to="https://www.facebook.com/jaskyna.zladiera">
                    Náš Facebook
                </Link>
                <h2>Otváracie hodiny</h2>

                <h4>
                    APRÍL 9:00 – 15:30 (posledný vstup 14:30)
                </h4>

                <h4>
                    MÁJ 9:00 – 16:00 (posledný vstup 15:00)
                </h4>

                <h4>
                    JÚN, JÚL, AUGUST 9:00 – 17:30 (posledný vstup 16:30)
                </h4>

                <h4>
                    SEPTEMBER 9:00 – 16:00 (posledný vstup 15:00)
                </h4>

                <h4>
                    OKTÓBER, NOVEMBER (do 15. novembra) 9:00 – 15:30 (posledný vstup 14:30)
                </h4>

                    V mesiacoch apríl, máj, október a november doporučujeme preveriť telefonicky možnosť vstupu.

                    <h2>Kontakt</h2>
                    <h3>Mail: kosc@zladiera.sk</h3>
                    <h3>Tel.:</h3>
                    <h4>+421 905 237 565</h4>
                    <h4>+421 907 967 316</h4>

            </div>
        </div>
    );
};

export default Login;

