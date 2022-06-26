import type { Load } from "@sveltejs/kit"
import type { ArticleApi } from "$lib/api"

type fetch = (info: RequestInfo, init?: RequestInit) => Promise<Response>

export async function api(fetch: fetch, entrypoint: string): Promise<ArticleApi> {
  const api = await fetch(`/api/articles/${entrypoint}.json`)
  if (!api.ok) return { data: [] }
  return await api.json()
}

export const loader =
  (entrypoint: string): Load =>
  async ({ fetch, params }) => {
    const res = await api(fetch, entrypoint)
    const article = res.data.find((i) => i.slug === params.slug)
    if (article === undefined) {
      return {
        status: 404,
        error: new Error(`Could not find entry`),
      }
    }
    return { props: { data: article } }
  }
