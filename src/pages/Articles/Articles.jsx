import ArticlesNavbar from '../../components/ArticlesNavbar'
import ArticlesSection from '../../components/ArticlesSection'
import Footer from '../../components/Footer'
import NewsNavbar from '../../components/NewsNavbar'
import styles from './Article.module.css'

function Articles() {
  return (
    <div className={styles.layout}>
      <ArticlesNavbar />
      <NewsNavbar />
      <ArticlesSection />
      <Footer />
    </div>
  )
}

export default Articles
