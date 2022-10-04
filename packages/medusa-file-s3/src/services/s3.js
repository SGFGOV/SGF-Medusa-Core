import fs from "fs"
import aws from "aws-sdk"
import { AbstractFileService } from "@medusajs/medusa"
const { getDefaultRoleAssumerWithWebIdentity } = require("@aws-sdk/client-sts")
const { defaultProvider } = require("@aws-sdk/credential-provider-node")
class S3Service extends AbstractFileService {
  constructor(x, options) {
    super(x, options)

    this.bucket_ = options.bucket
    this.s3Url_ = options.s3_url
    this.accessKeyId_ = options.access_key_id
    this.secretAccessKey_ = options.secret_access_key
    this.region_ = options.region
    this.endpoint_ = options.endpoint
    this.auth = this.accessKeyId_
      ? {
          accessKeyId: this.accessKeyId_,
          secretAccessKey: this.secretAccessKey_,
        }
      : {
          credentialDefaultProvider: defaultProvider({
            roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity,
          }),
        }
  }

  upload(file) {
    aws.config.setPromisesDependency(null)
    aws.config.update(
      {
        ...this.auth,
        region: this.region_,
        endpoint: this.endpoint_,
      },
      true
    )

    const s3 = new aws.S3()
    const params = {
      ACL: "public-read",
      Bucket: this.bucket_,
      Body: fs.createReadStream(file.path),
      Key: `${file.originalname}`,
    }

    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
          reject(err)
          return
        }

        resolve({ url: data.Location })
      })
    })
  }

  async delete(file) {
    aws.config.setPromisesDependency(null)
    aws.config.update(
      {
        ...this.auth,
        region: this.region_,
        endpoint: this.endpoint_,
      },
      true
    )

    const s3 = new aws.S3()
    const params = {
      Bucket: this.bucket_,
      Key: `${file}`,
    }

    return new Promise((resolve, reject) => {
      s3.deleteObject(params, (err, data) => {
        if (err) {
          reject(err)
          return
        }
        resolve(data)
      })
    })
  }

  async getUploadStreamDescriptor(fileData) {
    throw new Error("Method not implemented.")
  }

  async getDownloadStream(fileData) {
    aws.config.setPromisesDependency(null)
    aws.config.update(
      {
        ...this.auth,
        region: this.region_,
        endpoint: this.endpoint_,
      },
      true
    )
    const s3 = new aws.S3()
    const file = await s3
      .getObject({ Bucket: this.bucket_, Key: fileData.fileKey })
      .promise()
    const value = file.Body.toString()
    const Readable = require("stream").Readable
    const s = new Readable()
    s._read = () => {} // redundant? see update below
    s.push(value)
    s.push(null)
    return s
  }

  async getPresignedDownloadUrl(fileData) {
    throw new Error("Method not implemented.")
  }
}

export default S3Service
