import React, {useState} from 'react';
import styles from './Form.module.scss'
import clsx from "clsx";
import { directionsData } from "../../utils/directions.js";

const Form = (props) => {
  const {
    className = '',
    onSubmitForm,
  } = props

  const [status, setStatus] = useState('student')
  const [course, setCourse] = useState("")
  const [direction, setDirection] = useState("")
  const [basis, setBasis] = useState("")
  const [evaluations, setEvaluations] = useState('')
  const [amountOfPoints, setAmountOfPoints] = useState('')
  const [directionOfApplicant, setDirectionOfApplicant] = useState('')
  const [basisOfLearningApplicant, setBasisOfLearningApplicant] = useState('')
  const [isUnion, setIsUnion] = useState(false)
  const [isOrphan, setIsOrphan] = useState(false)

  const handleSubmitStudent = (event) => {
    event.preventDefault();
    onSubmitForm({
      status,
      course,
      direction,
      basis,
      evaluations,
      isUnion,
      isOrphan
    });
  };

  const handleSubmitApplicant = (event) => {
    event.preventDefault();
    onSubmitForm({
      status,
      amountOfPoints,
      directionOfApplicant,
      basisOfLearningApplicant,
    });
  };

  const handleChangeStatus = (newStatus) => {
    setStatus(newStatus)

    if (newStatus === 'student') {
      setAmountOfPoints('');
      setDirectionOfApplicant('');
      setBasisOfLearningApplicant('');
    }

    if (newStatus === 'applicant') {
      setCourse('');
      setDirection('');
      setBasis('');
      setEvaluations('');
      setIsUnion(false);
      setIsOrphan(false);
    }

    onSubmitForm(null)
  }

  return (
    <form onSubmit={status === 'student' ? handleSubmitStudent : handleSubmitApplicant } className={clsx(className, styles.form)}>
      <fieldset className={styles.formSection}>
        <legend className={styles.formLegend}>
          Укажите общую информацию о себе
        </legend>
        <div className={styles.formGroup}>
          <div className={styles.formField}>
            <label
              className={styles.formLabel}
            >Кто вы?<span className={styles.formLabelStar}>*</span></label
            >
            <div className={styles.formButtons}>
              <button
                type="button"
                value='student'
                onClick={() => {
                  handleChangeStatus('student')
                }}
                id="student"
                name="status"
                className={clsx(styles.formButton, status === 'student' ? styles.isActive : '')}
              >
                Студент
              </button>
              <button
                type="button"
                value='applicant'
                onClick={() => {
                  handleChangeStatus('applicant')
                }}
                id="applicant"
                name="status"
                className={clsx(styles.formButton, status === 'applicant' ? styles.isActive : '')}
              >
                Абитуриент
              </button>
            </div>
          </div>
        </div>

        {status === 'student' && (
          <div
            className={clsx(styles.formGroup, styles.formGroup3Rows)}
          >
            <div className={styles.formField}>
              <label
                htmlFor="course-number"
                className={styles.formLabel}
              >
                Номер курса<span className={styles.formLabelStar}>*</span>
              </label>
              <div className={styles.formSelectWrapper}>
                <select
                  id="course-number"
                  className={styles.formSelect}
                  name="course-number"
                  value={course}
                  onChange={event => setCourse(event.target.value)}
                  required
                >
                  <option
                    value=''
                    disabled
                    hidden
                  >
                    Выберите курс обучения
                  </option>
                  {Array.from({ length: direction ? directionsData.find(d => d.name === direction).maxCourse : 6 }, (_, i) => i + 1)
                    .map((course) => (
                      <option key={course} value={course}>
                        {course} курс
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className={styles.formField}>
              <label
                htmlFor="direction"
                className={styles.formLabel}
              >
                Направление подготовки
                <span className={styles.formLabelStar}>
                *
              </span>
              </label>
              <div className={styles.formSelectWrapper}>
                <select
                  id="direction"
                  className={styles.formSelect}
                  name="direction"
                  value={direction}
                  onChange={event => setDirection(event.target.value)}
                  required
                >
                  <option
                    value=""
                    disabled
                    hidden
                  >
                    Выберите направление подготовки
                  </option>
                  {directionsData.map((directionData) => (
                    <option
                      value={directionData.name}
                      key={directionData.name}
                      disabled={course > directionData.maxCourse}
                      hidden={course > directionData.maxCourse}
                    >
                      {directionData.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.formField}>
              <label
                htmlFor="basis-of-learning"
                className={styles.formLabel}
              >
                Основа обучения<span className={styles.formLabelStar}>*</span>
              </label>
              <div className={styles.formSelectWrapper}>
                <select
                  id="basis-of-learning"
                  className={styles.formSelect}
                  name="basis-of-learning"
                  value={basis}
                  onChange={event => setBasis(event.target.value)}
                  required
                >
                  <option
                    value=""
                    disabled
                    hidden
                  >
                    Выберите основу обучения
                  </option>
                  <option value="budget">Бюджет</option>
                  <option value="paying">Платно</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {status === 'applicant' && (
          <div
            className={clsx(styles.formGroup, styles.formGroup3Rows,)}
          >
            <div className={styles.formField}>
              <label
                htmlFor="amount-of-points"
                className={styles.formLabel}
              >
                Сумма баллов за ЕГЭ<span
                className={styles.formLabelStar}
              >*</span
              >
              </label>
              <div className={styles.formSelectWrapper}>
                <select
                  id="amount-of-points"
                  className={styles.formSelect}
                  name="amount-of-points"
                  value={amountOfPoints}
                  onChange={event => setAmountOfPoints(event.target.value)}
                  required
                >
                  <option
                    disabled
                    hidden
                    value=""
                  >Выберите сумму баллов
                  </option>
                  <option value="<=244">244 и меньше</option>
                  <option value="245-264">245-264</option>
                  <option value="265-300">265-300</option>
                </select>
              </div>
            </div>

            <div className={styles.formField}>
              <label
                htmlFor="direction-of-applicant"
                className={styles.formLabel}
              >
                Направление подготовки<span
                className={styles.formLabelStar}
              >*</span
              >
              </label>
              <div className={styles.formSelectWrapper}>
                <select
                  id="direction-of-applicant"
                  className={styles.formSelect}
                  name="direction-of-applicant"
                  value={directionOfApplicant}
                  onChange={event => setDirectionOfApplicant(event.target.value)}
                  required
                >
                  <option
                    value=""
                    disabled
                    hidden
                  >Выберите направление подготовки
                  </option>
                  <option value="01.03.04">01.03.04 Прикладная математика</option>
                  <option value="09.03.01">09.03.01 Информатика и вычислительная техника</option>
                  <option value="09.03.02">09.03.02 Информационные системы и технологии</option>
                  <option value="09.03.03">09.03.03 Прикладная информатика</option>
                  <option value="09.03.04">09.03.04 Программная инженерия</option>
                  <option value="10.03.01">10.03.01 Информационная безопасность</option>
                  <option value="10.05.01">10.05.01 Компьютерная безопасность</option>
                  <option value="10.05.03">10.05.03 Информационная безопасность автоматизированных систем</option>
                  <option value="15.03.04">15.03.04 Автоматизация технологических процессов и производств</option>
                  <option value="27.03.03">27.03.03 Системный анализ и управление</option>
                  <option value="27.03.04">27.03.04 Управление в технических системах</option>
                </select>
              </div>
            </div>

            <div className={styles.formField}>
              <label
                htmlFor="basis-of-learning-applicant"
                className={styles.formLabel}
              >
                Основа обучения<span className={styles.formLabelStar}>*</span>
              </label>
              <div className={styles.formSelectWrapper}>
                <select
                  id="basis-of-learning-applicant"
                  className={styles.formSelect}
                  name="basis-of-learning-applicant"
                  value={basisOfLearningApplicant}
                  onChange={event => setBasisOfLearningApplicant(event.target.value)}
                  required
                >
                  <option
                    disabled
                    hidden
                    value=""
                  >Выберите основу обучения
                  </option>
                  <option value="budget">Бюджет</option>
                  <option value="paying">Платно</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </fieldset>

      {status === 'student' && (
        <>
          <fieldset
            className={styles.formSection}
          >
            <legend className={styles.formLegend}>
              Укажите информацию за последнюю промежуточную аттестацию
            </legend>
            <div className={styles.formGroup}>
              <div className={styles.formField}>
                <label
                  htmlFor="evaluations"
                  className={styles.formLabel}
                >
                  Укажите оценки<span className={styles.formLabelStar}>*</span>
                </label>
                <div className={styles.formSelectWrapper}>
                  <select
                    id="evaluations"
                    className={styles.formSelect}
                    name="evaluations"
                    value={evaluations}
                    onChange={event => setEvaluations(event.target.value)}
                    required
                  >
                    <option
                      value=''
                      disabled
                      hidden
                    >Укажите оценки за все виды работ
                    </option>
                    <option value="Еще нет оценок">Еще нет оценок</option>
                    <option value="Тройки или академическая задолженность">Тройки или академическая задолженность</option>
                    <option value="Четверки">Четверки</option>
                    <option value="Четверки и пятерки">Четверки и пятерки</option>
                    <option value="Пятерки">Пятерки</option>
                  </select>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className={styles.formSection}>
            <legend className={styles.formLegend}>
              Укажите дополнительную информацию для расчета стипендии
            </legend>
            <div className={styles.formCheckboxes}>
              <label htmlFor="student-organization" className={styles.formCheckbox}>
                <input
                  id="student-organization"
                  type="checkbox"
                  checked={isUnion}
                  onChange={event => setIsUnion(event.target.checked)}
                  className={styles.formCheckboxInput}
                />
                <span className={styles.formCheckboxLabel}>Состою в профсоюзной организации студентов</span>
              </label>

              <label htmlFor="student-orphan" className={styles.formCheckbox}>
                <input
                  id="student-orphan"
                  type="checkbox"
                  checked={isOrphan}
                  onChange={event => setIsOrphan(event.target.checked)}
                  className={styles.formCheckboxInput}
                />
                <span className={styles.formCheckboxLabel}>Ребенок сирота/Остался без попечения родителей</span>
              </label>
            </div>
          </fieldset>
        </>
      )}

      <button
        type="submit"
        className={styles.formSubmit}
      >
        Рассчитать стипендию
      </button>
    </form>
  );
};

export default Form;