const path = require("path")

const setupServer = require("../../../helpers/setup-server")
const { useApi } = require("../../../helpers/use-api")
const { initDb, useDb } = require("../../../helpers/use-db")

const adminSeeder = require("../../helpers/admin-seeder")
const productSeeder = require("../../helpers/product-seeder")

jest.setTimeout(50000)

describe("/admin/product-tags", () => {
  let medusaProcess
  let dbConnection

  beforeAll(async () => {
    const cwd = path.resolve(path.join(__dirname, "..", ".."))
    dbConnection = await initDb({ cwd })
    medusaProcess = await setupServer({ cwd })
  })

  afterAll(async () => {
    const db = useDb()
    await db.shutdown()

    medusaProcess.kill()
  })

  describe("GET /admin/product-tags", () => {
    beforeEach(async () => {
      await productSeeder(dbConnection)
      await adminSeeder(dbConnection)
    })

    afterEach(async () => {
      const db = useDb()
      await db.teardown()
    })

    it("returns a list of product tags", async () => {
      const api = useApi()

      const res = await api
        .get("/admin/product-tags", {
          headers: {
            Authorization: "Bearer test_token",
          },
        })
        .catch((err) => {
          console.log(err)
        })

      expect(res.status).toEqual(200)

      const tagMatch = {
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }

      expect(res.data.product_tags).toMatchSnapshot([
        tagMatch,
        tagMatch,
        tagMatch,
      ])
    })

    it("returns a list of product tags matching free text search param", async () => {
      const api = useApi()

      const res = await api
        .get("/admin/product-tags?q=123", {
          headers: {
            Authorization: "Bearer test_token",
          },
        })
        .catch((err) => {
          console.log(err)
        })

      expect(res.status).toEqual(200)

      const tagMatch = {
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }

      expect(res.data.product_tags.length).toEqual(3)
      expect(res.data.product_tags.map((pt) => pt.value)).toEqual(
        expect.arrayContaining(["123", "1235", "1234"])
      )

      expect(res.data.product_tags).toMatchSnapshot([
        tagMatch,
        tagMatch,
        tagMatch,
      ])
    })
  })
})
