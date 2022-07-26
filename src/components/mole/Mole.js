import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole(props) {

  // adds or removes image source depending on visibility status
  const visibility = () => {
    if (props.visible == true) {
      return MoleIcon
    } else {
      return ''
    }
  }

  return (
    <div>
      <div className="den">
        <img src={visibility()} onClick={props.onMoleWhacked} className="Mole"/>
      </div>
    </div>
  )
}

export default Mole
