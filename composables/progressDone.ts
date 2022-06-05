/**
 * Completes the progress bar within the onBeforeMount hook.
 */
export function useProgressDone() {
  onBeforeMount(() => {
    const { $NProgress } = useNuxtApp()
    $NProgress.done()
  })
}

