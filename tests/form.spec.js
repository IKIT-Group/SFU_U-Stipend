import { test, expect, devices } from '@playwright/test';

test.describe('Форма расчёта стипендии', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('По умолчанию выбран статус "Студент"', async ({ page }) => {
    const studentBtn = page.locator('button#student');
    const applicantBtn = page.locator('button#applicant');
    await expect(studentBtn).toHaveClass(/isActive/);
    await expect(applicantBtn).not.toHaveClass(/isActive/);
  });

  test('При переключении на "Абитуриент" появляются другие поля', async ({ page }) => {
    await page.click('button#applicant');

    await expect(page.locator('select#course-number')).toHaveCount(0);
    await expect(page.locator('select#amount-of-points')).toBeVisible();
    await expect(page.locator('select#direction-of-applicant')).toBeVisible();
  });

  test('Можно заполнить форму студента и отправить', async ({ page }) => {
    await page.selectOption('#direction', { index: 1 });
    await page.selectOption('#course-number', { index: 1 });
    await page.selectOption('#basis-of-learning', 'budget');
    await page.selectOption('#evaluations', 'Пятерки');

    await page.check('#student-organization');
    await page.check('#student-orphan');

    await page.click('button[type="submit"]');

    await expect(page.locator('#direction')).toHaveValue(/.+/);
  });

  test('Можно заполнить форму абитуриента и отправить', async ({ page }) => {
    await page.click('button#applicant');
    await page.selectOption('#amount-of-points', '265-300');
    await page.selectOption('#direction-of-applicant', '09.03.04');
    await page.selectOption('#basis-of-learning-applicant', 'paying');

    await page.click('button[type="submit"]');

    await expect(page.locator('#amount-of-points')).toHaveValue('265-300');
  });

  // test('Проверка наличия поля "Фамилия" (намеренно ошибочный тест)', async ({ page }) => {
  //   await page.goto('http://localhost:5173');
  //
  //   const lastNameInput = page.locator('input#last-name');
  //
  //   await expect(lastNameInput).toBeVisible();
  // });

  test('Форма корректно отображается на мобилке', async ({ page, browser }) => {
    const context = await browser.newContext({
      ...devices['iPhone 12'],
    });
    const mobilePage = await context.newPage();
    await mobilePage.goto('http://localhost:5173');

    const form = mobilePage.locator('form');
    await expect(form).toBeVisible();

    const box = await form.boundingBox();
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.width).toBeLessThanOrEqual(390);

    await context.close();
  });

  test('Форма остаётся доступной при ресайзе окна', async ({ page }) => {
    await page.goto('http://localhost:5173');

    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.locator('form')).toBeVisible();

    await page.setViewportSize({ width: 375, height: 812 });
    await expect(page.locator('form')).toBeVisible();

    const submitBtn = page.locator('button[type="submit"]');
    await expect(submitBtn).toBeVisible();
  });

  test('Данные сохраняются при переключении между студентом и абитуриентом', async ({ page }) => {
    await page.goto('http://localhost:5173');

    await page.selectOption('#direction', { index: 1 });
    await page.selectOption('#course-number', { index: 1 });
    await page.selectOption('#basis-of-learning', 'budget');
    await page.selectOption('#evaluations', 'Четверки');
    await page.check('#student-organization');

    await page.click('button#applicant');
    await expect(page.locator('#amount-of-points')).toBeVisible();

    await page.selectOption('#amount-of-points', '265-300');
    await page.selectOption('#direction-of-applicant', '09.03.04');
    await page.selectOption('#basis-of-learning-applicant', 'paying');

    await page.click('button#student');

    await expect(page.locator('#direction')).toHaveValue(/.+/);
    await expect(page.locator('#basis-of-learning')).toHaveValue('budget');
    await expect(page.locator('#evaluations')).toHaveValue('Четверки');
    await expect(page.locator('#student-organization')).toBeChecked();

    await page.click('button#applicant');
    await expect(page.locator('#amount-of-points')).toHaveValue('265-300');
    await expect(page.locator('#basis-of-learning-applicant')).toHaveValue('paying');
  });
});
