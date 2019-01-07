("use strict");
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  endpoint: `https://service-hqaedcylmy.now.sh/` // This is a dummy service with disabled mutations
});
exports.prisma = new exports.Prisma();
