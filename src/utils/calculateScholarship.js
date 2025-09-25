const SCHOLARSHIPS = [
  {
    name: "Государственная Академическая Стипендия",
    amountByEvaluation: {
      "<=244": 3340,
      "245-264": 12000,
      "265-300": 12000,
      "Еще нет оценок": 3340,
      "Тройки или долги": 0,
      "Четверки": 3340,
      "Четверки и пятерки": 4170,
      "Пятерки": 5000,
    },
    key: "base",
    condition: ({ basis, basisOfLearningApplicant }) =>
      basis === "budget" || basisOfLearningApplicant === "budget",
  },
  {
    name: "Повышенная Государственная Академическая стипендия",
    amountByEvaluation: {
      "<=244": 0,
      "245-264": 0,
      "265-300": 0,
      "Еще нет оценок": 0,
      "Тройки или долги": 0,
      "Четверки": 12800,
      "Четверки и пятерки": 13630,
      "Пятерки": 14460,
    },
    key: "advanced",
    condition: ({ basis, basisOfLearningApplicant }) =>
      basis === "budget" || basisOfLearningApplicant === "budget",
    needsDocuments: true,
  },
  {
    name: "Социальная стипендия",
    key: "social",
    condition: ({ basis, basisOfLearningApplicant }) =>
      basis === "budget" || basisOfLearningApplicant === "budget",
    amountByEvaluation: {
      "<=244": 4670,
      "245-264": 4670,
      "265-300": 4670,
      "Еще нет оценок": (formData) => (formData.isOrphan ? 7090 : 4670),
      "Тройки или долги": (formData) => (formData.isOrphan ? 7090 : 4670),
      "Четверки": (formData) => (formData.isOrphan ? 13370 : 9520),
      "Четверки и пятерки": (formData) => (formData.isOrphan ? 13370 : 9520),
      "Пятерки": (formData) => (formData.isOrphan ? 13370 : 9520),
    },
    needsDocuments: true,
  },
  {
    name: "Краевая выплата",
    amountByEvaluation: {
      "<=244": 0,
      "245-264": (formData) => (formData.directionOfApplicant === "highpoints" ? 0 : 6000),
      "265-300": 6000,
      "Еще нет оценок": 0,
      "Тройки или долги": 0,
      "Четверки": 6000,
      "Четверки и пятерки": 6000,
      "Пятерки": 6000,
    },
    key: "regional",
    condition: ({ basis, basisOfLearningApplicant, course }) => basis === "budget" && course <= 2 || basisOfLearningApplicant === "budget",
    needsDocuments: true,
  },
  {
    name: "Стипендия Правительства РФ",
    amountByEvaluation: {
      "<=244": 0,
      "245-264": 0,
      "265-300": 0,
      "Еще нет оценок": 0,
      "Тройки или долги": 0,
      "Четверки": 7000,
      "Четверки и пятерки": 7000,
      "Пятерки": 7000,
    },
    key: "gov",
    condition: [
      ({ direction }) => !direction.includes("09.03.03 Прикладная информатика"),
      ({ basis, basisOfLearningApplicant }) =>
        basis === "budget" || basisOfLearningApplicant === "budget",
    ],
    needsDocuments: true,
  },
  {
    name: "Стипендия Президента РФ",
    amountByEvaluation: {
      "<=244": 0,
      "245-264": 0,
      "265-300": 0,
      "Еще нет оценок": 0,
      "Тройки или долги": 0,
      "Четверки": 10000,
      "Четверки и пятерки": 10000,
      "Пятерки": 10000,
    },
    key: "president",
    condition: [
      ({ direction }) => !direction.includes("09.03.03 Прикладная информатика"),
      ({ basis, basisOfLearningApplicant }) =>
        basis === "budget" || basisOfLearningApplicant === "budget",
    ],
    needsDocuments: true,
  },
  {
    name: "Стипендия для студентов платной основы от ППОС СФУ",
    amount: 1000,
    key: "ppos",
    condition: ({ basis, basisOfLearningApplicant, isUnion }) => basis === "paying" && isUnion || basisOfLearningApplicant === "paying",
    needsDocuments: true,
  },
];

export const calculateScholarship = (formData) => {
  const evaluationMap = {
    "<=244": "<=244",
    "245-264": "245-264",
    "265-300": "265-300",
    "Еще нет оценок": "Еще нет оценок",
    "Тройки или академическая задолженность": "Тройки или долги",
    "Четверки": "Четверки",
    "Четверки и пятерки": "Четверки и пятерки",
    "Пятерки": "Пятерки",
  };

  const evalKey =
    evaluationMap[formData.evaluations] ||
    formData.evaluations ||
    evaluationMap[formData.amountOfPoints] ||
    formData.amountOfPoints;

  let guaranteedSum = 0;
  let possibleSum = 0;

  const results = SCHOLARSHIPS.map((sch) => {
    let conditionPassed = false;

    try {
      if (Array.isArray(sch.condition)) {
        conditionPassed = sch.condition.every((cond) => cond(formData));
      } else if (typeof sch.condition === "function") {
        conditionPassed = sch.condition(formData);
      }
    } catch {
      conditionPassed = false;
    }

    const regionalMultiplier = 1.2;
    let amount = 0;

    if (sch.amountByEvaluation) {
      const val = sch.amountByEvaluation[evalKey];
      amount =
        typeof val === "function"
          ? val(formData) * regionalMultiplier
          : val * regionalMultiplier;
    } else if (sch.amount) {
      amount = sch.amount * regionalMultiplier;
    }

    let status = "danger";

    if (amount > 0 && conditionPassed) {
      if (sch.needsDocuments) {
        status = "warning";
        possibleSum += amount;
      } else {
        status = "success";
        guaranteedSum += amount;
        possibleSum += amount;
      }
    }

    return {
      key: sch.key,
      name: sch.name,
      amount: conditionPassed ? amount : 0,
      status,
    };
  });

  if (formData.isUnion) {
    guaranteedSum *= 0.97;
    possibleSum *= 0.97;
  }

  return {
    results,
    guaranteedSum,
    possibleSum,
  };
}