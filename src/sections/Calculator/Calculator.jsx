import React, {useState} from 'react';
import styles from './Calculator.module.scss'
import clsx from "clsx";
import Form from "../../components/Form/index.js";
import Result from "../../components/Result/index.js";
import Title from "../../components/Title/index.js";
import {calculateScholarship} from "../../utils/calculateScholarship.js";

const Calculator = () => {
  const ariaLabel = "calculator-title"

  const [formData, setFormData] = useState(null)
  const [calculatedData, setCalculatedData] = useState(null)

  const handleFormSubmit = (data) => {
    if (data) {
      setCalculatedData(calculateScholarship(data));
    } else {
      setCalculatedData(null); // сброс результата
    }
  }

  return (
    <section
      id="calculator"
      className={styles.calculator}
      aria-labelledby={ariaLabel}
    >
      <div className={clsx(styles.calculatorInner, 'container')}>
        <Title
          ariaLabel={ariaLabel}
          title="Калькулятор стипендии"
          isWhite
        />
        <div className={styles.calculatorWindows}>
          <Form
            onSubmitForm={handleFormSubmit}
          />

          <Result
            className={styles.calculatorResult}
            data={calculatedData}
          />
        </div>
      </div>
    </section>
  );
};

export default Calculator;