export const postLogin = async <Values extends object>(
  values: Values
): Promise<
  | {
      ok: true
    }
  | {
      ok: false
      errors: Partial<Record<keyof Values, string>>
    }
> => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const isOk = Math.random() > 0.5

  if (isOk) {
    return { ok: true }
  }

  return {
    ok: false,
    errors: Object.keys(values).reduce(
      (acc, key) => ({
        ...acc,
        [key]: 'test',
      }),
      {}
    ),
  }
}
