import ArticlesNavbar from '../../components/ArticlesNavbar'
import ArticlesSection from '../../components/ArticlesSection'
import NewsNavbar from '../../components/NewsNavbar'
import styles from './Article.module.css'

function Articles() {
  return (
    <div className={styles.layout}>
      <ArticlesNavbar />
      <NewsNavbar />
      <ArticlesSection />
    </div>
  )
}

export default Articles
