import "./style.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaChevronDown } from "react-icons/fa";

const LocaleDropdown = () => {
    return (
        <div className="locale-dropdown">
            <Dropdown drop="up">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    English <FaChevronDown style={{ marginLeft: "40px" }} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/">Українська</Dropdown.Item>
                    <Dropdown.Item href="/">Español</Dropdown.Item>
                    <Dropdown.Item href="/">Deutsch</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default LocaleDropdown;
