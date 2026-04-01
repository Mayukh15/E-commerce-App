const { Client, Environment } = require("@paypal/paypal-server-sdk");

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId:
      "AUyPcrHohDdSTGKuKhlVbsOAD4U2br2VmRYI1tPsFkdjNU8xMWZtchnrghvVOyj0GlZr-Pvic8luFHUu",
    oAuthClientSecret:
      "EOdPaoudqIxNEzWE4_I6QKS-G4L1Xja2DsU_CL_RkPKybDVhDUa4bRulkqNAtH2_CAmALkJs8plhpA5x",
  },
  environment: Environment.Sandbox,
});

module.exports = client;
