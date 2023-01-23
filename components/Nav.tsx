import React from "react";
import styles from "./styles/Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navItems}>
        <ul>
          <li>
            <Link href="/">My Posts</Link>
          </li>
          <li>
            <Link href="/posts">Add Post</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}