import { JsonObject } from 'type-fest'

export default defineEventHandler(async (event) => {
  const { code } = event.context.params as Record<string, string>
  const { currencyKey } = useRuntimeConfig()
  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apiKey=${currencyKey}`
  const { data } = await $fetch(uri) as JsonObject
  return data
})
