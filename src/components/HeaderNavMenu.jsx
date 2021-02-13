/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styleComponents/HeaderNavMenu.css";

export default function HeaderNavMenu() {
  return (
    <nav className="view__menu container">
      <ul className="view__menu-list">
        <li className="view__menu-item">
          <a href="categorie.php?c=Art and illustration">
            Art And Illustration
          </a>
        </li>
        <li className="view__menu-item">
          <a href="categorie.php?c=Architecture">Architecture</a>
        </li>
        <li className="view__menu-item">
          <a href="categorie.php?c=Fashion">Fashion</a>
        </li>
        <li className="view__menu-item">
          <a href="categorie.php?c=Furniture">Furniture</a>
        </li>
        <li className="view__menu-item">
          <a href="categorie.php?c=Graphing disign">Graphic Design</a>
        </li>
        <li className="view__menu-item">
          <a href="categorie.php?c=Photography">Photography</a>
        </li>
        <li className="view__menu-item">
          <a href="about.php">About</a>
        </li>
        <li className="view__menu-item">
          <a href="#">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}
