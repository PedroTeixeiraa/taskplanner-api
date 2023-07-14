require('dotenv/config');
const {
    SecretsManagerClient,
    GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");

const client = new SecretsManagerClient({
    region: process.env.AWS_REGION,
});

const getSecret = async () => {
    let response;

    try {
        response = await client.send(
            new GetSecretValueCommand({
                SecretId: process.env.AWS_SECRET_NAME,
                VersionStage: "AWSCURRENT",
            })
        );
    } catch (error) {
        throw error;
    }

    return JSON.parse(response.SecretString);
}


module.exports = {
    getSecret,
}