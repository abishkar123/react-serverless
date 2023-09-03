
const AWS = require('aws-sdk');


AWS.config.update({
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
    region: "us-east-1"
})

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'CreateContact',
  KeySchema: [
    { AttributeName: 'email', KeyType: 'HASH' }, // Primary Key
  ],
  AttributeDefinitions: [
    { AttributeName: 'fname', AttributeType: 'S' }, // Replace with the data type of your key
    { AttributeName: 'lname', AttributeType: 'S' }, // Replace with the data type of your key
    { AttributeName: 'email', AttributeType: 'S' }, // Replace with the data type of your key
    { AttributeName: 'phonenumber', AttributeType: 'S' }, // Replace with the data type of your key
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5, // Adjust according to your needs
    WriteCapacityUnits: 5, // Adjust according to your needs
  },
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created successfully:', data);
  }
});
