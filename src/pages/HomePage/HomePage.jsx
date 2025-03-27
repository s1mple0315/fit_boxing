import NavigationGrid from "../../components/NavigationGrid/NavigationGrid"
import TrainingCard from "../../components/TrainingCard/TrainingCard"
import styles from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <NavigationGrid />

      <TrainingCard />
    </div>

  )
}

export default HomePage
