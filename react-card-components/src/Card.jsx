import viteLogo from '../public/vite.svg'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={viteLogo} alt="Mr.Vite"></img>
            <h2 className='card-title'>Mr.Vite</h2>
            <p className='card-text'>Hi my name is Vite</p>
        </div>
    );
}

export default Card