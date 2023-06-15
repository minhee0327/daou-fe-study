import { JsonObject } from 'type-fest'

export default defineEventHandler(async () => {
  // handle query params
  // const { name } = getQuery(event)

  // handle post data
  // const { age } = await readBody(event)
  // const { test } = await readBody(event)

  const { data } = await $fetch('') as JsonObject

  return data
})
