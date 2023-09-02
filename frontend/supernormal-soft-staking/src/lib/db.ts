export async function getDatabaseTokens(address: string) {
  const resp = await fetch(`/api/stake/${address}`)
  const databaseTokens = await resp.json()

  return databaseTokens[0].docs.map((a: { tokenId: string }) => a.tokenId)
}
