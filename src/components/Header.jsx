import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link className="logo">
                <img src="/assets/img/sifu-header.png" alt="Sifu" />
            </Link>
            <ul>
                <li><Link>HOME</Link></li>
                <li><Link>GALLERY</Link></li>
                <li><Link>BEHIND THE SCENES</Link></li>
                <li><Link>NEWS</Link></li>
                <li><Link>PRESS REVIEWS</Link></li>
            </ul>
            <div className="button_div">
                <button><a href="">PRESS KIT</a></button>
            </div>

        </header>
    )
};