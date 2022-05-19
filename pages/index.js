import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <div className="image-container">
                <div className="main-image">
                    <img src="talking.jpg" alt=""/>
                </div>
                <div className="text">
                    <span>Share your ideas!</span>
                    <p>Communication is key in life, but not always does what you say reach out to a ton of people, with the name blog, it does.</p>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <img src="thumbsup.jpg" alt="" className="card-image"/>
                    <div className="card-text">
                        <span>Review Blogs</span>
                        <p>See how many people like your blogs and ideas, via likes.</p>
                    </div>
            </div>
            <div className="card">
                <img src="road.jpg" alt="" className="card-image"/>
                <div className="card-text">
                    <span>Share your experiences</span>
                    <p>Write blogs and publish from everywhere.</p>
                </div>
            </div>
            <div className="card">
                <img src="boat.jpg" alt="" className="card-image"/>
                <div className="card-text">
                    <span>Learn from other blogs</span>
                    <p>When you don't feel like making blogs, view others!</p>
                </div>
            </div>
            </div>
            </>
    )
}
