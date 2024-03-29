import React, { PureComponent } from "react";

import "./header.css";

class Header extends PureComponent {
    handleMenuChange = (event) => {
        this.props.changePlaya(event.target.value);
    };
    render() {
        return (
            <header className="header">
                <ul className="header-menu">
                    <li className={`menu-item ${this.props.idActive === 0 && "menu-item-active"}`} value={0} onClick={this.handleMenuChange} key={0}>
                        Todas
                    </li>
                    {this.props.playas.map((item) => (
                        <li
                            className={`menu-item ${this.props.idActive === item.id && "menu-item-active"}`}
                            value={item.id}
                            onClick={this.handleMenuChange}
                            key={item.id}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </header>
        );
    }
}

export default Header;
