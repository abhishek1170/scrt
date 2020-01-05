import React from "react";
// import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
          <ul className="footer footer_list">
              <li className="footer_list-element">
                    <p className="footer_logo">YST</p>
              </li>
              <li className="footer_list-element">-</li>
              <li className="footer_list-element">item</li>
              <li className="footer_list-element">-</li>
              <li className="footer_list-element">item</li>
              <li className="footer_list-element">-</li>
              <li className="footer_list-element">item</li>
              <li className="footer_list-element">-</li>
              <li className="footer_list-element">item</li>
          </ul>
          <ul className="footer footer_list">
              <li className="footer_list-element">item</li>
              <li className="footer_list-element">-</li>
              <li className="footer_list-element">item</li>
          </ul>
      </footer>
    );
  }
}

export default Footer;
