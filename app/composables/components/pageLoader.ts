import type { Ref } from "vue";
import type { PageLoaderMethods } from "~/components/ui/loader";

let loaderRef: Ref<PageLoaderMethods | null> | null = null;

export const usePageLoader = (ref?: Ref<PageLoaderMethods | null>) => {
  if (ref) loaderRef = ref;

  const startPageLoader = () => loaderRef?.value?.startPageLoader?.();
  const endPageLoader = () => loaderRef?.value?.endPageLoader?.();

  return { startPageLoader, endPageLoader };
};
