// Assets
import StarbucksLogo from '../styles/assets/svg/starbucks-logo.svg';
import { MdLocationPin } from 'react-icons/md';

function Navigation() {
    return (
        <div className="Navigation">
            <div className="Navigation__left">
                <img src={StarbucksLogo} alt="Starbucks logo" />
                <ul className="Navigation__left__links">
                    <li>
                        <a href="#">
                            Menu
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Rewards
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Gift Cards
                        </a>
                    </li>
                </ul>
            </div>
            <div className="Navigation__right">
                <p>
                    <span>
                        <MdLocationPin />
                    </span>
                    Find a store
                </p>
                <ul className="Navigation__right__links">
                    <li>
                        <a href="#">
                            Sign in
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Join now
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation