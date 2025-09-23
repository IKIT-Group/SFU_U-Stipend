import React from 'react';
import styles from './Calculator.module.scss'
import clsx from "clsx";
import Form from "../../components/Form/index.js";
import Result from "../../components/Result/index.js";
import Title from "../../components/Title/index.js";

const Calculator = () => {
  const ariaLabel = "calculator-title"

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
          <Form className={styles.calculatorForm} />

          <Result className={styles.calculatorResult} />
        </div>
      </div>
    </section>
  );
};

export default Calculator;