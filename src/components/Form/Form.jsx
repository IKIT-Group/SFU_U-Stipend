import React from 'react';
import styles from './Form.module.scss'
import clsx from "clsx";

const Form = (props) => {
  const {
    className = ''
  } = props

  return (
    <form className={clsx(className, styles.form)}>
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
                id="student"
                name="status"
                className={clsx(styles.formButton, styles.isActive)}
              >
                Студент
              </button>
              <button
                type="button"
                id="applicant"
                name="status"
                className={styles.formButton}
              >
                Абитуриент
              </button>
            </div>
          </div>
        </div>

        <div
          className={clsx(styles.formGroup, styles.formGroup3Rows)}
          data-js-student-block
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
              >
                <option
                  defaultValue=''
                  disabled
                  hidden
                  value=""
                >
                  Выберите курс обучения
                </option>
                <option value="1st course">1 курс</option>
                <option value="2nd course">2 курс</option>
                <option value="3rd course">3 курс</option>
                <option value="4th course">4 курс</option>
                <option value="5th course">5 курс</option>
                <option value="6th course">6 курс</option>
              </select>
            </div>
          </div>

          <div className={styles.formField}>
            <label
              htmlFor="direction"
              className={styles.formLabel}
            >
              Направление подготовки<span
              className={styles.formLabelStar}
            >*</span
            >
            </label>
            <div className={styles.formSelectWrapper}>
              <select
                id="direction"
                className={styles.formSelect}
                name="direction"
              >
                <option selected disabled hidden value="">
                  Выберите направление подготовки
                </option>
                <option>01.03.04 Прикладная математика</option>
                <option>
                  09.03.01 Информатика и вычислительная техника
                </option>
                <option>
                  09.03.02 Информационные системы и технологии
                </option>
                <option>09.03.03 Прикладная информатика</option>
                <option>09.03.04 Программная инженерия</option>
                <option>10.03.01 Информационная безопасность</option>
                <option value="специалитет">
                  10.05.01 Компьютерная безопасность
                </option>
                <option value="специалитет">
                  10.05.03 Информационная безопасность
                  автоматизированных систем
                </option>
                <option>
                  15.03.04 Автоматизация технологических процессов и
                  производств
                </option>
                <option>27.03.03 Системный анализ и управление</option>
                <option>
                  27.03.04 Управление в технических системах
                </option>
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
              >
                <option
                  defaultValue=''
                  disabled
                  hidden
                  value=""
                >
                  Выберите основу обучения
                </option>
                <option value="budget">Бюджет</option>
                <option value="paying">Платно</option>
              </select>
            </div>
          </div>
        </div>

        <div
          className={clsx(styles.formGroup, styles.formGroup3Rows, 'visually-hidden')}
          data-js-applicant-block
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
              >
                <option
                  defaultValue=''
                  disabled
                  hidden
                  value=""
                >
                  Выберите сумму баллов
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
                name="direction"
              >
                <option
                  defaultValue=''
                  disabled
                  hidden
                  value=""
                >
                  Выберите направление подготовки
                </option>
                <option>01.03.04 Прикладная математика</option>
                <option>
                  09.03.01 Информатика и вычислительная техника
                </option>
                <option>
                  09.03.02 Информационные системы и технологии
                </option>
                <option>09.03.03 Прикладная информатика</option>
                <option value="highpoints">09.03.04 Программная инженерия</option>
                <option value="highpoints">10.03.01 Информационная безопасность</option>
                <option value="highpoints">10.05.01 Компьютерная безопасность</option>
                <option value="highpoints">
                  10.05.03 Информационная безопасность
                  автоматизированных систем
                </option>
                <option>
                  15.03.04 Автоматизация технологических процессов и
                  производств
                </option>
                <option>27.03.03 Системный анализ и управление</option>
                <option>
                  27.03.04 Управление в технических системах
                </option>
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
              >
                <option
                  defaultValue=''
                  disabled
                  hidden
                  value=""
                >
                  Выберите основу обучения
                </option>
                <option value="budget">Бюджет</option>
                <option value="paying">Платно</option>
              </select>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset
        className={styles.formSection}
        data-js-student-evaluations
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
              >
                <option
                  defaultValue=''
                  disabled
                  hidden
                  value=""
                >
                  Ваши оценки (зачеты, экзамены, защиты курсовых,
                  практик и т.д.)
                </option>
                <option value="Еще нет оценок">Еще нет оценок</option>
                <option value="Тройки или академическая задолженность">
                  Тройки или академическая задолженность
                </option>
                <option value="Четверки">Четверки</option>
                <option value="Четверки и пятерки">
                  Четверки и пятерки
                </option>
                <option value="Пятерки">Пятерки</option>
              </select>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset
        className={styles.formSection}
        data-js-student-additionally
      >
        <legend className={styles.formLegend}>
          Укажите дополнительную информацию для расчета стипендии
        </legend>

        <div className={styles.formCheckboxes}>
          <label
            htmlFor="student-organization"
            className={styles.formCheckbox}
          >
            <input
              id="student-organization"
              type="checkbox"
              className={styles.formCheckboxInput}
            />
            <span
              className={styles.formCheckboxLabel}
            >Состою в профсоюзной организации студентов</span
            >
          </label>
          <label
            htmlFor="student-orphan"
            className={styles.formCheckbox}
          >
            <input
              id="student-orphan"
              type="checkbox"
              className={styles.formCheckboxInput}
            />
            <span
              className={styles.formCheckboxLabel}
            >Ребенок сирота/Остался без попечения родителей</span
            >
          </label>
        </div>
      </fieldset>

      <button
        type="submit"
        className={styles.formSubmit}
        data-js-submit-button
      >
        Рассчитать стипендию
      </button>
    </form>
  );
};

export default Form;