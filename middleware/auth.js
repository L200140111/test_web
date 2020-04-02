export default async ({ store, redirect }) => {
  if (!store.state.auth.token) {
    return redirect('/')
  } else {
    await store.dispatch('payment/GET_CHECK')
  }
}