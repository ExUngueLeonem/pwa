import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

//styles
import styles from './navButton.module.scss';

export const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1)
  return (
    <button className={styles.navButton} onClick={goBack}>
      <div className={styles.icon_container}>
        <FaAngleLeft />
      </div>
    </button>
  )
}