import mongoose from "mongoose";
/*      unique: true,
max: 50,

*/

// DO NO REPEAT A VALUE IT MUST BE ATOMIC. except sth that is just accessing property like id.
const employerInfoSchema = new mongoose.Schema({
  userId: String, // if individual tg userid
  companyId: String, // if company
  spent: Number,
  balance: Number,
  rating: Number,
  ratingCountIdList: [String],
});

const reactionSchema = new mongoose.Schema({
  likeCountIdArray: [String],
  dislikeCountIdArray: [String],
});

const commentSchema = new mongoose.Schema({
  userId: String, // if individual tg userid
  companyId: String, // if company
  comment: String,
  reaction: reactionSchema,
});

const onSiteJobSchema = new mongoose.Schema({
  userId: String, // if individual tg userid
  companyId: String, // if company eg. normal company or job posing ones
  comments: [commentSchema],
  rating: Number,
  ratingCountIdList: [String],
});

const remoteJobSchema = new mongoose.Schema({
  title: String,
  description: String,
  creatorEmployerInfo: employerInfoSchema,
});
const tgFileSchema = new mongoose.Schema({
  fileId: {
    type: String,
  },
  uniqueFileId: {
    type: String,
  },
  tempUrl: {
    type: String,
  },
  urlLastUpdate: {
    type: Date,
  },
});
const deliverymanBusinessInfoSchema = new mongoose.Schema({});

const userSchema = new mongoose.Schema(
  {
    avatar: tgFileSchema,
    firstName: {
      type: String,
      //   required: true,
    },
    fatherName: {
      type: String,
    },
    username: {
      type: String,
    },
    userId: {
      type: String,
    },
    PhoneNumber: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    lastSeen: {
      type: Date,
    },
    companiesIdList: {
      type: [String],
    },
    rideBusinessId: {
      type: String,
    },
    companyTags: {
      type: [String],
    },
    deliverymanBusinessInfo: deliverymanBusinessInfoSchema,
    adminAtCompaniesIdList: [String],
    ownerAtCompanyId: String,
    employerInfo: employerInfoSchema,
    remoteJobPosts: remoteJobSchema,
    siteJobPosts: onSiteJobSchema,
    shortsAccountId: String,
    walletAccountId: String,
    email: {
      type: String,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    isSystemAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      //   required: true,
    },
    desc: {
      type: String,
      //   required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      //   required: true,
    },
    slug: {
      type: String,
      //   required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const entitySchema = new mongoose.Schema({
  offset: Number,
  length: Number,
  type: String, // externalLink | mentionTg | mentionHere | bold | italic | color = #number |
  linkForExternalLink: String,
  userIdForMentionTgorHere: String,
  usernameForMentionTgorHere: String,
  colorHex: Number,
});

const TextSchema = new mongoose.Schema({
  text: String,
  entities: [entitySchema],
});

const freelancerSchema = new mongoose.Schema({
  userId: String,
  description: TextSchema,
  portfolioFiles: [tgFileSchema],
});

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      //   required: true,
    },
    channelOrGroupId: {
      type: String,
    },
    productsIdList: {
      type: [String],
    },
    digitalProductsIdList: {
      type: [String],
    },
    fixedLocation: {
      lat: String,
      log: String,
      name: String,
    },
    remoteJobPosts: { type: [String] },
    siteJobPosts: { type: [String] },
    shortsAccountId: {
      type: String,
    },
    walletAccountId: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      max: 50,
    },
    desc: {
      type: String,
      //   required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      //   required: true,
    },
    slug: {
      type: String,
      //   required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
const userSchema2 = new mongoose.Schema({ firstName: String });

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);

// Ensure indexes on first use of the model
User.ensureIndexes().catch((err) =>
  console.error("Error ensuring indexes:", err)
);
