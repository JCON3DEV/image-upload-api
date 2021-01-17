const express = require("express");
const router = express.Router();
const models = require("../../models");
const sharp = require("sharp");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const { v4: uuidv4 } = require("uuid");
const aws = require("aws-sdk");
const s3 = new aws.S3({
  signatureVersion: "v4",
  region: "ca-central-1",
});

const S3_BUCKET = "jcon3dev-image-upload-storage";


router.get("/api/uploads", async (req, res) => {
  let uploadList = await models.uploads.findAll({
    include: [
      {
        model: models.images,
        as: "image",
      },
      {
        model: models.images,
        as: "thumbnail",
      },
    ],
  });

  uploadList = await Promise.all(
    uploadList.map(async (upload) => {
      const [imageUrl, thumbnailUrl] = await Promise.all([
        getSignedUrl(upload.image.bucket, upload.image.key),
        getSignedUrl(upload.thumbnail.bucket, upload.thumbnail.key),
      ]);
      return {
        ...upload.toJSON(),
        imageUrl,
        thumbnailUrl,
      };
    })
  );

  res.send(uploadList);
});

router.post("/api/uploads", upload.single("image"), async (req, res) => {
  const id = uuidv4();
  const thumbnailId = uuidv4();
  const thumbnail = await sharp(req.file.buffer).resize(200).toBuffer();

  await Promise.all([
    uploadToS3(`images/${id}`, req.file.buffer, req.file.mimetype),
    uploadToS3(`thumbnails/${thumbnailId}`, thumbnail, req.file.mimetype),
  ]);

  await Promise.all([
    models.images.create({
      id,
      bucket: S3_BUCKET,
      key: `images/${id}`,
    }),
    models.images.create({
      id: thumbnailId,
      bucket: S3_BUCKET,
      key: `thumbnails/${thumbnailId}`,
    }),
  ]);

  await models.uploads.create({
    file_name: req.file.originalname,
    image_id: id,
    thumbnail_id: thumbnailId,
  });

  res.sendStatus(201);
});

module.exports = router;
