import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <>
            <div className={styles.container}>
            <div className="nav-wrapper">
                <nav className="navbar">
                    <span className="nav-logo">
                        The Generic Blog
                    </span>
                    <ul className="nav-links">
                        <li className="nav-link">
                            <Link href={"/"}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link href={"/all"}>
                                All Blogs
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link href={"/add"}>
                                Add Blog
                            </Link>
                        </li>
                        <li className="nav-link btn">
                            <Link href={"/signup"}>
                                Signup
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="body">
                {children}
            </div>

            <div className="footer">
                <h3>The Generic Blog</h3>
                <p>By Krithick</p>
                <ul className="nav-links">
                    <li className="nav-link">
                        <Link href={"/"}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href={"/all"}>
                            All Blogs
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href={"/signup"}>
                            Signup
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
        </>
    );
}

export default Layout;