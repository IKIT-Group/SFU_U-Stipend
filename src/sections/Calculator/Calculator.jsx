import React from 'react';
import styles from './Calculator.module.scss'
import clsx from "clsx";
import Form from "../../components/Form/index.js";
import Result from "../../components/Result/index.js";

const Calculator = () => {
  return (
    <section
      id="calculator"
      className={styles.calculator}
      aria-labelledby="calculator-title"
    >
      <div className={clsx(styles.calculatorInner, 'container')}>
        <h2
          className={styles.calculatorTitle}
          aria-label="calculator-title"
        >
          Калькулятор стипендии
        </h2>
        <div className={styles.calculatorWindows}>
          <Form className={styles.calculatorForm} />

          <Result className={styles.calculatorResult} />
        </div>
      </div>
    </section>
  );
};

export default Calculator;