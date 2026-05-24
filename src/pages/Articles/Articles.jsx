import ArticlesNavbar from '../../components/ArticlesNavbar'
import ArticlesSection from '../../components/ArticlesSection'
import styles from './Article.module.css'

function Articles() {
  return (
    <div className={styles.layout}>
      <ArticlesNavbar />
      <ArticlesSection />
    </div>
  )
}

export default Articles
