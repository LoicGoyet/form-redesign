export const getProfile = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return {
    email: 'loic.goyet@resilience.care',
    password: 'testtesttest',
    confirmPassword: 'testtesttest',
  }
}
