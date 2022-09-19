import './Header.css'

export default function Header(props) {
    return(
        <div className="header-con">
            <div className="page-name">{props.page} view</div>
            <div className='header-text'>Ticketing App</div>
            <button className='header-btn' onClick={props.switchPage}>Switch Page</button>
        </div>
    )
}