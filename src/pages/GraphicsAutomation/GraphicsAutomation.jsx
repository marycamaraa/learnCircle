import GraphicsNavbar from '../../components/GraphicsNavbar'
import GraphicsSections from '../../components/GraphicsSection'

import styles from './Graphics.module.css'

function GraphicsAutomation() {
  return (
    <>
      <div className={styles.layout}>
        <GraphicsNavbar />
        <GraphicsSections />
      </div>
    </>
  )
}

export default GraphicsAutomation
