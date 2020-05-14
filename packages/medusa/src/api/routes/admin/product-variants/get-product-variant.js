export default async (req, res) => {
  const { id } = req.params

  try {
    const productVariantService = req.scope.resolve("productVariantService")
    const productVariant = await productVariantService.retrieve(id)

    res.json(productVariant)
  } catch (error) {
    throw error
  }
}
