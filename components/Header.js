import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WEBApp</span> Newz
            </h1>
            <p className={headerStyles.description}>Keep up to date with latest news</p>
        </div>
    )
}

export default Header