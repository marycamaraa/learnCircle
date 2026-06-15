import GraphicsNavbar from '../../components/GraphicsNavbar'
import GraphicsSections from '../../components/GraphicsSection'
import GraphicsTimer from '../../components/GraphicsTimer'
import styles from './Graphics.module.css'

function GraphicsAutomation() {
  return (
    <>
      <div className={styles.layout}>
        <GraphicsNavbar />
        <GraphicsSections />
        <GraphicsTimer />
      </div>
    </>
  )
}

export default GraphicsAutomation
