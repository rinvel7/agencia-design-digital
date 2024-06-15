import Logo from '../../assets/logo.png';
import Light from '../../assets/sun.png'
import Dark from '../../assets/moon.png';
import './style.css'

export default function Topo(props) {
    return (
      <header className={props.temaEscuro ? 'topo-modo-escuro' : 'topo-modo-claro'}>
            <img className='logo' src={Logo} alt='logomarca' />
            <button id='bt' onClick={props.alterarTema} className= {props.temaEscuro ? 'btn-modo-escuro' :  'btn-modo-claro' }>
                <img className='iconesBtn' src={props.temaEscuro ? Light : Dark } alt='icones' />
            </button>
      </header>
    )
  }
  
